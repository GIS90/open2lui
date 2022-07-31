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
      <el-form ref="formData" :label-position="labelPosition" :model="formData" label-width="auto">
        <el-divider content-position="left">基础信息</el-divider>
        <el-form-item label="文件名称">
          <el-input
            v-model.trim="formData.name"
            type="text"
            placeholder="请输入文件名称"
            :maxlength="formDataLimit.name"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="disabled"
            prefix-icon="el-icon-edit"
          />
        </el-form-item>
        <el-form-item label="消息Sheet">
          <el-select
            v-model="formData.sheetIndexs"
            style="width: 100%"
            placeholder="请选择消息Sheet，可多个"
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
        <el-divider content-position="left">SHEET设置</el-divider>
        <el-form-item label="设置Sheet">
          <el-select
            v-model="formData.curSheet"
            style="width: 100%"
            placeholder="请选择设置的Sheet，单选"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="!selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
            @change="changeSheet"
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
        <el-form-item label="消息标题">
          <el-input
            v-model.trim="formData.title"
            type="text"
            placeholder="请输入当前Sheet消息标题"
            :maxlength="formDataLimit.title"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="disabled"
            prefix-icon="el-icon-edit"
          />
        </el-form-item>
        <el-form-item label="消息列头">
          <el-select
            v-model="formData.sheetColumnIndexs"
            style="width: 100%"
            placeholder="请选择当前Sheet消息列表，可多选"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option v-for="(item, index) in formData.sheetColumns" :key="index" :label="item.value" :value="item.key">
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
          <el-button :disabled="disabled" type="success" @click="submitSet(0)">保存</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click="submitSet(1)">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { validExcelFile } from '@/utils/validate.js'
import { notifyDtalkChangeSheet, notifyDtalkDetail, notifyDtalkUpdate } from '@/api/notify'

export default {
  name: 'DtalkSet',
  emits: ['close-set-dg'],
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
        name: '', // 文件名称
        sheetNames: [], // 选中的SheetNames
        sheetIndexs: [], // 需要选中多个Sheet，列表格式
        // -------------- sheet 配置
        curSheet: '0', // 当前Sheet设置索引
        title: '', // 消息标题
        sheetColumns: [], // 选中的全部Columns枚举
        sheetColumnIndexs: [] // 需要选中Column索引

      },
      formDataLimit: {
        name: 55,
        title: 25
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
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
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        notifyDtalkDetail(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.name = data.file_name
            this.formData.sheetNames = data.sheet_names
            this.formData.sheetIndexs = data.set_sheet_index
            // -------------- sheet 配置
            this.formData.curSheet = data.cur_sheet
            this.formData.title = data.set_title
            this.formData.sheetColumns = data.set_columns
            this.formData.sheetColumnIndexs = data.set_select_column
          } else {
            this.$emit('close-set-dg')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submitSet(close) { // 提交设置
      if (!this.formData.name) { // value name is not allow null
        this.$message({
          message: '文件名称不允许为空',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (this.formData.name.length > 55) { // check new file name length
        this.$message({
          message: '文件名称超出限制',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (!validExcelFile(this.formData.name)) { // check new file name format
        this.$message({
          message: '文件只支持.xls、.xlsx格式',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (this.formData.sheetIndexs.length < 1) { // check sheet index value
        this.$message({
          message: '消息Sheet不允许为空',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (!this.formData.curSheet) { // check current select sheet index value
        this.$message({
          message: '设置Sheet不允许为空',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (this.formData.sheetColumnIndexs.length < 1) { // check current sheet index column
        this.$message({
          message: '设置Sheet消息列头不允许为空',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      this.disabled = true
      this.loading = true
      const data = {
        'rtx_id': store.getters.rtx_id,
        'name': this.formData.name,
        'set_sheet': this.formData.sheetIndexs, // 发送sheet-多选
        // -------------- sheet 配置
        'cur_sheet': this.formData.curSheet, // 当前sheet索引
        'title': this.formData.title, // 当前sheet消息标题
        'column': this.formData.sheetColumnIndexs, // 发送sheet columns
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        notifyDtalkUpdate(data).then(response => {
          this.disabled = false
          this.loading = false
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '文件设置成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            if (close === 1) {
              this.$emit('close-set-dg', true)
            }
          }
          resolve(response)
        }).catch(error => {
          this.disabled = false
          this.loading = false
          reject(error)
        })
      })
    },
    changeSheet(value) { // change sheet to refresh to sheet headers
      if (!value) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5,
        'sheet': this.formData.curSheet
      }
      return new Promise((resolve, reject) => {
        notifyDtalkChangeSheet(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.title = data.set_title
            this.formData.sheetColumns = data.set_columns
            this.formData.sheetColumnIndexs = data.set_select_column
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
