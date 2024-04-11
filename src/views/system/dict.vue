<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-button id="btn-add" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openAdd">
        <svg-icon icon-class="i_add" />  新增
      </el-button>
      <el-button id="btn-main" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openMain">
        <svg-icon icon-class="i_main" />  维护
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-disable" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDisable">
        <svg-icon icon-class="i_disable" />  禁用
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDelete">
        <svg-icon icon-class="i_delete" />  批量删除
      </el-button>
      <!-- 右侧icon -->
      <span style="float: right">
        <el-tooltip effect="dark" content="刷新" placement="top">
          <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="getTableList(2)" />
        </el-tooltip>
        <icon-download-excel :source="pageSourceId" :disabled="btnDisabled" :select-list="selectList" />
      </span>
    </el-row>

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
        :header-cell-style="setTableHeaderStyle"
        :row-style="setTableRowStyle"
        @select="selectRow"
        @selection-change="selectChange"
        @select-all="selectAll"
      >
        <el-table-column fixed="left" type="selection" width="80" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column fixed="left" prop="id" label="序号" width="100" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="left" prop="name" label="RTX名称" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="key" label="字典KEY" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="value" label="字典VALUE" width="240" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="description" label="描述" width="350" sortable :header-align="tableRowAttrs.align" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="order_id" label="排序" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="create_rtx" label="创建者RTX" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="create_time" label="创建时间" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="update_rtx" label="最近更新者RTX" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="update_time" label="最近更新时间" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="right" label="操作" :align="tableRowAttrs.align" min-width="120">
          <template slot-scope="scope">
            <el-tooltip class="table-handle-icon" effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="icon-item table-handle-icon" effect="dark" content="删除" placement="top">
              <i class="el-icon-delete" @click="rowHandleDelete(scope.$index, scope.row)" />
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="状态管理" width="160" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot">
          <template slot-scope="scope">
            <dict-status :row="scope.row" />
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

    <!-- 新增 -->
    <dict-add :show="addDialogStatus" @close-add="closeAdd" />

    <!-- 维护 -->
    <dict-main :show="mainDialogStatus" @close-main="closeMain" />

    <!-- 编辑详情 -->
    <dict-edit :show="setDialogStatus" :md5="oprSelectMd5" @close-edit="closeEdit" />

    <!-- 批量禁用 -->
    <dict-batch-disable :show="disableConfirm" :list="selectList" @close-disable="closeDisable" />

    <!-- 批量删除 -->
    <batch-delete :show="deleteConfirm" :list="selectList" :source="pageSourceId" @close-delete-dialog="closeDelete" />
  </div>
</template>

<script>
import store from '@/store'
import DictAdd from '@/services/system/DictAdd'
import DictMain from '@/services/system/DictMain'
import DictEdit from '@/services/system/DictEdit'
import DictStatus from '@/services/system/DictStatus'
import DictBatchDisable from '@/services/system/DictBatchDisable'
import Pagination from '@/components/Pagination'
import BatchDelete from '@/components/BatchDelete'
import IconDownloadExcel from '@/components/IconDownloadExcel'
import { SystemDictDelete, SystemDictList } from '@/api/system'

export default {
  name: 'InfoDict',
  emits: [],
  components: {
    'dict-add': DictAdd,
    'dict-main': DictMain,
    'dict-edit': DictEdit,
    'batch-delete': BatchDelete,
    'dict-batch-disable': DictBatchDisable,
    'dict-status': DictStatus,
    'public-pagination': Pagination,
    'icon-download-excel': IconDownloadExcel
  },
  props: {},
  data() {
    return {
      btnDisabled: false, // 按钮禁用状态
      selBtnText: '全选', // 选择按钮内容
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
      selectAllStatus: false, // 全选状态
      selectList: [], // 选择列表
      tableData: [], // table data
      oprSelectMd5: '', // 当前选择数据的md5-id
      disableConfirm: false, // 批量禁用确认dialog状态
      deleteConfirm: false, // 批量删除确认dialog状态
      pageSourceId: 'system-dict', // page source id
      setDialogStatus: false, // 编辑dialog
      addDialogStatus: false, // 新增dialog
      mainDialogStatus: false, // 维护dialog
      userStatus: true // 状态管理
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
      this.getTableList(1)
    })
  },
  mounted() {},
  methods: {
    getTableList(type) { // 请求后台API初始化表格数据
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
      this.oprSelectMd5 = ''

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        SystemDictList(data).then(response => {
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
    setTableHeaderStyle({ row, column, rowIndex, columnIndex }) { // table title样式
      if (column.label === '操作') {
        return {
          background: '#dfebf7',
          color: '#000000'
        }
      } else if (column.label === '状态管理') {
        return {
          background: '#efe390',
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
    rowHandleEdit(index, row) { // table row 编辑详情
      if (row?.md5_id) {
        this.oprSelectMd5 = row.md5_id
        this.setDialogStatus = true
      }
    },
    closeEdit(isRefresh) { // 关闭table row编辑
      this.setDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    openAdd() { // 打开新增
      this.addDialogStatus = true
    },
    closeAdd(isRefresh) { // 关闭新增
      this.addDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    openMain() { // 打开维护
      this.mainDialogStatus = true
    },
    closeMain(isRefresh) { // 关闭维护
      this.mainDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    openDisable() { // 打开批量禁用
      if (this.selectList.length === 0) {
        this.$message({
          message: '请选择禁用的数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      this.disableConfirm = true
    },
    closeDisable(isRefresh) { // 关闭批量删除
      this.disableConfirm = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    openDelete() { // 打开批量删除
      if (this.selectList.length === 0) {
        this.$message({
          message: '请选择删除的数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      this.deleteConfirm = true
    },
    closeDelete(isRefresh) { // 关闭批量删除
      this.deleteConfirm = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getTableList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getTableList()
    },
    rowHandleDelete(index, row) { // table row 删除
      if (row?.md5_id) {
        const data = {
          'rtx_id': store.getters.rtx_id,
          'md5': row.md5_id
        }
        this.btnDisabled = true
        return new Promise((resolve, reject) => {
          SystemDictDelete(data).then(response => {
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
            reject(error)
          }).finally(() => {
            this.btnDisabled = false
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
