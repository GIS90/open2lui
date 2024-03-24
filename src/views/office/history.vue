<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-button id="btn-select" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDeleteDialog">
        <svg-icon icon-class="i_delete" />  批量删除
      </el-button>
      <el-button id="btn-search" class="btn-margin" :type="searchType" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="showSearch">
        <svg-icon :icon-class="searchIcon" />  {{ searchBtnText }}
      </el-button>
      <!-- 右侧icon -->
      <span style="float: right">
        <el-tooltip effect="dark" content="刷新" placement="top">
          <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="getTableData(2)" />
        </el-tooltip>
      </span>
    </el-row>

    <!-- 高级筛选-->
    <div v-if="searchStatus" class="searchBox">
      <excel-history-filter :type-list="typeList" :disabled="btnDisabled" @filter-search-result="filterSearchResult" />
    </div>

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
        :default-sort="{ prop: 'create_time', order: 'descending' }"
        :empty-text="tableAttrs.emptyText"
        :header-cell-style="setTableHeaderStyle"
        :row-style="setTableRowStyle"
        @select="selectRow"
        @selection-change="selectChange"
        @select-all="selectAll"
      >
        <el-table-column fixed="left" type="selection" width="70" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column fixed="left" prop="id" label="序号" width="100" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="left" label="创建时间" width="220" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot">
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 20px">{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="文件名称" width="350" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="set_sheet_name" label="Sheet名称" width="250" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column label="类别" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.ftypek == 1 ? 'success' : 'warning'"
              disable-transitions
            >
              {{ scope.row.ftypev }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Sheet数" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot">
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
        <el-table-column label="ZIP压缩" width="150" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot">
          <template slot-scope="scope">
            <div>
              {{ scope.row.compress ? '是' : '否' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="nfile" label="文件数" width="150" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="row" label="行数" width="150" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="col" label="列数" width="150" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="rtx_id" label="创建人RTX" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="right" label="操作" min-width="260" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-tooltip class="table-handle-icon" effect="dark" content="设置" placement="top">
              <i class="el-icon-setting" @click="rowHandleEdit(scope.$index, scope.row)" />
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
    <excel-history-set :show="setDialogStatus" :table-row="oprSelectData" @close-history-set="closeHistorySet" />

    <!-- 删除dialog -->
    <batch-delete :show="deleteConfirm" :list="selectList" :source="deleteSource" @close-delete-dialog="closeDeleteDialog" />
  </div>
</template>

<script>
import store from '@/store'
import ExcelHistorySet from '@/services/office/ExcelHistorySet'
import ExcelHistoryFilter from '@/services/office/ExcelHistoryFilter'
import Pagination from '@/components/Pagination'
import BatchDelete from '@/components/BatchDelete'
import { officeExcelResultDelete, officeExcelResultList } from '@/api/office'

export default {
  name: 'OfficeHistory',
  emits: [],
  components: {
    'excel-history-set': ExcelHistorySet,
    'batch-delete': BatchDelete,
    'excel-history-filter': ExcelHistoryFilter,
    'public-pagination': Pagination
  },
  props: {},
  data() {
    return {
      selBtnText: '全选', // 选择按钮内容
      btnDisabled: false, // 按钮禁用状态
      selectAllStatus: false, // 全选状态
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
      selectList: [], // 选择列表
      tableData: [], // table data
      oprSelectData: {}, // 当前选择data
      setDialogStatus: false, // 设置dialog状态
      deleteSource: 'office-excel-result', // delete source
      deleteConfirm: false, // 删除确认dialog状态
      searchType: 'primary', // search button type: primary, success, default is primary
      searchIcon: 'i-double-arrow-down', // search button icon
      searchBtnText: '展开查询', // search button text
      searchStatus: false, // 是否展开查询条件
      searchData: { // 高级筛选
        name: '', // 名称
        type: [], // 文件类别选择的类型
        create_time_start: '', // 起始创建时间
        create_time_end: '' // 结束创建时间
      },
      typeList: [] // type list
    }
  },
  computed: {},
  watch: {
    selectAllStatus(newVal, oldVal) { // 监听全选按钮文本
      if (newVal) {
        this.selBtnText = '取消'
      } else {
        this.selBtnText = '全选'
      }
    },
    searchStatus(newVal, oldVal) { // watch is or not show search if
      if (newVal) {
        this.searchBtnText = '关闭查询'
        this.searchType = 'success'
        this.searchIcon = 'i-double-arrow-up'
      } else {
        this.searchBtnText = '展开查询'
        this.searchType = 'primary'
        this.searchIcon = 'i-double-arrow-down'
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
    getTableData(type) { // get result list data
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
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0,
        ...this.searchData
      }

      return new Promise((resolve, reject) => {
        officeExcelResultList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.tableData = data.list
            this.pageTotal = data.total
            this.typeList = data.type
          }
          // 手动刷新提示
          if ([2, 3].includes(type) && status_id === 100) {
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
    paginSizeChange(value) { // pageSize 改变时会触发
      this.pageSize = value
      this.getTableData()
    },
    paginCurrentChange(value) { // currentPage 改变时会触发
      this.pageCur = value
      this.getTableData()
    },
    rowHandleEdit(index, row) { // 操作table row
      if (row?.md5_id) {
        this.oprSelectData = {
          name: row.name,
          md5: row.md5_id
        }
        this.setDialogStatus = true
      }
    },
    rowHandleDelete(index, row) { // table row 删除
      if (row?.md5_id) {
        const data = {
          'rtx_id': store.getters.rtx_id,
          'md5': row.md5_id
        }
        this.btnDisabled = true
        return new Promise((resolve, reject) => {
          officeExcelResultDelete(data).then(response => {
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
          })
        }).finally(() => {
          this.btnDisabled = false
        })
      }
    },
    closeHistorySet(isRefresh) { // 关闭文件设置Dialog
      this.setDialogStatus = false
      if (isRefresh) {
        this.getTableData()
      }
    },
    setTableHeaderStyle() { // 设置table title样式
      return {
        background: '#eee',
        color: '#606266'
      }
    },
    setTableRowStyle() { // table row style
    },
    tableRowClassName({ row, rowIndex }) { // 指定行添加class
      if (row.ftypek === '1') {
        return 'row-merge'
      } else if (row.ftypek === '2') {
        return 'row-split'
      } else {
        return ''
      }
    },
    selectRow(selection, row) { // 手工条选数据
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
    selectAll(selection) { // 全选
      if (!selection) {
        return
      }
      this.selectAllStatus = !this.selectAllStatus
      this.selectList = this.selectAllStatus ? selection.map(row => row?.md5_id || '') : []
    },
    manualSelectALL() { // 手工全选
      this.$refs.multipleTableRef.toggleAllSelection()
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
    },
    showSearch() {
      this.searchStatus = !this.searchStatus
    },
    filterSearchResult(data, isRefresh) { // 高级筛选参数赋值 && 刷新
      this.searchData = data
      if (isRefresh) {
        this.getTableData(3)
      }
    }
  }
}
</script>

<style scoped>
.row-merge {
  background-color: #2c3e50;
}

.row-split {
  background-color: #00ff00;
}

.el-table .row-merge {
  background: oldlace;
}

.el-table .row-split {
  background: #f0f9eb;
}

.searchBox{
  margin-top: 20px;
}
</style>
