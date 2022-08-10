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
      <!-- form -->
      <div id="main-opr-div" style="text-align: center;">
        <el-form :label-position="labelPosition" label-width="auto">
          <el-form-item label="新文件名称">
            <el-input
              v-model.trim="name"
              type="text"
              placeholder="请输入新文件名称，不填写默认为拆分文件名称"
              :maxlength="inputAttrs.length"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :disabled="disabled"
              prefix-icon="el-icon-edit"
            />
          </el-form-item>
          <el-form-item label="拆分Sheet">
            <el-select
              v-model="sheetIndex"
              style="width: 100%"
              placeholder="请选择拆分的Sheet"
              :disabled="disabled"
              :filterable="selectAttrs.filterable"
              :multiple="selectAttrs.multiple"
              :multiple-limit="selectAttrs.limit"
              :clearable="selectAttrs.clearable"
              :no-data-text="selectAttrs.noDataText"
              :collapse-tags="selectAttrs.collapseTags"
              @change="changeSheet"
            >
              <el-option
                v-for="(item, index) in sheetNames"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="拆分方式">
            <el-tooltip placement="top" effect="light">
              <div slot="content">行：按表格Sheet页数据<span class="info_red">行</span>拆分，一行是一个新的文件或者Sheet页<br>列：按表格Sheet页数据<span class="info_red">列</span>拆分，一列是一个新的文件或者Sheet页</div>
              <el-select
                v-model="splitTypeIndex"
                style="width: 100%"
                placeholder="请选择拆分方式"
                :disabled="disabled"
                :filterable="selectAttrs.filterable"
                :multiple="selectAttrs.multiple"
                :multiple-limit="selectAttrs.limit"
                :clearable="selectAttrs.clearable"
                :no-data-text="selectAttrs.noDataText"
                :collapse-tags="selectAttrs.collapseTags"
              >
                <el-option
                  v-for="(item, index) in splitType"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="存储方式">
            <el-tooltip placement="top" effect="light">
              <div slot="content">多表一Sheet：生成N个.xlsx文件，每个文件只有一个Sheet页，文件以ZIP压缩格式进行下载<br>一表多Sheet：生成一个新的.xlsx文件，一行/列的数据是文件中的Sheet页</div>
              <el-select
                v-model="splitStoreIndex"
                style="width: 100%"
                placeholder="请选择存储方式"
                :disabled="disabled"
                :filterable="selectAttrs.filterable"
                :multiple="selectAttrs.multiple"
                :multiple-limit="selectAttrs.limit"
                :clearable="selectAttrs.clearable"
                :no-data-text="selectAttrs.noDataText"
                :collapse-tags="selectAttrs.collapseTags"
              >
                <el-option
                  v-for="(item, index) in excelSplitStore"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="命名规则">
            <el-tooltip content="新的文件/Sheet页名称命名规则，选项为Sheet页的Title，最多选4列，建议至少选一个序号自增。" placement="top" effect="light">
              <el-select
                v-model="splitColumnIndexList"
                style="width: 100%"
                placeholder="请选择命名规则"
                :disabled="disabled"
                :filterable="mulSelectAttrs.filterable"
                :multiple="mulSelectAttrs.multiple"
                :multiple-limit="mulSelectAttrs.limit"
                :clearable="mulSelectAttrs.clearable"
                :no-data-text="mulSelectAttrs.noDataText"
                :collapse-tags="mulSelectAttrs.collapseTags"
              >
                <el-option v-for="(item, index) in columnNames" :key="index" :label="item.label" :value="item.value">
                  <span style="float: left">
                    {{ item.label }}
                  </span>
                  <span style="float: right; color: #8492a6;">
                    {{ item.value }}
                  </span>
                </el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="文件Title">
            <el-tooltip content="新文件的Sheet页是否包含表头，默认为是（拆分的Sheet页第一行默认为Title）" placement="bottom" effect="light">
              <el-select
                v-model="headerIndex"
                style="width: 100%"
                placeholder="请选择是否包含文件Title"
                :disabled="disabled"
                :filterable="selectAttrs.filterable"
                :multiple="selectAttrs.multiple"
                :multiple-limit="selectAttrs.limit"
                :clearable="selectAttrs.clearable"
                :no-data-text="selectAttrs.noDataText"
                :collapse-tags="selectAttrs.collapseTags"
              >
                <el-option
                  v-for="(item, index) in boolType"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-tooltip>
          </el-form-item>
        </el-form>
      </div>
      <!-- dialog footer -->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="handleClose">
            取消
          </el-button>
          <el-button type="primary" :disabled="disabled" @click="submitSplit">
            确认
          </el-button>
        </span>
      </template>

    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { officeExcelSplit, officeExcelSplitInit, officeExcelSheetHeader } from '@/api/office'

