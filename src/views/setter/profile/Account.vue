<template>
  <el-form>
    <!--模式-->
    <el-form-item>
      <el-switch
        v-model="edit"
        active-color="#ff4949"
        inactive-color="#13ce66"
        active-text="编辑模式"
        inactive-text="视图模式"
      />
    </el-form-item>
    <!--昵称-->
    <el-form-item label="昵称">
      <el-input
        v-model.trim="user.name"
        type="text"
        placeholder="请输入昵称"
        :clearable="clear"
        :disabled="!edit"
        maxlength="10"
        show-word-limit
      />
    </el-form-item>
    <el-form-item v-show="edit" label="密码">
      <br>
      <password />
    </el-form-item>
    <!--邮箱-->
    <el-form-item label="邮箱">
      <el-input
        v-model.trim="user.email"
        type="text"
        placeholder="请输入邮箱"
        :clearable="clear"
        :disabled="!edit"
        maxlength="35"
        show-word-limit
      />
    </el-form-item>
    <!--电话-->
    <el-form-item label="电话">
      <el-input
        v-model.trim="user.phone"
        type="text"
        placeholder="电话"
        :clearable="clear"
        :disabled="!edit"
        maxlength="11"
        show-word-limit
      />
    </el-form-item>
    <!--自我介绍-->
    <el-form-item label="自我介绍">
      <el-input
        v-model="user.introduction"
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
import Password from './Password.vue'

export default {
  name: 'Account',
  components: {
    'password': Password
  },
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
      edit: false, // 编辑模式
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '15', // 最大输入长度
        limit: true // 展示字数统计
      },
      clear: true, // Input输入框是否支持一键清除
      showWordLimit: true, // Input是否展示剩余字符数
      loading: false // 提交按钮是否处于loading状态
    }
  },
  methods: {
    checkRtx(value) {
      if (!value) {
        this.$message({
          message: '缺少rtx-id参数，请刷新页面',
          type: 'error',
          duration: 2.5 * 1000
        })
        return false
      } else {
        return true
      }
    },
    checkName(value) {
      if (!value) {
        this.$message({
          message: '请输入用户昵称',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (value.length > 35) {
        this.$message({
          message: '用户昵称最大长度为10',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else {
        return true
      }
    },
    checkEmail(value) {
      if (!value) {
        this.$message({
          message: '请输入用户邮箱',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (!validEmail(value)) {
        this.$message({
          message: '请输入正确邮箱',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (value.length > 35) {
        this.$message({
          message: '用户邮箱最大长度为35',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else {
        return true
      }
    },
    checkPhone(value) {
      if (!value) {
        this.$message({
          message: '请输入用户电话',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (!validPhone(value)) {
        this.$message({
          message: '请输入正确电话',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (value.length > 11) {
        this.$message({
          message: '用户电话最大长度为11',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else {
        return true
      }
    },
    submitUserForm() {
      this.loading = true
      if (!this.checkRtx(this.rtx) ||
        !this.checkName(this.user.name) ||
        !this.checkEmail(this.user.email) ||
        !this.checkPhone(this.user.phone)) {
        this.loading = false
        return false
      }
      const data = {
        rtx_id: this.rtx,
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        introduction: this.user.introduction
      }
      return new Promise((resolve, reject) => {
        updateInfo(data).then(response => {
          this.loading = false
          const { status_id, message, data } = response
          if (status_id === 100) {
            this.$message({
              message: '用户信息更新成功' || message,
              type: 'success',
              duration: 2.5 * 1000
            })
            this.$store.commit('user/SET_USER', data)
            this.edit = false
            resolve(data)
          } else {
            reject(response)
          }
        }).catch(error => {
          this.loading = false
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
