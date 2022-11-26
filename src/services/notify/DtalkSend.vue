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
      <el-form id="main-opr-div" ref="formData" :label-position="labelPosition" :model="formData" label-width="auto" style="width: 100%">
        <el-form-item label="Robot选择">
          <el-select
            v-model="formData.robotIndex"
            style="width: 100%"
            placeholder="请选择发送消息的Robot"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="!selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option v-for="(item, index) in formData.robotEnums" :key="index" :label="item.value" :value="item.key">
              <span style="float: left">
                {{ item.value }}
              </span>
              <span style="float: right; color: #8492a6;">
                {{ item.key }}
              </span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="消息Sheet">
          <el-select
            v-model="formData.sheetIndexs"
            style="width: 100%"
            placeholder="请选择消息Sheet（可多个）"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option v-for="(item, index) in formData.sheetNames" :key="index" :label="item.value" :value="item.key">
              <span style="float: left">
                {{ item.value }}
              </span>
              <span style="float: right; color: #8492a6;">
                {{ item.key }}
              </span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" type="primary" @click.native.prevent="submit()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { notifyDtalkSend, notifyDtalkSendInit } from '@/api/notify'

export default {
  name: 'DtalkSend',
  emits: ['close-send-dg'],
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
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '消息发送',
        width: '45%', // Dialog 的宽度
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
      selectAttrs: { // select attrs
        multiple: true, // 多选
        clearable: true, // 清空选择
        filterable: false, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '' // 默认显示内容
      },
      // data
      formData: {
        robotIndex: '', // 默认选择的robot
        robotEnums: [], // robot枚举数据
        sheetIndexs: [], // 选择的sheet index
        sheetNames: [] // 需要选中多个Sheet，列表格式
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
        this.$emit('close-send-dg', true)
        return false
      }
      // 初始化非全屏
      this.fullScreenStatus = false
      this.$nextTick(() => {
        this.getInitData()
        // 重置表单状态
        // this.$refs.formData.resetFields()
      })
    },
    closeDialog() { // 关闭dg
      // 清空表单状态
      // this.$refs.formData.clearValidate()
      this.$emit('close-send-dg', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    getInitData() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        notifyDtalkSendInit(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.robotIndex = data.robot_index
            this.formData.robotEnums = data.robot_enums
            this.formData.sheetIndexs = data.sheet_index
            this.formData.sheetNames = data.sheet_names
          } else {
            this.$emit('close-send-dg')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submit() { // 提交
      // check: sheet index
      if (!this.formData.robotIndex) {
        this.$message({
          message: '请选择发送消息的Robot',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      // check: sheet index
      if (this.formData.sheetIndexs.length < 1) {
        this.$message({
          message: '请选择消息Sheet',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'robot': this.formData.robotIndex,
        'sheet': this.formData.sheetIndexs,
        'md5': this.rowMd5
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
        notifyDtalkSend(data).then(response => {
          // 关闭loading
          this.disabled = false
          loading.close()
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: message || '发送成功',
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-send-dg', true)
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

</style>
