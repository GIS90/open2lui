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
      @close="handleClose"
      @open="handleOpen"
    >
      <div class="merge-title">合并文件数量：<span class="info_red">{{ list.length }}</span></div>
      <!-- form -->
      <div id="main-opr-div" style="text-align: center;margin-top: 20px;">
        <el-form :label-position="labelPosition" label-width="auto" style="width: 100%">
          <el-form-item label="新文件名称">
            <el-input
              v-model.trim="formData.name"
              type="text"
              placeholder="请输入新文件名称，默认为.xlsx格式"
              :maxlength="inputAttrs.length"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :disabled="disabled"
              prefix-icon="el-icon-edit"
            />
          </el-form-item>
          <el-form-item label="间隔行数">
            <el-input-number
              v-model="formData.blank"
              style="width: 100%"
              :min="inputNumberAttrs.min"
              :controls="inputNumberAttrs.controls"
              :precision="inputNumberAttrs.precision"
              :step="inputNumberAttrs.step"
              :disabled="disabled"
              prefix-icon="el-icon-edit"
            />
          </el-form-item>
        </el-form>
      </div>
      <!-- dialog footer -->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="handleClose">
            取消
          </el-button>
          <el-button type="primary" :disabled="disabled" @click="submitMerge">
            确认
          </el-button>
        </span>
      </template>

    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { officeExcelMerge } from '@/api/office'

export default {
  name: 'ExcelMergeOpr',
  emits: ['close-file-merge'],
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
        title: '合并',
        width: '50%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: false, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: false, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: false, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      inputAttrs: { // input attrs
        clear: true, // 可清空的输入框
        length: '55', // 最大输入长度
        limit: true // 展示字数统计
      },
      inputNumberAttrs: { // input number attrs
        min: 0, // 设置计数器允许的最小值
        max: 100, // 设置计数器允许的最大值
        step: 1, // 计数器步长
        precision: 0, // 数值精度
        size: '', // 计数器尺寸 medium small mini
        controls: true, // 是否使用控制按钮
        cp: 'right' // controls-position: right top
      },
      disabled: false, // 禁用组件
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      formData: {
        name: '', // 新文件名称
        blank: 0 // 合并设置：合并文件之间的空行数
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.$emit('close-file-merge', false)
    },
    handleOpen() {
      this.formData.name = ''
      this.formData.blank = 0
    },
    submitMerge() {
      if (!this.formData.name) {
        this.$message({
          message: '请输入新文件名称',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (this.list.length < 1) {
        this.$message({
          message: '请选择合并的数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      const data = {
        'rtx_id': store.getters.rtx_id,
        'list': this.list,
        'name': this.formData.name,
        'blank': this.formData.blank
      }
      // 组件状态
      this.disabled = true
      // loading
      const loading = this.$loading({
        target: document.querySelector('#main-opr-div'), // DOM
        body: false, // 遮罩插入至DOM中的body上，默认false
        fullscreen: true, // 是否全屏
        lock: true, // 是否锁屏
        text: '努力工作中......', // 加载文案
        spinner: 'el-icon-loading', // 加载icon
        background: '', // 背景rgba(0, 0, 0, 0.8)
        class: '' // 自定义样式类
      })

      return new Promise((resolve, reject) => {
        officeExcelMerge(data).then(response => {
          // 关闭loading
          this.disabled = false
          loading.close()
          const { status_id } = response
          if (status_id === 100) {
            this.$message({
              message: '表格合并成功',
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-file-merge', true)
          }

          resolve(response)
        }).catch(error => {
          // 关闭loading
          this.disabled = false
          loading.close()
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>
.merge-title {
  font-size: 18px;
  font-weight: bold;
}
</style>
