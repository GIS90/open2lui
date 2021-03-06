<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <el-button id="btn-create" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openAddUser">
        <svg-icon icon-class="i_add" />  新增
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDeleteDialog">
        <svg-icon icon-class="i_delete" />  注销
      </el-button>
    </el-row>

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
        <el-table-column fixed="left" type="selection" :align="tableRowAttrs.align" width="60" />
        <el-table-column fixed="left" label="创建时间" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="240" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 20px">{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="left" prop="rtx_id" label="RTX名称" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="name" label="姓名" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="phone" label="电话" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="email" label="邮箱" width="270" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="department" label="部门" width="270" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="introduction" label="描述" width="320" :header-align="tableRowAttrs.align" align="left" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="create_rtx" label="创建者RTX" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="delete_time" label="注销时间" width="220" :align="tableRowAttrs.align" sortable />
        <el-table-column fixed="right" label="操作" :align="tableRowAttrs.align" width="200">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="icon-item" effect="dark" content="重置密码" placement="top">
              <i class="el-icon-setting" @click="rowHandlePw(scope.$index, scope.row)" />
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="状态管理" :align="tableRowAttrs.align" width="200">
          <template slot-scope="scope">
            <user-status :row="scope.row" />
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

    <!-- 新增用户 -->
    <user-add :show="addDialogStatus" @close-add-user="closeAddUser" />

    <!-- 编辑详情 -->
    <user-detail :show="setDialogStatus" :rtx-id="oprSelectRtx" @close-detail-user="closeDetailUser" />

    <!-- 删除dialog -->
    <user-batch-delete :show="deleteConfirm" :list="selectList" @close-delete-dialog="closeDeleteDialog" />

    <!-- 重置密码 -->
    <user-reset-pw :show="pwDialogStatus" :rtx-id="oprSelectRtx" @close-pw-user="closePwUser" />
  </div>
</template>

<script>
import store from '@/store'
import { getUserList } from '@/api/manage'
import UserAdd from '@/components/manage/UserAdd-M'
import UserBatchDelete from '@/components/manage/UserBatchDelete'
import UserStatus from '@/components/manage/UserStatus'
import Pagination from '@/components/Pagination'
import UserDetail from '@/components/manage/UserDetail'
import UserResetPw from '@/components/manage/UserResetPw'

export default {
  name: 'User',
  emits: [],
  components: {
    'user-add': UserAdd,
    'user-batch-delete': UserBatchDelete,
    'user-status': UserStatus,
    'user-detail': UserDetail,
    'user-reset-pw': UserResetPw,
    'pagination': Pagination
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
      oprSelectRtx: '', // 当前选择数据的RTX
      deleteConfirm: false, // 删除确认dialog状态
      pwDialogStatus: false, // 重置密码dialog
      setDialogStatus: false, // 编辑dialog
      addDialogStatus: false, // 新增dialog
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
    this.getUserList()
  },
  mounted() {},
  methods: {
    getUserList() { // 请求后台API初始化表格数据
      // 初始化选择参数
      this.selectAllStatus = false
      this.selectList = []
      this.oprSelectRtx = ''

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        getUserList(data).then(response => {
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
    rowHandlePw(index, row) { // table row 重置密码
      if (!row) {
        return false
      }
      this.oprSelectRtx = row.rtx_id
      this.pwDialogStatus = true
    },
    rowHandleEdit(index, row) { // table row 编辑详情
      if (!row) {
        return false
      }
      this.oprSelectRtx = row.rtx_id
      this.setDialogStatus = true
    },
    openAddUser() { // 打开新增用户dialog
      this.addDialogStatus = true
    },
    closeAddUser(isRefresh) { // 关闭新增用户dialog
      this.addDialogStatus = false
      if (isRefresh) {
        this.getUserList()
      }
    },
    closeDetailUser(isRefresh) { // 关闭table row编辑
      this.setDialogStatus = false
      if (isRefresh) {
        this.getUserList()
      }
    },
    closePwUser() { // 关闭重置密码
      this.pwDialogStatus = false
    },
    closeDeleteDialog(isRefresh) { // 关闭批量删除Dialog
      this.deleteConfirm = false
      if (isRefresh) {
        this.getUserList()
      }
    },
    openDeleteDialog() { // 打开批量删除Dialog
      if (this.selectList.length === 0) {
        this.$message({
          message: '请选择注销的用户',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      this.deleteConfirm = true
    },
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getUserList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getUserList()
    }
  }
}
</script>

<style scoped>

</style>
