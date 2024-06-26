<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-button id="btn-upload" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openFileUpload">
        <svg-icon icon-class="i_upload" />  上传
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDeleteDialog">
        <svg-icon icon-class="i_delete" />  批量删除
      </el-button>
      <el-button id="btn-tip" type="success" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openTip()">
        <svg-icon icon-class="i_sm" />  操作说明
      </el-button>
      <!-- 右侧icon -->
      <span style="float: right">
        <el-tooltip effect="dark" content="刷新" placement="top">
          <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="getTableData(2)" />
        </el-tooltip>
        <icon-download-excel :source="pageSourceIdDownload" :disabled="btnDisabled" :select-list="selectList" />
      </span>
    </el-row>

    <!-- 提示说明 -->
    <excel-split-tip :show="tipDialogStatus" @close-tip="closeTip" />

    <!-- 文件上传 -->
    <public-upload-file :dialog="uploadDialogStatus" :file-type="fileType" @close-file-upload="closeFileUpload" />

    <!--Table表格-->
    <div id="data-container" class="table-sty">
      <el-table
        ref="multipleTableRef"
        v-loading="tableLoading"
        style="width: 100%"
        :data="tableData"
        :size="tableAttrs.size"
        :fit="tableAttrs.fit"
        :show-header="tableAttrs.showHeader"
        :highlight-current-row="tableAttrs.hcr"
        :border="tableAttrs.border"
        :default-sort="{ prop: 'id', order: 'ascending' }"
        :empty-text="tableAttrs.emptyText"
        :show-summary="tableAttrs.showSum"
        :sum-text="tableAttrs.sumText"
        :summary-method="setTableSummary"
        :header-cell-style="setTableHeaderStyle"
        :row-style="setTableRowStyle"
        @select="selectRow"
        @selection-change="selectChange"
        @select-all="selectAll"
      >
        <el-table-column fixed="left" type="selection" width="80" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column fixed="left" prop="id" label="序号" width="100" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="left" prop="name" label="文件名称" width="320" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="set_sheet_name" label="操作Sheet" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.headerAlign" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="ftypev" label="类别" width="140" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column label="Sheet数" width="180" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-popover v-if="scope.row.sheet_names.length > 0" trigger="hover" placement="top" width="220">
              <div v-for="(item, index) in scope.row.sheet_names" :key="index">
                <p>{{ item.key }}: {{ item.value }}</p>
              </div>
              <div slot="reference">
                <el-tag effect="plain">{{ scope.row.nsheet }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="numopr" label="操作次数" width="140" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="rtx_id" label="上传用户RTX" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="create_time" label="创建时间" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="right" label="操作" min-width="220" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-tooltip class="table-handle-icon" effect="dark" content="设置" placement="top">
              <i class="el-icon-setting" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="icon-item" effect="light" content="拆分" placement="top">
              <el-button icon="el-icon-edit" type="primary" size="mini" round plain @click="openFileSplit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="table-handle-icon icon-item" effect="dark" content="下载" placement="top">
              <a :href="scope.row.url"><i class="el-icon-download" /></a>
            </el-tooltip>
            <el-tooltip class="table-handle-icon icon-item" effect="dark" content="删除" placement="top">
              <i class="el-icon-delete" @click="rowHandleDelete(scope.$index, scope.row)" />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- page分页 -->
    <public-pagination
      :page="pageCur"
      :size="pageSize"
      :total="pageTotal"
      @pagin-size-change="paginSizeChange"
      @pagin-current-change="paginCurrentChange"
    />

    <!-- 文件设置 -->
    <excel-split-set :show="setDialogStatus" :table-row="oprSelectData" @close-file-set="closeFileSet" />

    <!-- 文件拆分 -->
    <excel-split-opr :show="splitDialogStatus" :table-row="oprSelectData" @close-file-split="closeFileSplit" />

    <!-- 删除dialog -->
    <batch-delete :show="deleteConfirm" :list="selectList" :source="pageSourceId" @close-delete-dialog="closeDeleteDialog" />
  </div>
</template>

<script>
import store from '@/store'
import ExcelSplitTip from '@/services/office/ExcelSplitTip'
import ExcelSplitSet from '@/services/office/ExcelSplitSet'
import ExcelSplitOpr from '@/services/office/ExcelSplitOpr'
import UploadFile from '@/components/UploadFile'
import Pagination from '@/components/Pagination'
import BatchDelete from '@/components/BatchDelete'
import IconDownloadExcel from '@/components/IconDownloadExcel'
import { officeExcelSourceList, officeExcelSourceDelete } from '@/api/office'

export default {
  name: 'OfficeSplit',
  components: {
    'excel-split-tip': ExcelSplitTip,
    'excel-split-set': ExcelSplitSet,
    'excel-split-opr': ExcelSplitOpr,
    'batch-delete': BatchDelete,
    'public-upload-file': UploadFile,
    'public-pagination': Pagination,
    'icon-download-excel': IconDownloadExcel
  },
  props: {},
  data() {
    return {
      fileType: '2', // 文件类型：具体明细参考UploadFile组件
      selBtnText: '全选', // 选择按钮内容
      btnDisabled: false, // 按钮禁用状态
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      // button icon attributes
      btnIconAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: true // 是否为圆形按钮
      },
      tipDialogStatus: false, // 操作说明tip
      uploadDialogStatus: false, // 文件上传dialog
      // table attributes
      tableLoading: false,
      tableAttrs: {
        stripe: true, // 是否为斑马纹 true/false
        border: true, // 是否带有纵向边框 true/false
        size: 'medium', // 尺寸 medium / small / mini / ''
        fit: true, // 列的宽度是否自撑开 true/false
        showHeader: true, // 是否显示表头 true/false
        hcr: true, // 是否要高亮当前行highlight-current-row true/false
        height: 450, // 高度
        maxHeight: 450, // 最大高度(属性为Table指定最大高度，此时若表格所需的高度大于最大高度，则会显示一个滚动条。)
        showSum: true, // 表尾合计
        sumText: '统计', // 合计行第一列的文
        emptyText: '暂无数据' // 空数据时显示的文本内容
      },
      // table row: label column-key prop width min-width sortable
      tableRowAttrs: {
        type: 'selection', // selection多选框 / index索引 / expand可展开的按钮
        index: 1, // 如果设置了 type=index，可以通过传递 index 属性来自定义索引
        fixed: true, // 列固定，值有left、right，默认为left
        resizable: true, // 对应列是否可以通过拖动改变宽度 true/false
        align: 'center', // 对齐方式 left / center / right
        headerAlign: 'center', // 表头对齐方式，若不设置该项，则使用表格的对齐方式 left / center / right
        sot: true // showOverflowTooltip 多余的内容会在hover时以tooltip的形式显示出来
      },
      // pagination attrs
      pageCur: 1, // 当前page
      pageSize: 15, // 每页显示条目个数
      pageTotal: 0, // 总条数
      selectAllStatus: false, // 全选状态
      selectList: [], // 选择列表
      tableData: [], // table data
      oprSelectData: {}, // 当前选择data
      setDialogStatus: false, // 设置dialog状态
      splitDialogStatus: false, // 拆分dialog状态
      pageSourceId: 'office-excel-source', // page source id
      pageSourceIdDownload: 'office-excel-source-split', // download id
      deleteConfirm: false // 删除确认dialog状态
    }
  },
  computed: {},
  watch: {
    selectAllStatus(newVal, oldVal) {
      if (newVal) {
        this.selBtnText = '取消'
      } else {
        this.selBtnText = '全选'
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.getTableData(1)
    })
  },
  mounted() {},
  methods: {
    openTip() { // 开启tip
      this.tipDialogStatus = true
    },
    closeTip() { // 关闭tip
      this.tipDialogStatus = false
    },
    openFileUpload() { // 开启upload dialog
      this.uploadDialogStatus = true
    },
    closeFileUpload(isRefresh) { // 关闭upload dialog
      this.uploadDialogStatus = false
      if (isRefresh) {
        this.getTableData()
      }
    },
    selectRow(selection, row) { // table row 单行
      if (!row) {
        return
      }

      // add select list
      if (row?.md5_id && !this.selectList.includes(row.md5_id)) {
        this.selectList.push(row.md5_id)
      } else if (row?.md5_id && this.selectList.includes(row.md5_id)) {
        const index = this.selectList.indexOf(row.md5_id)
        if (index > -1) {
          this.selectList.splice(index, 1)
        }
        // this.selectList.remove(row.md5_id)
      } else {
        console.log('Add data is not have md5-id')
      }

      // change select button status
      this.selectAllStatus = this.tableData.length === this.selectList.length
    },
    selectChange(selection) {
      // console.log(selection)
      // this.selectAllStatus = this.tableData.length === selection.length
    },
    selectAll(selection) { // table row 全选
      if (!selection) {
        return
      }
      this.selectAllStatus = !this.selectAllStatus
      this.selectList = this.selectAllStatus ? selection.map(row => row?.md5_id || '') : []
    },
    manualSelectALL() { // 手工table row 全选
      this.$refs.multipleTableRef.toggleAllSelection()
    },
    setTableSummary({ columns, data }) { // table summary
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
        } else if ([6].includes(index)) {
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
          }
        } else {
          sums[index] = ''
        }
      })

      return sums
    },
    setTableHeaderStyle({ row, column, rowIndex, columnIndex }) { // table title样式
      if (column.label === '操作') {
        return {
          background: '#dfebf7',
          color: '#000000'
        }
      } else {
        return {
          background: '#eee',
          color: '#606266'
        }
      }
    },
    setTableRowStyle() { // table row style
    },
    rowHandleEdit(index, row) { // table row 设置dialog
      if (row?.md5_id) {
        this.oprSelectData = {
          name: row.name,
          setSheetIndex: row.set_sheet_index[0] || '0',
          sheetNames: row.sheet_names || [],
          md5: row.md5_id
        }
        this.setDialogStatus = true
      }
    },
    closeFileSet(isRefresh) { // 关闭table row 设置dialog
      this.setDialogStatus = false
      if (isRefresh) {
        this.getTableData()
      }
    },
    rowHandleDelete(index, row) { // table row 删除
      this.$confirm('此操作将永久删除该行数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.rowDelete(index, row)
      }).catch(() => {
        this.$message({
          message: '已取消删除操作',
          type: 'info',
          duration: 2.0 * 1000
        })
      })
    },
    rowDelete(index, row) {
      if (row?.md5_id) {
        const data = {
          'rtx_id': store.getters.rtx_id,
          'md5': row.md5_id
        }
        this.btnDisabled = true
        return new Promise((resolve, reject) => {
          officeExcelSourceDelete(data).then(response => {
            const { status_id, message } = response
            if (status_id === 100) {
              this.$message({
                message: '删除成功' || message,
                type: 'success',
                duration: 2.0 * 1000
              })
              this.getTableData()
            }
            resolve(response)
          }).catch(error => {
            reject(error)
          }).finally(() => {
            this.btnDisabled = false
          })
        })
      }
    },
    getTableData(type) { // get source list data
      // type: 1-初始化，2-手动刷新，3-高级查询
      if (type) {
        // table loading
        this.tableLoading = true
        // 禁用按钮/INPUT/SELECT
        this.btnDisabled = true
      }
      // 初始化选择参数
      this.selectAllStatus = false
      this.selectList = []
      this.oprSelectData = {}

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'type': this.fileType,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        officeExcelSourceList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.tableData = data.list
            this.pageTotal = data.total
          }
          // 手动刷新提示
          if (type === 2 && status_id === 100) {
            this.$notify({
              title: '消息', // 标题
              type: 'success', // 类型：success/warning/info/error
              message: '刷新成功', // 消息
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
          this.tableLoading = false
        })
      })
    },
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getTableData()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getTableData()
    },
    openFileSplit(index, row) { // 开启split dialog
      if (row?.md5_id) {
        this.oprSelectData = {
          name: row.name,
          setSheetIndex: row.set_sheet_index[0] || '0',
          sheetNames: row.sheet_names || [],
          md5: row.md5_id
        }
        this.splitDialogStatus = true
      }
    },
    closeFileSplit(isRefresh) { // 关闭split dialog
      this.splitDialogStatus = false
      if (isRefresh) {
        this.getTableData()
      }
    },
    closeDeleteDialog(isRefresh) { // 关闭删除Dialog
      this.deleteConfirm = false
      if (isRefresh) {
        this.getTableData()
      }
    },
    openDeleteDialog() { // 打开删除Dialog
      if (this.selectList.length === 0) {
        this.$message({
          message: '请选择删除的文件',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      this.deleteConfirm = true
    }
  }
}
</script>

<style scoped>

</style>
