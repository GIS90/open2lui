<template>
  <span>
    <el-tooltip effect="dark" content="下载" placement="top">
      <el-button class="icon-download-style" icon="el-icon-download" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="disabled" :circle="btnIconAttrs.circle" @click="showDownload" />
    </el-tooltip>
    <el-dialog
      :visible="dlDialogStatus"
      :title="dialogAttrs.title"
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
      @open="openDialog"
      @close="closeDialog"
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
        <el-row>
          <el-form-item label="下载方式" prop="type">
            <el-select
              v-model="formData.type"
              style="width: 100%"
              placeholder="请选择下载方式"
              :disabled="disabled"
              :filterable="selectAttrs.filterable"
              :multiple="selectAttrs.multiple"
              :multiple-limit="selectAttrs.limit"
              :clearable="selectAttrs.clearable"
              :no-data-text="selectAttrs.noDataText"
              :collapse-tags="selectAttrs.collapseTags"
            >
              <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="文件名称" prop="name">
            <el-input
              v-model.trim="formData.name"
              type="text"
              placeholder="请输入文件名称"
              :maxlength="formDataLimit.name"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :size="inputAttrs.size"
              :prefix-icon="inputAttrs.prefixIcon"
              :disabled="btnDisabled"
            />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="文件格式" prop="format">
            <el-select
              v-model="formData.format"
              style="width: 100%"
              placeholder="请选择文件格式"
              :disabled="disabled"
              :filterable="selectAttrs.filterable"
              :multiple="selectAttrs.multiple"
              :multiple-limit="selectAttrs.limit"
              :clearable="selectAttrs.clearable"
              :no-data-text="selectAttrs.noDataText"
              :collapse-tags="selectAttrs.collapseTags"
            >
              <el-option v-for="item in formatList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-row>
      </el-form>
      <!--footer-->
      <span slot="footer" class="dialog-footer">
        <el-button :disabled="btnDisabled" @click="closeDialog">取消</el-button>
        <el-button :disabled="btnDisabled" :loading="btnLoading" type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </span>
</template>

<script>
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx/xlsx.mjs' // import XLSX from 'xlsx'
import store from '@/store'
import { downloadExcel, downloadExcelInit } from '@/api/common'

export default {
  name: 'IconDownloadExcel',
  components: {},
  directives: {},
  emits: [],
  props: {
    // 页面ID
    source: {
      type: String,
      require: true,
      default: ''
    },
    // 状态
    disabled: {
      type: Boolean,
      require: true,
      default: false
    },
    // 选择的数据
    selectList: {
      type: Array,
      require: false,
      default: () => []
    }
  },
  inject: {},
  data() {
    return {
      btnDisabled: false, // 按钮禁用状态
      btnLoading: false, // 按钮加载
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      // button icon attributes
      btnIconAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: true // 是否为圆形按钮
      },
      // input attrs
      inputAttrs: {
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      // select attrs
      selectAttrs: {
        multiple: false, // 多选
        clearable: true, // 清空选择
        filterable: false, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '' // 默认显示内容
      },
      dialogAttrs: {
        title: '文件下载',
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
      dlDialogStatus: false, // 下载dialog
      formData: {
        name: '', // 文件名称
        format: '', // 文件格式
        type: '' // 下载类型：全量数据 选择数据
      },
      formDataLimit: {
        name: '55'
      },
      formDataRules: {
        name: [
          { required: true, message: '请输入文件名称', trigger: ['blur', 'change'] },
          { min: 1, max: 55, message: '文件名称最大长度为55', trigger: ['blur', 'change'] }
        ],
        format: [
          { required: true, message: '请选择文件格式', trigger: ['blur', 'change'] }
        ],
        type: [
          { required: true, message: '请选择下载方式', trigger: ['blur', 'change'] }
        ]
      },
      formatList: [], // 文件格式列表
      typeList: [] // 下载类型列表
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
    openDialog() {
      // 初始化非全屏
      this.fullScreenStatus = false

      this.$nextTick(() => {
        // 重置表单状态
        this.getInitData()
        this.$refs.formData.resetFields()
      })
    },
    closeDialog() {
      this.dlDialogStatus = false
    },
    showDownload() {
      this.dlDialogStatus = true
    },
    getInitData() {
      const params = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        downloadExcelInit(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.typeList = data.download_select
            this.formatList = data.excel_format
          } else {
            this.$emit('close-download')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    confirm() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'list': this.selectList,
        'source': this.source,
        ...this.formData
      }
      // 如果下载选择数据，判断list是否有数据
      if (this.formData.type === 'Select' && this.selectList.length === 0) {
        this.$message({
          message: '已选择下载方式需要选择数据，当前暂无选择数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      this.$refs.formData.validate(valid => {
        if (valid) {
          this.btnDisabled = true
          return new Promise((resolve, reject) => {
            downloadExcel(data).then(response => {
              const { status_id, data } = response
              if (status_id === 100) {
                // 创建一个新的工作簿
                const wb = XLSX.utils.book_new()
                // 创建一个新的工作表
                const ws = XLSX.utils.json_to_sheet(data.list)
                // 将工作表添加到工作簿
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
                // 生成Excel文件
                const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
                // 创建一个Blob对象
                const blob = new Blob([wbout], { type: 'application/octet-stream' })
                // 使用file-saver保存文件
                saveAs(blob, data.name)

                this.$notify({
                  title: '消息', // 标题
                  type: 'success', // 类型：success/warning/info/error
                  message: '下载成功', // 消息
                  duration: 1200, // 显示时间(毫秒)
                  // offset: 300, // 偏移量
                  position: 'top-right', // 位置：top-right/top-left/bottom-right/bottom-left
                  showClose: false // 是否显示关闭按钮
                })
              }
              resolve(response)
            }).catch(error => {
              reject(error)
            }).finally(() => {
              this.btnDisabled = false
            })
          })
        }
      })
    }
  },
  template: '',
  setup() {
    return {}
  }
}
</script>

<style scoped>
.icon-download-style {
  margin-left: 15px;
}
</style>
