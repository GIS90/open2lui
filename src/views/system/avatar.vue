<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-button id="btn-upload" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openAddDialog">
        <svg-icon icon-class="i_add" />  新增
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
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
          <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="getTableList(2)" />
        </el-tooltip>
        <icon-download-excel :source="pageSourceId" :disabled="btnDisabled" :select-list="selectList" />
      </span>
    </el-row>
    <!--Search查询条件区域-->
    <div v-if="searchStatus" class="searchBox">
      <avatar-filter :type-list="typeList" :user-list="userList" :disabled="btnDisabled" @filter-search-result="filterSearchResult" />
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
        :default-sort="{ prop: 'order_id', order: 'asc' }"
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
        <el-table-column fixed="left" prop="name" label="名称" width="220" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="type_name" label="类型" width="140" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="label" label="标签" width="350" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot">
          <template slot-scope="scope">
            <el-tag v-for="(item, index) in scope.row.label" :key="index" :type="tagTypeList[item.index]" effect="dark" class="tag-label">
              {{ item.type }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="summary" label="简介" width="280" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="count" label="设置次数" width="140" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="order_id" label="排序ID" width="140" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="rtx_id" label="创建人RTX" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="create_time" label="创建时间" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="update_rtx" label="最新更新人RTX" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="update_time" label="最新更新人时间" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="right" label="操作" min-width="200" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-tooltip class="table-handle-icon" effect="dark" content="详情" placement="top">
              <i class="el-icon-document" @click="rowHandleView(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="table-handle-icon icon-item" effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="table-handle-icon icon-item" effect="dark" content="裁剪" placement="top">
              <i class="el-icon-scissors" @click="rowHandleCrop(scope.$index, scope.row)" />
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

    <!-- 文件上传 -->
    <public-upload-file :dialog="addDialogStatus" :file-type="fileType" @close-file-upload="closeAddDialog" />

    <!-- 详情 -->
    <avatar-view :show="viewDialogStatus" :row-md5="oprSelectRowMd5" @close-view-dg="closeViewDialog" />

    <!-- 编辑 -->
    <avatar-set :show="setDialogStatus" :row-md5="oprSelectRowMd5" @close-set-dg="closeSetDialog" />

    <!-- 批量删除 -->
    <batch-delete :show="deleteConfirm" :list="selectList" :source="pageSourceId" @close-delete-dialog="closeDeleteDialog" />

    <!-- 图片裁剪 -->
    <avatar-crop :show="selectImageVisible" :row-md5="oprSelectRowMd5" :image-url="selectImageUrl" @close-crop-dg="closeCropDialog" />
  </div>
</template>

<script>
import AvatarSet from '@/services/system/AvatarSet'
import AvatarView from '@/services/system/AvatarView'
import AvatarCrop from '@/services/system/AvatarCrop'
import AvatarFilter from '@/services/system/AvatarFilter'
import Pagination from '@/components/Pagination'
import store from '@/store'
import { SystemAvatarDelete, SystemAvatarList } from '@/api/system'
import BatchDelete from '@/components/BatchDelete'
import IconDownloadExcel from '@/components/IconDownloadExcel'
import UploadFile from '@/components/UploadFile'

export default {
  name: 'SystemAvatar',
  components: {
    'avatar-set': AvatarSet,
    'avatar-view': AvatarView,
    'avatar-crop': AvatarCrop,
    'avatar-filter': AvatarFilter,
    'batch-delete': BatchDelete,
    'public-pagination': Pagination,
    'public-upload-file': UploadFile,
    'icon-download-excel': IconDownloadExcel
  },
  emits: [],
  props: {},
  inject: {},
  data() {
    return {
      fileType: '8', // 文件类型：具体明细参考UploadFile组件
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
      rateAttrs: {
        max: 3, // 最大分
        half: false, // 是否允许半选
        lowThreshold: 1, // 低分和中等分数的界限值，值本身被划分在低分中
        highThreshold: 2.5, // 高分和中等分数的界限值，值本身被划分在高分中
        showText: true, // 是否显示辅助文字
        textColor: '#1F2D3D', // 辅助文字颜色
        texts: [], // 辅助文字数组:['一般', '常用', '频繁']
        colors: ['#99A9BF', '#F7BA2A', '#FF0000'] // 颜色
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
      tagTypeList: ['success', 'info', 'warning', 'danger'], // tag类型列表
      // pagination attrs
      pageCur: 1, // 当前page
      pageSize: 15, // 每页显示条目个数
      pageTotal: 0, // 总条数
      selectAllStatus: false, // 全选状态
      selectList: [], // 选择列表
      tableData: [], // table data
      oprSelectRowMd5: '', // 当前选择data-md5
      addDialogStatus: false, // 新增dialog状态
      setDialogStatus: false, // 设置dialog状态
      viewDialogStatus: false, // 查看dialog状态
      pageSourceId: 'system-avatar', // page source id
      deleteConfirm: false, // 删除确认dialog状态
      searchType: 'primary', // search button type: primary, success, default is primary
      searchIcon: 'i-double-arrow-down', // search button icon
      searchBtnText: '展开查询', // search button text
      searchStatus: false, // 是否展开查询条件
      // search form data
      searchData: {
        create_time_start: '', // 起始创建时间
        create_time_end: '', // 结束创建时间
        create_rtx: [], // 创建用户RTX，多个
        type: [], // 类型，多个
        content: '' // 模糊查询搜索内容
      },
      userList: [], // user list
      typeList: [], // type list
      selectImageUrl: '', // 当前选择的图片URL
      selectImageVisible: false // 是否显示当前选择图片
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
      this.getTableList(1)
    })
  },
  mounted() {},
  methods: {
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
        } else if ([5].includes(index)) {
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
    setTableRowStyle({ row, rowIndex }) { // table row style
    },
    getTableList(type) { // get source list data
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
      this.oprSelectRowMd5 = ''

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0,
        ...this.searchData
      }
      return new Promise((resolve, reject) => {
        SystemAvatarList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.tableData = data.list
            this.pageTotal = data.total
            // filter参数传入
            this.userList = data.user
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
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getTableList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getTableList()
    },
    openAddDialog() { // 打开新增
      this.addDialogStatus = true
    },
    closeAddDialog(isRefresh) { // 关闭新增
      this.addDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
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
          message: '请选择删除的数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      this.deleteConfirm = true
    },
    rowHandleEdit(index, row) { // table row 设置dialog
      if (row?.md5_id) {
        this.oprSelectRowMd5 = row.md5_id
        this.setDialogStatus = true
      }
    },
    rowHandleView(index, row) { // table view 设置dialog
      if (row?.md5_id) {
        this.oprSelectRowMd5 = row.md5_id
        this.viewDialogStatus = true
      }
    },
    rowHandleCrop(index, row) { // table view 设置dialog
      if (row?.md5_id && row?.url) {
        this.oprSelectRowMd5 = row.md5_id
        this.selectImageUrl = row.url
        this.selectImageVisible = true
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
          SystemAvatarDelete(data).then(response => {
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
    },
    closeSetDialog(isRefresh) { // 关闭设置dg
      this.setDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    closeViewDialog(isRefresh) { // 关闭查看dg
      this.viewDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    closeCropDialog(isRefresh) { // 关闭预览
      this.selectImageVisible = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    showSearch() {
      this.searchStatus = !this.searchStatus
    },
    filterSearchResult(data, isRefresh) { // 更新高级查询条件
      this.searchData = data
      if (isRefresh) {
        this.getTableList(3)
      }
    }
  }
}
</script>

<style scoped>
.searchBox{
  margin-top: 20px;
}

.tag-label {
  margin: 0 5px 0 5px;
}
</style>
