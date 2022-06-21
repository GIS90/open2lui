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
      <el-form :label-position="labelPosition" label-width="auto">
        <!--模式-->
        <el-form-item>
          <el-switch
            v-model="formData.mode"
            class="sw-sty"
            style="display: block"
            :disabled="disabled"
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
        <el-form-item label="起始页码">
          <el-input
            v-model.trim="formData.start"
            οnkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
            placeholder="文档转换的起始页码，默认首页开始"
            :maxlength="inputAttrs.length"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="!formData.mode"
            prefix-icon="el-icon-edit"
          />
        </el-form-item>
        <el-form-item label="结束页码">
          <el-input
            v-model.trim="formData.end"
            οnkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
            placeholder="文档转换的结束页码，默认最后一页结束"
            :maxlength="inputAttrs.length"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="!formData.mode"
            prefix-icon="el-icon-edit"
          />
        </el-form-item>
        <el-form-item label="指定页码">
          <el-input
            v-model.trim="formData.pages"
            type="text"
            placeholder="请输入指定转换的指定页码，以,（英文逗号）分割"
            :maxlength="inputAttrs.length"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="formData.mode"
            prefix-icon="el-icon-edit"
          />
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click="submitSet()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { updateOfficePDFFile, detailOfficePDFFile } from '@/api/office'

export default {
  name: 'OfficePDFSet',
  emits: ['close-file-set'],
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
      dialogAttrs: {
        title: '文件设置',
        width: '40%', // Dialog 的宽度
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
        clear: true, // 可清空的输入框
        length: '5', // 最大输入长度
        limit: true // 展示字数统计
      },
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 35, // 宽度（像素），默认40
        activeText: '通用页码', // 打开时的文字描述
        inactiveText: '指定页码', // 关闭时的文字描述
        activeValue: true, // 打开时的value
        inactiveValue: false, // 打开时的value
        activeColor: '#ff4949', // 打开时的背景色
        inactiveColor: '#13ce66' // 关闭时的背景色
      },
      // data
      formData: {
        start: '', // 英文名称
        end: '', // 中文名称
        pages: '', // 描述
        mode: true // 模式
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 模式转换
    changeStatus(value) {
      this.formData.mode = value
    },
    openDialog() { // 初始化操作，获取最新数据
      if (!this.rowMd5) {
        this.$emit('close-set-dg', true)
        return false
      }
      this.getDNewInfo()
    },
    closeDialog() { // 关闭dg
      this.$emit('close-set-dg', false)
    },
    getDNewInfo() {
      const params = {
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        detailOfficePDFFile(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.start = data.start
            this.formData.end = data.end
            this.formData.pages = data.pages
            this.formData.mode = data.mode
          } else {
            this.$emit('close-set-dg')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submitSet() { // 提交
      // 页码判断
      if (this.formData.start && this.formData.end) {
        if (this.formData.start > this.formData.end) {
          this.$message({
            message: '起始页码不允许小于结束页码',
            type: 'warning',
            duration: 2.0 * 1000
          })
          return false
        }
      }
      this.disabled = true
      this.loading = true
      const data = {
        'rtx_id': store.getters.rtx_id,
        'start': this.formData.start,
        'end': this.formData.end,
        'pages': this.formData.pages,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        updateOfficePDFFile(data).then(response => {
          this.disabled = false
          this.loading = false
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '文件设置成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-set-dg', true)
          }
          resolve(response)
        }).catch(error => {
          this.disabled = false
          this.loading = false
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>
.sw-sty {
  text-align: right;
}
</style>
