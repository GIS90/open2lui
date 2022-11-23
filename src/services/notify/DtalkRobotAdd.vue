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
      <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto" style="width: 100%">
        <el-form-item label="名称" prop="name">
          <el-input
            v-model.trim="formData.name"
            type="text"
            placeholder="请输入Robot名称"
            :maxlength="formDataLimit.name"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="KEY" prop="key">
          <el-input
            v-model.trim="formData.key"
            type="text"
            placeholder="请输入Robot-KEY"
            :maxlength="formDataLimit.key"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="SECRET" prop="secret">
          <el-input
            v-model.trim="formData.secret"
            type="text"
            placeholder="请输入中Robot-SECRET"
            :maxlength="formDataLimit.secret"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model.trim="formData.description"
            type="textarea"
            placeholder="请输入Robot描述"
            :rows="textAreaAttrs.rows"
            :autosize="textAreaAttrs.autoSize"
            :maxlength="formDataLimit.description"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="textAreaAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="默认" prop="select">
          <el-switch
            v-model="formData.select"
            style="display: block; margin-top: 6px;"
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
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submit()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { notifyDtalkRobotAdd } from '@/api/notify'

const validateName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入Robot名称'))
  } else if (value.length > 20) {
    callback(new Error('Robot名称最大长度为20'))
  } else {
    callback()
  }
}

const validateKey = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入Robot-KEY'))
  } else if (value.length > 30) {
    callback(new Error('Robot-KEY最大长度为30'))
  } else {
    callback()
  }
}

const validateSecret = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入Robot-SECRET'))
  } else if (value.length > 70) {
    callback(new Error('Robot-SECRET最大长度为70'))
  } else {
    callback()
  }
}

const validateDesc = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入Robot描述'))
  } else if (value.length > 120) {
    callback(new Error('描述最大长度为120'))
  } else {
    callback()
  }
}

export default {
  name: 'DtalkRobotAdd',
  emits: ['close-robot-add'],
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
        title: '新增',
        width: '45%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
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
      textAreaAttrs: { // textArea attrs
        rows: 4, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '80', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 35, // 宽度（像素），默认40
        activeText: '启用', // 打开时的文字描述
        inactiveText: '关闭', // 关闭时的文字描述
        activeValue: true, // 打开时的value
        inactiveValue: false, // 打开时的value
        activeColor: '#13ce66', // 打开时的背景色
        inactiveColor: '#ff4949' // 关闭时的背景色
      },
      // data
      formData: {
        name: '',
        key: '',
        secret: '',
        description: '',
        select: false
      },
      formDataLimit: {
        name: 30,
        key: 30,
        secret: 70,
        description: 120
      },
      formDataRules: {
        name: [{ required: true, trigger: 'blur', validator: validateName }],
        key: [{ required: true, trigger: 'blur', validator: validateKey }],
        secret: [{ required: true, trigger: 'blur', validator: validateSecret }],
        description: [{ required: true, trigger: 'blur', validator: validateDesc }]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      this.formData.name = ''
      this.formData.key = ''
      this.formData.secret = ''
      this.formData.description = ''
      this.$nextTick(() => {
        // 重置表单状态
        this.$refs.formData.resetFields()
      })
    },
    closeDialog() { // 关闭dialog
      // 清空表单状态
      this.$refs.formData.clearValidate()
      this.$emit('close-robot-add', false)
    },
    submit() { // 提交
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'name': this.formData.name,
            'key': this.formData.key,
            'secret': this.formData.secret,
            'description': this.formData.description,
            'select': this.formData.select
          }

          return new Promise((resolve, reject) => {
            notifyDtalkRobotAdd(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '新增成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-robot-add', true)
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
