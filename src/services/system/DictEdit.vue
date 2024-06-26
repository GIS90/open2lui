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
        <el-form-item label="RTX名称" prop="name">
          <el-input
            v-model.trim="formData.name"
            type="text"
            placeholder="请输入RTX名称（建议使用英文）"
            :maxlength="formDataLimit.name"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            disabled
          />
        </el-form-item>
        <el-form-item label="枚举Key" prop="key">
          <el-input
            v-model.trim="formData.key"
            type="text"
            placeholder="请输入枚举key"
            :maxlength="formDataLimit.key"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            disabled
          />
        </el-form-item>
        <el-form-item label="枚举Value" prop="value">
          <el-input
            v-model.trim="formData.value"
            type="text"
            placeholder="请输入枚举Value"
            :maxlength="formDataLimit.value"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model="formData.description"
            type="textarea"
            placeholder="请输入枚举描述"
            :rows="textAreaAttrs.rows"
            :autosize="{ minRows: 4, maxRows: 6 }"
            :maxlength="formDataLimit.description"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch
            v-model="formData.status"
            style="display: block; margin-top: 6px;"
            :disabled="disabled"
            :width="switchAttrs.width"
            :active-text="switchAttrs.activeText"
            :inactive-text="switchAttrs.inactiveText"
            :active-color="switchAttrs.activeColor"
            :inactive-color="switchAttrs.inactiveColor"
            :active-value="switchAttrs.activeValue"
            :inactive-value="switchAttrs.inactiveValue"
          />
        </el-form-item>
        <el-form-item label="排序ID" prop="order_id">
          <el-input-number
            v-model="formData.order_id"
            style="width: 100%"
            :controls="numberAttrs.controls"
            :controls-position="numberAttrs.controlsPosition"
            :min="numberAttrs.min"
            :max="numberAttrs.max"
            :step="numberAttrs.step"
            :size="numberAttrs.size"
            :disabled="disabled"
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
import { SystemDictDetail, SystemDictUpdate } from '@/api/system'

const validateKey = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入枚举Key'))
  } else if (value.length > 55) {
    callback(new Error('枚举Key最大长度为55'))
  } else {
    callback()
  }
}

const validateValue = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入枚举Value'))
  } else if (value.length > 55) {
    callback(new Error('枚举Value最大长度为55'))
  } else {
    callback()
  }
}

const validateDescription = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入枚举描述'))
  } else if (value.length > 255) {
    callback(new Error('枚举描述最大长度为255'))
  } else {
    callback()
  }
}
export default {
  name: 'DictEdit',
  emits: ['close-edit'],
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
    md5: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '详情',
        width: '45%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '5%', // Dialog CSS 中的 margin-top 值
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
      numberAttrs: { // input number attrs
        size: '', // 大小：large, small
        min: 1, // 最小值
        max: 10000, // 最大值
        step: 1, // 计数器步长
        controls: true, // 是否使用控制按钮
        controlsPosition: '',	// 控制按钮位置: right
        placeholder: '请输入排序ID'
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
        activeText: '禁用', // 打开时的文字描述
        inactiveText: '启用', // 关闭时的文字描述
        activeValue: false, // 打开时的value
        inactiveValue: true, // 打开时的value
        activeColor: '#ff4949', // 打开时的背景色
        inactiveColor: '#13ce66' // 关闭时的背景色
      },
      // data
      formData: {
        name: '',
        key: '',
        value: '',
        status: true,
        description: '',
        order_id: 1 // undefined
      },
      formDataLimit: {
        name: '35',
        key: '55',
        value: '55',
        description: '255'
      },
      formDataRules: {
        key: [{ required: true, trigger: 'blur', validator: validateKey }],
        value: [{ required: true, trigger: 'blur', validator: validateValue }],
        description: [{ required: true, trigger: 'blur', validator: validateDescription }]
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
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    closeDialog() { // 关闭dialog
      // 清空表单状态
      this.$refs.formData.clearValidate()
      this.$emit('close-edit', false)
    },
    openDialog() { // 初始化操作
      if (!this.md5) {
        this.$emit('close-edit', false)
      }
      // 初始化非全屏
      this.fullScreenStatus = false
      // 请求
      this.$nextTick(() => {
        this.getDetail() // 信息初始化
      })
    },
    getDetail() { // 最新数据详情
      const params = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.md5
      }
      return new Promise((resolve, reject) => {
        SystemDictDetail(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData = data
          } else {
            this.$emit('close-edit', false) // 初始化信息失败，关闭
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submit() { // 提交 && 更新
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'md5': this.md5,
            // 'key': this.formData.key, // 禁用key更新
            'value': this.formData.value,
            'status': this.formData.status,
            'order_id': this.formData.order_id,
            'description': this.formData.description
          }
          return new Promise((resolve, reject) => {
            SystemDictUpdate(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '更新成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-edit', true)
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
