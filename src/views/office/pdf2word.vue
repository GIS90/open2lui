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
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDeleteDialog">
        <svg-icon icon-class="i_delete" />  删除
      </el-button>
    </el-row>

    <!-- 文件上传 -->
    <office-upload :dialog="uploadDialogStatus" :file-type="fileType" @close-file-upload="closeFileUpload" />

    <!--Table表格-->
    <div id="data-container" class="table-sty">
      <el-table
        ref="multipleTableRef"
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
        <el-table-column prop="name" label="文件名称" width="340" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="transfer" label="转换状态" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="mode" label="转换模式" width="240" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="transfer_time" label="转换时间" width="240" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="start" label="开始页" width="180" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="end" label="结束页" width="180" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="pages" label="指标页列表" width="270" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="rtx_id" label="上传人RTX" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="180" />
        <el-table-column fixed="right" label="操作" :align="tableRowAttrs.align" width="360">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="设置" placement="top">
              <i class="el-icon-setting" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="icon-item" effect="light" content="转换" placement="top">
              <el-button
                icon="el-icon-refresh"
                type="primary"
                size="mini"
                round
                plain
                @click="rowHandleTo(scope.$index, scope.row)"
              />
            </el-tooltip>
            <el-tooltip v-if="scope.row.transfer_url" class="icon-item" effect="dark" content="下载" placement="top">
              <a :href="scope.row.transfer_url"><i class="el-icon-download" /></a>
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

    <!-- 删除dialog -->
    <office-batch-delete :show="deleteConfirm" :list="selectList" :source="deleteSource" @close-delete-dialog="closeDeleteDialog" />

    <!-- 文件设置dg -->
    <office-pdf-set :show="setDialogStatus" :row-md5="oprSelectRowMd5" @close-set-dg="closeSetDialog" />

    <!-- 转换 -->
    <office-pdf-to-word :show="toDialogStatus" :row-md5="oprSelectRowMd5" @close-to-dg="closeToDialog" />
  </div>
</template>

<script>
import store from '@/store'
import { deleteOfficePDFFile, getPdf2WordList } from '@/api/office'
import Upload from '@/components/office/Upload'
import Pagination from '@/components/Pagination'
import OfficeBatchDelete from '@/components/office/OfficeBatchDelete'
import OfficePDFSet from '@/components/office/OfficePDFSet'
import OfficePDFToWord from '@/components/office/OfficePDFToWord'

export default {
  name: 'Pdf2word',
  emits: [],
  components: {
    'office-upload': Upload,
    'office-batch-delete': OfficeBatchDelete,
    'office-pdf-set': OfficePDFSet,
    'office-pdf-to-word': OfficePDFToWord,
    'pagination': Pagination
  },
  props: {},
  data() {
    return {
      fileType: '5', // 文件类型：1:word 2:excel 3:ppt 4:文本 5:pdf 6:其他
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
      oprSelectRowMd5: '', // 当前选择data rtx
      setDialogStatus: false, // 设置dialog状态
      toDialogStatus: false, // PDF转WORD-dialog状态
      mergeDialogStatus: false, // 合并dialog状态
      deleteSource: 'office-pdf', // delete source
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
    this.getTableList()
  },
  mounted() {},
  methods: {
    openFileUpload() { // 开启upload dialog
      this.uploadDialogStatus = true
    },
    closeFileUpload(isRefresh) { // 关闭upload dialog
      this.uploadDialogStatus = false
      if (isRefresh) {
        this.getTableList()
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
    setTableHeaderStyle() { // table title样式
      return {
        background: '#eee',
        color: '#606266'
      }
    },
    getTableList() { // get source list data
      // 初始化选择参数
      this.selectAllStatus = false
      this.selectList = []

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        getPdf2WordList(data).then(response => {
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
      this.getTableList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getTableList()
    },
    closeDeleteDialog(isRefresh) { // 关闭删除Dialog
      this.deleteConfirm = false
      if (isRefresh) {
        this.getTableList()
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
    },
    rowHandleDetail(index, row) { // table row 详情dialog
      if (!row || !row.md5_id) {
        return false
      }
      this.oprSelectRowMd5 = row.md5_id
      this.detailDialogStatus = true
    },
    rowHandleEdit(index, row) { // table row 设置dialog
      if (!row || !row.md5_id) {
        return false
      }
      this.oprSelectRowMd5 = row.md5_id
      this.setDialogStatus = true
    },
    rowHandleTo(index, row) { // PDF转WORD
      if (!row || !row.md5_id) {
        return false
      }
      this.oprSelectRowMd5 = row.md5_id
      this.toDialogStatus = true
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
        deleteOfficePDFFile(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.getTableList()
          }
          resolve(response)
        }).catch(error => {
          this.loading = false
          reject(error)
        })
      })
    },
    closeSetDialog(isRefresh) { // 关闭设置dg
      this.setDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    closeToDialog(isRefresh) { // 关闭转换dg
      this.toDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    }
  }
}
</script>

<style scoped>

</style>
