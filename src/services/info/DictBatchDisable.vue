<template>
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
    @close="cancel"
  >
    <span>确认禁用选择的数据吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button :disabled="btnDisabled" @click="cancel">取 消</el-button>
      <el-button :disabled="btnDisabled" :loading="btnLoading" type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import store from '@/store'
import { InfoDictDisables } from '@/api/info'

export default {
  name: 'DictBatchDisable',
  emits: ['close-disable'],
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
    list: {
      type: Array,
      require: true,
      default: function() {}
    }
  },
  data() {
    return {
      dialogAttrs: {
        title: '提示',
        width: '30%', // Dialog 的宽度
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
      btnDisabled: false,
      btnLoading: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    cancel() { // 取消
      this.$emit('close-disable', false)
    },
    confirm() { // 确认
      if (this.list.length === 0) {
        this.$message({
          message: '请选择禁用的数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'list': this.list
      }
      this.btnDisabled = true
      this.btnLoading = true
      return new Promise((resolve, reject) => {
        InfoDictDisables(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '禁用成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          this.btnDisabled = false
          this.btnLoading = false
          this.$emit('close-disable', true)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
