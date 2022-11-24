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
        <span class="dialog-title">
          <span v-text="dialogAttrs.title" />
          <el-tooltip class="item" effect="dark" content="关闭" placement="top">
            <i class="el-icon-close dialog-title-close" @click="closeDialog" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" :content="fullScreenText" placement="top">
            <i :class="[fullScreenIcon, 'dialog-title-full']" @click="handleFull" />
          </el-tooltip>
        </span>
      </template>
      <!--content-->
      <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto" style="width: 100%">
        <el-form-item label="RTX名称" prop="engname">
          <el-input
            v-model.trim="formData.engname"
            type="text"
            placeholder="请输入角色RTX名称（建议使用英文）"
            :maxlength="formDataLimit.engname"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            prefix-icon="el-icon-collection-tag"
            :disabled="true"
          />
        </el-form-item>
        <el-form-item label="中文名称" prop="chnname">
          <el-input
            v-model.trim="formData.chnname"
            type="text"
            placeholder="请输入角色中文名称"
            :maxlength="formDataLimit.chnname"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="描述" prop="introduction">
          <el-input
            v-model.trim="formData.introduction"
            type="textarea"
            placeholder="请输入角色相关描述"
            :rows="textAreaAttrs.rows"
            :autosize="textAreaAttrs.autoSize"
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
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submitSetRole()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { roleDetail, roleUpdate } from '@/api/manage'
import store from '@/store'

const validateRoleEName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入角色RTX名称'))
  } else if (value.length > 25) {
    callback(new Error('角色RTX名称最大长度为15'))
  } else {
    callback()
  }
}

const validateRoleCName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入角色中文名称'))
  } else if (value.length > 25) {
    callback(new Error('角色中文名称最大长度为15'))
  } else {
    callback()
  }
}

const validateRoleIntrod = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入角色描述'))
  } else if (value.length > 55) {
    callback(new Error('角色描述最大长度为10'))
  } else {
    callback()
  }
}

export default {
  name: 'RoleSet',
  emits: ['close-set-role'],
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
    rowMd5: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '角色设置',
        width: '40%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
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
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      textAreaAttrs: { // textArea attrs
        rows: 2, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '55', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      // data
      formData: {
        engname: '', // 英文名称
        chnname: '', // 中文名称
        introduction: '' // 描述
      },
      formDataLimit: {
        engname: '25',
        chnname: '35',
        introduction: '55'
      },
      formDataRules: {
        engname: [{ required: true, trigger: 'blur', validator: validateRoleEName }],
        chnname: [{ required: true, trigger: 'blur', validator: validateRoleCName }],
        introduction: [{ required: true, trigger: 'blur', validator: validateRoleIntrod }]
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
    openDialog() { // 初始化操作，获取最新数据
      if (!this.rowMd5) {
        this.$emit('close-set-role', true)
        return false
      }
      // 初始化非全屏
      this.fullScreenStatus = false
      this.$nextTick(() => {
        this.getRoleInfo()
        // 重置表单状态
        this.$refs.formData.resetFields()
      })
    },
    closeDialog() { // 关闭dg
      this.$emit('close-set-role', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    getRoleInfo() { // 获取role最新数据
      const params = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        roleDetail(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.engname = data.engname
            this.formData.chnname = data.chnname
            this.formData.introduction = data.introduction
          } else {
            this.$emit('close-set-role')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submitSetRole() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'md5': this.rowMd5,
            'engname': this.formData.engname,
            'chnname': this.formData.chnname,
            'introduction': this.formData.introduction
          }
          return new Promise((resolve, reject) => {
            roleUpdate(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '角色设置成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-set-role', true)
              }
              resolve(response)
            }).catch(error => {
              reject(error)
            }).finally(() => {
              // 重置按钮状态
              this.disabled = false
              this.loading = false
              // 清空表单状态
              this.$refs.formData.clearValidate()
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
