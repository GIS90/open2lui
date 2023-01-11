<template>
  <div>
    <el-button type="success" @click="openDialog()">
      <svg-icon icon-class="password" /> 更改密码
    </el-button>
    <el-dialog
      :visible.sync="status"
      width="40%"
      title="密码设置（6-25位英文、数字、特殊字符任意组合）"
      @close="closeDialog()"
      @open="initDialog()"
    >
      <el-form :label-position="labelPosition" label-width="auto">
        <el-form-item label="原密码">
          <el-input
            v-model.trim="oldPassword"
            type="password"
            placeholder="请输入老密码"
            maxlength="25"
            show-password
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="新密码" style="margin-top: 20px">
          <el-input
            v-model.trim="newPassword"
            type="password"
            placeholder="请输入新密码"
            maxlength="25"
            show-password
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="确认密码" style="margin-top: 20px">
          <el-input
            v-model.trim="confirmPassword"
            type="password"
            placeholder="再次输入确认密码"
            maxlength="25"
            show-password
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="备注" style="margin-top: 20px">
          <div class="info_red">密码重置成功后，会自动退出，重新登录请使用新密码！</div>
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :loading="loading" :disabled="disabled" type="primary" @click="submitPassword()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { updatePassword } from '@/api/user'
import { mapGetters } from 'vuex'

export default {
  name: 'Password',
  data() {
    return {
      disabled: false,
      loading: false,
      status: false, // 是否显示密码dialog
      oldPassword: '', // 老密码
      newPassword: '', // 新密码
      confirmPassword: '', // 验证密码
      labelPosition: 'left' // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
    }
  },
  computed: {
    ...mapGetters([
      'rtx_id'
    ])
  },
  methods: {
    initDialog() {
      this.oldPassword = ''
      this.newPassword = ''
      this.confirmPassword = ''
      this.disabled = false
    },
    openDialog() {
      this.status = true
    },
    closeDialog() {
      this.status = false
      this.oldPassword = ''
      this.newPassword = ''
      this.confirmPassword = ''
    },
    checkPassword() {
      if (!this.oldPassword) {
        this.$message({
          message: '请输入老密码',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (!this.newPassword) {
        this.$message({
          message: '请输入新密码',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (!this.confirmPassword) {
        this.$message({
          message: '请再次输入确认密码',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (this.newPassword.length < 6 || this.confirmPassword.length < 6) {
        this.$message({
          message: '用户密码最小长度为6',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (this.newPassword.length > 35 || this.confirmPassword.length > 35) {
        this.$message({
          message: '用户密码最大长度为25',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else if (this.newPassword !== this.confirmPassword) {
        this.$message({
          message: '两次输入的密码不一致，请重新输入',
          type: 'warning',
          duration: 2.5 * 1000
        })
        return false
      } else {
        return true
      }
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    submitPassword() {
      if (!this.checkPassword()) {
        return false
      }
      const data = {
        'rtx_id': this.rtx_id,
        'old_password': this.oldPassword,
        'new_password': this.newPassword,
        'con_password': this.confirmPassword
      }
      this.loading = true
      this.disabled = true
      return new Promise((resolve, reject) => {
        updatePassword(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '更改密码成功' || message,
              type: 'success',
              duration: 2.5 * 1000
            })
            setTimeout(() => {
              this.closeDialog()
              // 更改密码添加强制退出
              this.logout()
            },
            2500)
            resolve(response)
          } else {
            reject(response)
          }
        }).catch(error => {
          reject(error)
        }).finally(() => {
          this.loading = false
          this.disabled = false
        })
      })
    }
  }
}
</script>
