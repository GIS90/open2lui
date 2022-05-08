<template>
  <el-form ref="userForm" :model="userForm" :rules="userRules" class="login-form">
    <el-form-item>
      <el-switch
        v-model="edit"
        active-color="#ff4949"
        inactive-color="#13ce66"
        active-text="编辑模式"
        inactive-text="视图模式"
      />
    </el-form-item>
    <el-form-item label="昵称" prop="name">
      <el-input
        ref="userName"
        v-model.trim="userForm.name"
        type="text"
        placeholder="请输入昵称"
        :clearable="clear"
        :disabled="!edit"
        maxlength="10"
        show-word-limit
      />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        ref="userEmail"
        v-model.trim="userForm.email"
        type="text"
        placeholder="请输入邮箱"
        :clearable="clear"
        :disabled="!edit"
        maxlength="35"
        show-word-limit
      />
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input
        ref="userPhone"
        v-model.trim="userForm.phone"
        type="text"
        placeholder="电话"
        :clearable="clear"
        :disabled="!edit"
        maxlength="11"
        show-word-limit
      />
    </el-form-item>
    <el-form-item label="自我介绍">
      <el-input
        v-model="userForm.introduction"
        :autosize="{ minRows: 3, maxRows: 6 }"
        type="textarea"
        placeholder="请输入自我介绍"
        :disabled="!edit"
        maxlength="255"
        show-word-limit
      />
    </el-form-item>
    <el-form-item v-show="edit">
      <el-button
        type="primary"
        :loading="loading"
        @click.native.prevent="submitUserForm()"
      >更新</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { validEmail, validPhone } from '@/utils/validate.js'
import { updateInfo } from '@/api/user'

const validateUserName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入用户昵称'))
  } else if (value.length > 10) {
    callback(new Error('用户昵称最大长度为10'))
  } else {
    callback()
  }
}

const validateUserEmail = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入用户邮箱'))
  } else if (!validEmail(value)) {
    callback(new Error('请输入正确邮箱'))
  } else if (value.length > 35) {
    callback(new Error('用户邮箱最大长度为35'))
  } else {
    callback()
  }
}

const validateUserPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入用户电话'))
  } else if (!validPhone(value)) {
    callback(new Error('请输入正确电话'))
  } else if (value.length > 11) {
    callback(new Error('用户电话最大长度为11'))
  } else {
    callback()
  }
}

export default {
  name: 'Account',
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          phone: '',
          introduction: ''
        }
      }
    },
    rtx: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      edit: false,
      clear: true, // Input输入框是否支持一键清除
      loading: false, // 提交按钮是否处于loading状态
      userForm: {
        rtx_id: this.rtx,
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        introduction: this.user.introduction
      },
      userRules: {
        name: [{ required: true, trigger: 'blur', validator: validateUserName }],
        email: [{ required: true, trigger: 'blur', validator: validateUserEmail }],
        phone: [{ required: true, trigger: 'blur', validator: validateUserPhone }]
      }
    }
  },
  methods: {
    submitUserForm() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          this.loading = true
          return new Promise((resolve, reject) => {
            updateInfo(this.userForm).then(response => {
              this.loading = false
              const { status_id, message, data } = response
              if (status_id === 100) {
                this.$message({
                  message: '用户信息更新成功',
                  type: 'success',
                  duration: 2.5 * 1000
                })
                this.$store.commit('user/SET_USER', data)
                // 刷新当前路由进行数据重新获取
                setTimeout(() => {
                  this.$router.go(0)
                }, 2500)
                resolve(data)
              } else {
                this.$message({
                  message: message,
                  type: 'error',
                  duration: 2.5 * 1000
                })
                reject(message)
              }
            }).catch(error => {
              this.loading = false
              reject(error)
            })
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
