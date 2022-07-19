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
      @close="closeDialog()"
    >
      <el-form :label-position="labelPosition" label-width="auto">
        <el-form-item label="文件名称">
          <el-input
            v-model.trim="tableRow.name"
            type="text"
            placeholder="请输入文件名称"
            :maxlength="inputAttrs.length"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="disabled"
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
import { updateExcelResultFile } from '@/api/office'

export default {
  name: 'ExcelHistorySet',
  emits: ['close-history-set'],
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    tableRow: {
      type: Object,
      require: true,
      default: () => {
        return {}
      }
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
        length: '55', // 最大输入长度
        limit: true // 展示字数统计
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    closeDialog() { // 关闭dg
      this.$emit('close-history-set', false)
    },
    submitSet() { // 提交设置
      if (!this.tableRow.name) {
        this.$message({
          message: '文件名称不允许为空',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (this.tableRow.name.length > 55) { // check new file name length
        this.$message({
          message: '文件名称超出限制',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      this.disabled = true
      this.loading = true
      const data = {
        'rtx_id': store.getters.rtx_id,
        'name': this.tableRow.name,
        'md5': this.tableRow.md5
      }
      return new Promise((resolve, reject) => {
        updateExcelResultFile(data).then(response => {
          this.disabled = false
          this.loading = false
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '文件设置成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-history-set', true)
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

</style>