export default {
  name: 'ExcelSplitOpr',
  emits: ['close-file-split'],
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
      curMd5: '',
      dialogAttrs: {
        title: '表格拆分',
        width: '45%', // Dialog 的宽度
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
      selectAttrs: { // select attrs
        multiple: false, // 多选
        clearable: true, // 清空选择
        filterable: false, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '' // 默认显示内容
      },
      mulSelectAttrs: { // multiple select attrs
        multiple: true, // 多选
        clearable: true, // 清空选择
        filterable: true, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 4, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '' // 默认显示内容
      },
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      // initialize split parameters
      name: '', // 新文件名称
      sheetIndex: this.tableRow.setSheetIndex || '0', // 新文件Sheet选择索引
      splitStoreIndex: '', // 存储方式索引
      splitTypeIndex: '', // 行列索引
      splitColumnIndexList: ['9999'], // 命名规则索引
      headerIndex: '1', // 文件表头索引
      // enums parameters
      sheetNames: this.tableRow.sheetNames || [], // 当前文件的Sheet列表
      columnNames: [], // 当前选择的Sheet columns
      excelSplitStore: [// 拆分存储方式
        { label: '多表一Sheet', value: '1' },
        { label: '一表多Sheet', value: '2' }
      ],
      splitType: [ // 行列
        { label: '行', value: '1' },
        { label: '列', value: '2' }
      ],
      boolType: [ // bool枚举
        { label: '是', value: '1' },
        { label: '否', value: '0' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.$emit('close-file-split', false)
    },
    handleOpen() {
      if (this.curMd5 !== this.tableRow.md5) {
        this.name = ''
        this.sheetIndex = ''
        this.splitTypeIndex = ''
        this.splitStoreIndex = ''
        this.splitColumnIndexList = ['9999']
        this.headerIndex = '1'
      }
      this.initParams()
    },
    submitSplit() { // split
      // check: sheet index
      if (!this.sheetIndex) {
        this.$message({
          message: '请选择拆分文件Sheet',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      // check: split type index
      if (!this.splitTypeIndex) {
        this.$message({
          message: '请选择拆分方式',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      // check: store index
      if (!this.splitStoreIndex) {
        this.$message({
          message: '请选择拆分存储方式',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      // check: columns index
      if (this.splitColumnIndexList.length < 1) {
        this.$message({
          message: '请选择新文件命名规则',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      // check: headers index
      if (!this.headerIndex) {
        this.$message({
          message: '请选择新文件是否包含Title',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.tableRow.md5,
        'name': this.name,
        'sheet': this.sheetIndex,
        'store': this.splitStoreIndex,
        'split': this.splitTypeIndex,
        'columns': this.splitColumnIndexList,
        'header': this.headerIndex
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
        officeExcelSplit(data).then(response => {
          // 关闭loading
          this.disabled = false
          loading.close()
          const { status_id } = response
          if (status_id === 100) {
            this.$message({
              message: '文件拆分成功',
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-file-split', true)
          }
          resolve(response)
        }).catch(error => {
          // 关闭loading
          this.disabled = false
          loading.close()
          reject(error)
        })
      })
    },
    initParams() { // 初始化split参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.tableRow.md5
      }
      this.curMd5 = this.tableRow.md5
      return new Promise((resolve, reject) => {
        officeExcelSplitInit(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.excelSplitStore = data.excel_split_store
            this.splitType = data.split_type
            this.sheetIndex = data.sheet_index
            this.sheetNames = data.sheet_names
            this.columnNames = data.column_names
            this.boolType = data.bool_type
          } else {
            this.$emit('close-file-split', false) // 初始化失败，关闭split，手动重新打开
          }
          resolve(response)
        }).catch(error => {
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
        'md5': this.curMd5,
        'sheet': value
      }
      return new Promise((resolve, reject) => {
        officeExcelSheetHeader(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.columnNames = data.headers
            this.splitColumnIndexList = ['9999']
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
