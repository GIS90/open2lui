<template>
  <div>
    <el-dialog
      :visible="show"
      :width="dialogAttrs.width"
      :fullscreen="fullScreenStatus"
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
      <!--title-->
      <template #title>
        <div @dblclick="handleFull">
          <span class="dialog-title">
            <span v-text="dialogAttrs.title" />
            <el-tooltip class="item" effect="dark" content="关闭" placement="top">
              <i class="el-icon-close dialog-title-close" @click="closeDialog" />
            </el-tooltip>
            <el-tooltip class="item" effect="dark" :content="fullScreenText" placement="top">
              <i :class="[fullScreenIcon, 'dialog-title-full']" @click="handleFull" />
            </el-tooltip>
          </span>
        </div>
      </template>
      <!--content-->
      <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto" style="width: 100%">
        <!--模式-->
        <el-form-item>
          <el-switch
            v-model="edit"
            class="sw-sty"
            style="display: block"
            :disabled="switchAttrs.disabled"
            :width="switchAttrs.width"
            :active-text="switchAttrs.activeText"
            :inactive-text="switchAttrs.inactiveText"
            :active-color="switchAttrs.activeColor"
            :inactive-color="switchAttrs.inactiveColor"
            :active-value="switchAttrs.activeValue"
            :inactive-value="switchAttrs.inactiveValue"
            @change="changeStatus($event)"
          />
        </el-form-item>
        <!-- 基本信息 -->
        <el-divider content-position="left">基本信息</el-divider>
        <el-form-item label="RTX名称">
          <el-input
            v-model.trim="rtxId"
            type="text"
            placeholder="请输入RTX名称（建议使用英文）"
            :maxlength="formDataLimit.rtx"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            disabled
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
            :prefix-icon="edit ? 'el-icon-edit' : inputAttrs.prefixIcon"
            :disabled="!edit"
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
            :prefix-icon="edit ? 'el-icon-edit' : inputAttrs.prefixIcon"
            :disabled="!edit"
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
            :prefix-icon="edit ? 'el-icon-edit' : inputAttrs.prefixIcon"
            :disabled="!edit"
          />
        </el-form-item>
        <!-- 权限 -->
        <el-divider content-position="left">权限信息</el-divider>
        <el-form-item label="角色" prop="role">
          <el-select
            v-model="formData.role"
            style="width: 100%"
            :placeholder="selectAttrs.placeholder"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="formDataLimit.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
            :prefix-icon="edit ? 'el-icon-edit' : inputAttrs.prefixIcon"
            :disabled="!edit"
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
            v-model="formData.introduction"
            type="textarea"
            placeholder="请输入自我介绍"
            :rows="textAreaAttrs.rows"
            :autosize="{ minRows: 4, maxRows: 6 }"
            :maxlength="formDataLimit.introduction"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="edit ? 'el-icon-edit' : inputAttrs.prefixIcon"
            :disabled="!edit"
          />
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span v-show="edit" class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submitUpdateUser()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { userDetail, userUpdate } from '@/api/manage'
import { validEmail, validPhone } from '@/utils/validate'

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
  name: 'UserDetail',
  emits: ['close-detail-user'],
  components: {},
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    rtxId: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      edit: false, // 编辑状态
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '用户详情',
        width: '40%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '3%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: false, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: '', // input前缀icon
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
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 35, // 宽度（像素），默认40
        activeText: '编辑模式', // 打开时的文字描述
        inactiveText: '视图模式', // 关闭时的文字描述
        activeValue: true, // 打开时的value
        inactiveValue: false, // 打开时的value
        activeColor: '#ff4949', // 打开时的背景色
        inactiveColor: '#13ce66' // 关闭时的背景色
      },
      // data
      roles: [],
      formData: {
        name: '', // 昵称
        phone: '', // 电话
        email: '', // 邮箱
        introduction: '', // 描述
        role: [] // 角色
      },
      formDataLimit: {
        name: '30',
        phone: '11',
        email: '35',
        introduction: '255',
        role: '0'
      },
      formDataRules: {
        name: [{ required: true, trigger: 'blur', validator: validateUserName }],
        phone: [{ required: true, trigger: 'blur', validator: validateUserPhone }],
        email: [{ required: false, trigger: 'blur', validator: validateUserEmail }],
        role: [{ required: true, trigger: 'blur', validator: validateUserRole }]
      }
    }
  },
  computed: {},
  watch: {
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    }
  },
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      if (!this.rtxId) {
        this.$emit('close-detail-user', false)
      }
      // 初始化非全屏
      this.fullScreenStatus = false
      this.edit = false // 重置UPDATE状态
      // 信息初始化
      this.$nextTick(() => {
        this.getUserInfo()
        // 重置表单状态
        this.$refs.formData.resetFields()
      })
    },
    closeDialog() { // 关闭dialog
      // 清空表单状态
      this.$refs.formData.clearValidate()
      this.$emit('close-detail-user', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    getUserInfo() { // 获取User detail
      const params = {
        'rtx_id': this.rtxId
      }
      return new Promise((resolve, reject) => {
        userDetail(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.name = data.name
            this.formData.phone = data.phone
            this.formData.email = data.email
            this.formData.introduction = data.introduction
            this.formData.role = data.role
            this.roles = data.roles
          } else {
            this.$emit('close-detail-user', false) // 初始化信息失败，关闭dg
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submitUpdateUser() { // 提交 && 更新
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.edit = false
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'to_rtx_id': this.rtxId,
            'name': this.formData.name,
            'phone': this.formData.phone,
            'email': this.formData.email,
            'role': this.formData.role,
            'introduction': this.formData.introduction
          }
          return new Promise((resolve, reject) => {
            userUpdate(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '用户更新成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-detail-user', true)
              }
              resolve(response)
            }).catch(error => {
              reject(error)
            }).finally(() => {
              // 重置按钮状态
              // this.edit = true
              this.disabled = false
              this.loading = false
              // 清空表单状态
              this.$refs.formData.clearValidate()
            })
          })
        }
      })
    },
    changeStatus(value) {
      this.edit = value
    }
  }
}
</script>

<style scoped>
.sw-sty {
  text-align: right;
}
</style>
