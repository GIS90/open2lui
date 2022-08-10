<template>
  <div>
    <el-dialog
      :visible="show"
      :title="dialogAttrs.title"
      :width="dialogAttrs.width"
      :fullscreen="dialogAttrs.fullScreen"
      :top="dialogAttrs.top"
      :modal="dialogAttrs.modal"
      :lock-scroll="dialogAttrs.lockScroll"
      :open-delay="dialogAttrs.openDelay"
      :close-delay="dialogAttrs.closeDelay"
      :close-on-click-modal="dialogAttrs.closeOnClickModal"
      :close-on-press-escape="dialogAttrs.closeOnPressEscape"
      :show-close="dialogAttrs.showClose"
      :draggable="dialogAttrs.draggable"
      :center="dialogAttrs.center"
      @open="openDialog()"
      @close="closeDialog()"
    >
      <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto">
        <el-form-item label="RTX名称" prop="rtx">
          <el-input
            v-model.trim="formData.rtx"
            type="text"
            placeholder="请输入RTX名称（建议使用英文）"
            :maxlength="formDataLimit.rtx"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <el-input
            v-model.trim="formData.name"
            type="text"
            placeholder="请输入昵称"
            :maxlength="formDataLimit.name"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input
            v-model.trim="formData.phone"
            type="text"
            placeholder="请输入联系电话，暂不支持国外电话"
            :maxlength="formDataLimit.phone"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model.trim="formData.email"
            type="text"
            placeholder="请输入邮箱"
            :maxlength="formDataLimit.email"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model.trim="formData.password"
            type="text"
            placeholder="请输入密码，默认为abc1234"
            show-password
            :clearable="inputAttrs.clear"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select
            v-model.trim="formData.role"
            style="width: 100%"
            :placeholder="selectAttrs.placeholder"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="formDataLimit.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option
              v-for="(item, index) in roles"
              :key="index"
              :label="item.value"
              :value="item.key"
            >
              <span style="float: left">{{ item.value }}</span>
              <span style="float: right; color: #8492a6; font-size: 14px">{{ item.key }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="自我介绍" prop="introduction">
          <el-input
            v-model.trim="formData.introduction"
            type="textarea"
            placeholder="请输入自我介绍"
            :rows="textAreaAttrs.rows"
            :autosize="{ minRows: 4, maxRows: 6 }"
            :maxlength="formDataLimit.introduction"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="textAreaAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submitAddUser()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { userAdd, initRoleSelect } from '@/api/manage'
import store from '@/store'
import { validEmail, validPhone } from '@/utils/validate'
import { defaultUserPassword } from '@/settings.js'

const validateUserRtx = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入RTX名称'))
  } else if (value.length > 25) {
    callback(new Error('RTX名称最大长度为25'))
  } else {
    callback()
  }
}

const validateUserName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入昵称'))
  } else if (value.length > 30) {
    callback(new Error('昵称最大长度为30'))
  } else {
    callback()
  }
}

const validateUserEmail = (rule, value, callback) => {
  if (value.length > 35) {
    callback(new Error('邮箱最大长度为35'))
  } else if (value && !validEmail(value)) {
    callback(new Error('请输入正确的邮箱'))
  } else {
    callback()
  }
}

const validateUserPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入联系电话'))
  } else if (!validPhone(value)) {
    callback(new Error('请输入正确的联系电话'))
  } else if (value.length !== 11) {
    callback(new Error('联系电话最大长度为11'))
  } else {
    callback()
  }
}

const validateUserRole = (rule, value, callback) => {
  if (value.length < 1) {
    callback(new Error('请选择用户角色'))
  } else {
    callback()
  }
}

export default {
  name: 'RoleAdd',
  emits: ['close-add-user'],
  components: {},
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      dialogAttrs: {
        title: '新增用户',
        width: '40%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '3%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: true, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      selectAttrs: { // select attrs
        multiple: true, // 多选
        clearable: true, // 清空选择
        filterable: false, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '请选择用户角色，可多选' // 默认显示内容
      },
      textAreaAttrs: { // textArea attrs
        rows: 2, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '255', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      // data
      roles: [],
      formData: {
        rtx: '', // rtx_id
        name: '', // 昵称
        phone: '', // 电话
        password: defaultUserPassword || 'abc1234', // 密码
        email: '', // 邮箱
        introduction: '', // 描述
        role: [] // 角色
      },
      formDataLimit: {
        rtx: '25',
        name: '30',
        phone: '11',
        password: '',
        email: '35',
        introduction: '255',
        role: '0'
      },
      formDataRules: {
        rtx: [{ required: true, trigger: 'blur', validator: validateUserRtx }],
        name: [{ required: true, trigger: 'blur', validator: validateUserName }],
        phone: [{ required: true, trigger: 'blur', validator: validateUserPhone }],
        email: [{ required: false, trigger: 'blur', validator: validateUserEmail }],
        role: [{ required: true, trigger: 'blur', validator: validateUserRole }]
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.initRoles()
  },
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      this.formData.rtx = ''
      this.formData.name = ''
      this.formData.phone = ''
      this.formData.password = ''
      this.formData.email = ''
      this.formData.introduction = ''
      this.formData.role = []
    },
    closeDialog() { // 关闭dialog
      this.$emit('close-add-user', false)
    },
    initRoles() { // 获取roles列表，初始化
      return new Promise((resolve, reject) => {
        initRoleSelect().then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.roles = data.list
          } else {
            this.roles = [{ key: 'admin', value: 'admin' }] // 请求不成功，默认为admin角色列表
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submitAddUser() { // 提交 and 关闭dg
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'add_rtx_id': store.getters.rtx_id,
            'rtx_id': this.formData.rtx,
            'name': this.formData.name,
            'phone': this.formData.phone,
            'password': this.formData.password,
            'email': this.formData.email,
            'role': this.formData.role,
            'introduction': this.formData.introduction
          }
          return new Promise((resolve, reject) => {
            userAdd(data).then(response => {
              this.disabled = false
              this.loading = false
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '用户新增成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-add-user', true)
              }
              resolve(response)
            }).catch(error => {
              this.disabled = false
              this.loading = false
              reject(error)
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
