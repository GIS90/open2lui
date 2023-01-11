<template>
  <el-form>
    <!--模式-->
    <el-form-item>
      <el-switch
        v-model="edit"
        style="display: block"
        :disabled="switchAttrs.disabled"
        :width="switchAttrs.width"
        :active-text="switchAttrs.activeText"
        :inactive-text="switchAttrs.inactiveText"
        :active-color="switchAttrs.activeColor"
        :inactive-color="switchAttrs.inactiveColor"
        :active-value="switchAttrs.activeValue"
        :inactive-value="switchAttrs.inactiveValue"
      />
    </el-form-item>
    <!--昵称-->
    <el-form-item label="昵称">
      <el-input
        v-model.trim="user.name"
        type="text"
        placeholder="请输入昵称"
        maxlength="30"
        :clearable="inputAttrs.clear"
        :show-word-limit="inputAttrs.limit"
        :size="inputAttrs.size"
        :prefix-icon="edit ? 'el-icon-edit' : ''"
        :disabled="!edit"
      />
    </el-form-item>
    <el-form-item v-if="edit" label="密码">
      <br>
      <password />
    </el-form-item>
    <!--邮箱-->
    <el-form-item label="邮箱">
      <el-input
        v-model.trim="user.email"
        type="text"
        placeholder="请输入邮箱"
        maxlength="35"
        :clearable="inputAttrs.clear"
        :show-word-limit="inputAttrs.limit"
        :size="inputAttrs.size"
        :prefix-icon="edit ? 'el-icon-edit' : ''"
        :disabled="!edit"
      />
    </el-form-item>
    <!--电话-->
    <el-form-item label="电话">
      <el-input
        v-model.trim="user.phone"
        type="text"
        placeholder="电话"
        maxlength="11"
        :clearable="inputAttrs.clear"
        :show-word-limit="inputAttrs.limit"
        :size="inputAttrs.size"
        :prefix-icon="edit ? 'el-icon-edit' : ''"
        :disabled="!edit"
      />
    </el-form-item>
    <!--自我介绍-->
    <el-form-item label="自我介绍">
      <el-input
        v-model="user.introduction"
        type="textarea"
        placeholder="请输入自我介绍"
        :rows="textAreaAttrs.rows"
        :autosize="{ minRows: 4, maxRows: 6 }"
        :maxlength="textAreaAttrs.length"
        :clearable="textAreaAttrs.clear"
        :show-word-limit="textAreaAttrs.limit"
        :prefix-icon="edit ? 'el-icon-edit' : ''"
        :disabled="!edit"
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
  emits: [],
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
      loading: false, // 提交按钮是否处于loading状态
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      textAreaAttrs: { // textArea attrs
        rows: 4, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '255', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 35, // 宽度（像素），默认40
        activeText: '编辑模式', // 打开时的文字描述
        inactiveText: '视图模式', // 关闭时的文字描述
        activeValue: true, // 打开时的value
        inactiveValue: false, // 打开时的value
        activeColor: '#ff4949', // 打开时的背景色
        inactiveColor: '#13ce66' // 关闭时的背景色
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
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
      } else if (value.length > 30) {
        this.$message({
          message: '用户昵称最大长度为30',
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
          reject(error)
        }).finally(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
