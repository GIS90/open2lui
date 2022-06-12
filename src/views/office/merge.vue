<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <el-button id="btn-upload" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openFileUpload">
        <svg-icon icon-class="i_upload" />  上传
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-merge" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openFileMerge">
        <svg-icon icon-class="i_start" />  合并
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDeleteDialog">
        <svg-icon icon-class="i_delete" />  删除
      </el-button>
      <el-button id="btn-tip" type="success" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openTip()">
        <svg-icon icon-class="i_sm" />  操作说明
      </el-button>
    </el-row>

    <!-- 提示说明 -->
    <excel-merge-tip :show="tipDialogStatus" @close-tip="closeTip" />

    <!-- 文件上传 -->
    <excel-upload :dialog="uploadDialogStatus" :type="fileType" @close-file-upload="closeFileUpload" />

    <!--Table表格-->
    <div id="data-container" class="table-sty">
      <el-table
        ref="multipleSourceTableRef"
        :data="tableData"
        :size="tableAttrs.size"
        :fit="tableAttrs.fit"
        :show-header="tableAttrs.showHeader"
        :highlight-current-row="tableAttrs.hcr"
        :border="tableAttrs.border"
        style="width: 100%"
        :default-sort="{ prop: 'create_time', order: 'descending' }"
        :empty-text="tableAttrs.emptyText"
        :header-cell-style="setTableHeaderStyle"
        @select="selectRow"
        @selection-change="selectChange"
        @select-all="selectAll"
      >
        <el-table-column fixed="left" type="selection" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="60" />
        <el-table-column fixed="left" label="上传时间" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="220" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 20px">{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="文件名称" width="320" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="set_sheet_name" label="合并Sheet" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="280" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="ftypev" label="类别" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="130" />
        <el-table-column label="Sheet数" :align="tableRowAttrs.align" width="130">
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
        <el-table-column prop="numopr" label="操作次数" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="130" />
        <el-table-column prop="rtx_id" label="上传人RTX" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="180" />
        <el-table-column fixed="right" label="操作" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="240">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="设置" placement="top">
              <i class="el-icon-setting" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="icon-item" effect="dark" content="下载" placement="top">
              <a :href="scope.row.url"><i class="el-icon-download" /></a>
            </el-tooltip>
            <el-tooltip class="icon-item" effect="dark" content="删除" placement="top">
              <i class="el-icon-delete" @click="rowHandleDelete(scope.$index, scope.row)" />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- page分页 -->
    <pagination
      :page="pageCur"
      :size="pageSize"
      :total="pageTotal"
      @pagin-size-change="paginSizeChange"
      @pagin-current-change="paginCurrentChange"
    />

    <!-- 文件设置 -->
    <excel-merge-set :show="setDialogStatus" :table-row="oprSelectData" @close-file-set="closeFileSet" />

    <!-- 文件合并 -->
    <excel-merge-opr :show="mergeDialogStatus" :list="selectList" @close-file-merge="closeFileMerge" />

    <!-- 删除dialog -->
    <excel-batch-delete :show="deleteConfirm" :list="selectList" @close-delete-dialog="closeDeleteDialog" />
  </div>
</template>

<script>
import { getExcelSourceList, deleteExcelSourceFile } from '@/api/office'
import store from '@/store'
import ExcelMergeTip from '@/components/office/ExcelMergeTip'
import ExcelUpload from '@/components/office/ExcelUpload'
import ExcelMergeSet from '@/components/office/ExcelMergeSet'
import ExcelMergeOpr from '@/components/office/ExcelMergeOpr'
import ExcelBatchDelete from '@/components/office/ExcelBatchDelete'
import Pagination from '@/components/Pagination'

export default {
  name: 'Merge',
  components: {
    'excel-merge-tip': ExcelMergeTip,
    'excel-upload': ExcelUpload,
    'excel-merge-set': ExcelMergeSet,
    'excel-merge-opr': ExcelMergeOpr,
    'excel-batch-delete': ExcelBatchDelete,
    'pagination': Pagination
  },
  props: {},
  data() {
    return {
      fileType: '1', // 文件类型：merge-1 split-2
      selBtnText: '全选', // 选择按钮内容
      btnUploadLoading: false, // 上传按钮加载中状态
      btnMergeLoading: false, // 合并按钮加载中状态
      btnDeleteLoading: false, // 删除按钮加载中状态
      btnDisabled: false, // 按钮禁用状态
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      tipDialogStatus: false, // 操作说明tip
      uploadDialogStatus: false, // 文件上传dialog
      // table attributes
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
      mergeDialogStatus: false, // 合并dialog状态
      deleteConfirm: false // 删除确认dialog状态
    }
  },
  computed: {},
  watch: {
    selectAllStatus(newVal, oldVal) { // watch select button status
      if (newVal) {
        this.selBtnText = '取消'
      } else {
        this.selBtnText = '全选'
      }
    }
  },
  created() {
    this.getTableData()
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
      this.$refs.multipleSourceTableRef.toggleAllSelection()
    },
    setTableHeaderStyle() { // table title样式
      return {
        background: '#eee',
        color: '#606266'
      }
    },
    rowHandleEdit(index, row) { // table row 设置dialog
      if (!row || !row.md5_id) {
        return false
      }
      this.oprSelectData = {
        name: row.name,
        setSheetIndex: row.set_sheet_index,
        sheetNames: row.sheet_names,
        md5: row.md5_id
      }
      this.setDialogStatus = true
    },
    closeFileSet(isRefresh) { // 关闭table row 设置dialog
      this.setDialogStatus = false
      if (isRefresh) {
        this.getTableData()
      }
    },
    rowHandleDelete(index, row) { // table row 删除
      if (!row || !row?.md5_id) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': row.md5_id
      }
      return new Promise((resolve, reject) => {
        deleteExcelSourceFile(data).then(response => {
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
          this.loading = false
          reject(error)
        })
      })
    },
    getTableData() { // get excel source list data
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
        getExcelSourceList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.tableData = data.list
            this.pageTotal = data.total
          }
          resolve(response)
        }).catch(error => {
          this.loading = false
          reject(error)
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
    openFileMerge() { // 开启merge dialog
      if (this.selectList.length < 1) {
        this.$message({
          message: '请选择合并的数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      this.mergeDialogStatus = true
    },
    closeFileMerge(isRefresh) { // 关闭merge dialog
      this.mergeDialogStatus = false
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

.btn-margin {
  margin-left: 20px;
}

.table-sty {
  margin-top: 25px;
}

.icon-item {
  margin-left: 45px;
}
</style>
