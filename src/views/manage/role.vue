<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <el-button id="btn-create" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openAddRole">
        <svg-icon icon-class="i_add" />  新增
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDeleteDialog">
        <svg-icon icon-class="i_delete" />  删除
      </el-button>
    </el-row>

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
        <el-table-column fixed="left" type="selection" :align="tableRowAttrs.align" width="60" />
        <el-table-column fixed="left" label="创建时间" :align="tableRowAttrs.align" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 20px">{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="engname" label="RTX名称" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="chnname" label="中文名称" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="introduction" label="描述" width="350" :header-align="tableRowAttrs.headerAlign" align="left" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="right" label="操作" :align="tableRowAttrs.align" width="330">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="详情" placement="top">
              <i class="el-icon-document" @click="rowHandleDetail(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip v-if="scope.row.engname !== adminRtx" class="icon-item" effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip v-if="scope.row.engname !== adminRtx" class="icon-item" effect="dark" content="授权" placement="top">
              <i class="el-icon-setting" @click="rowHandleAuth(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip v-if="scope.row.engname !== adminRtx" class="icon-item" effect="dark" content="删除" placement="top">
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

    <!-- 新增角色 -->
    <role-add :show="addDialogStatus" @close-add-role="closeAddRole" />

    <!-- 角色详情 -->
    <role-detail :show="detailDialogStatus" :row-md5="oprSelectRowMd5" @close-detail-role="closeDetailRole" />

    <!-- 角色设置 -->
    <role-set :show="setDialogStatus" :row-md5="oprSelectRowMd5" @close-set-role="closeSetRole" />

    <!-- 权限设置 -->
    <role-auth :show="authDialogStatus" :row-md5="oprSelectRowMd5" @close-auth-role="closeAuthRole" />

    <!-- 删除dialog -->
    <role-batch-delete :show="deleteConfirm" :list="selectList" @close-delete-dialog="closeDeleteDialog" />
  </div>
</template>

<script>
import store from '@/store'
import { roleDelete, getRoleList } from '@/api/manage'
import RoleAdd from '@/components/manage/RoleAdd'
import RoleDetail from '@/components/manage/RoleDetail'
import RoleSet from '@/components/manage/RoleSet'
import RoleBatchDelete from '@/components/manage/RoleBatchDelete'
import RoleAuth from '@/components/manage/RoleAuth'
import Pagination from '@/components/Pagination'
import { adminRoleRtx } from '@/settings.js'

export default {
  name: 'Role',
  emits: [],
  components: {
    'role-add': RoleAdd,
    'role-detail': RoleDetail,
    'role-set': RoleSet,
    'role-auth': RoleAuth,
    'role-batch-delete': RoleBatchDelete,
    'public-pagination': Pagination
  },
  props: {},
  data() {
    return {
      adminRtx: adminRoleRtx, // admin rtx
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
      oprSelectRowMd5: '', // 当前选择data rtx
      deleteConfirm: false, // 删除确认dialog状态
      detailDialogStatus: false, // 角色详情dialog
      setDialogStatus: false, // 角色设置dialog
      addDialogStatus: false, // 新增角色dialog
      authDialogStatus: false // 角色权限dialog
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
    this.getRoleList()
  },
  mounted() {},
  methods: {
    getRoleList() { // 获取role list数据
      // 初始化选择参数
      this.selectAllStatus = false
      this.selectList = []
      this.oprSelectRowMd5 = ''

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'type': this.fileType,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        getRoleList(data).then(response => {
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
      this.$refs.multipleTableRef.toggleAllSelection()
    },
    setTableHeaderStyle() { // table title样式
      return {
        background: '#eee',
        color: '#606266'
      }
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
    rowHandleAuth(index, row) { // table row 授权dialog
      if (!row || !row.md5_id) {
        return false
      }
      this.oprSelectRowMd5 = row.md5_id
      this.authDialogStatus = true
    },
    closeFileSet(isRefresh) { // 关闭table row 设置dialog
      this.setDialogStatus = false
      if (isRefresh) {
        this.getRoleList()
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
        roleDelete(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.getRoleList()
          }
          resolve(response)
        }).catch(error => {
          this.loading = false
          reject(error)
        })
      })
    },
    openAddRole() { // 打开新增角色dialog
      this.addDialogStatus = true
    },
    closeAddRole(isRefresh) { // 关闭新增角色dialog
      this.addDialogStatus = false
      if (isRefresh) {
        this.getRoleList()
      }
    },
    closeDetailRole() { // 关闭角色详情dialog
      this.detailDialogStatus = false
    },
    closeSetRole(isRefresh) { // 关闭角色设置dialog
      this.setDialogStatus = false
      if (isRefresh) {
        this.getRoleList()
      }
    },
    closeDeleteDialog(isRefresh) { // 关闭批量删除Dialog
      this.deleteConfirm = false
      if (isRefresh) {
        this.getRoleList()
      }
    },
    openDeleteDialog() { // 打开批量删除Dialog
      if (this.selectList.length === 0) {
        this.$message({
          message: '请选择删除的角色',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      this.deleteConfirm = true
    },
    closeAuthRole() { // 关闭权限设置Dialog
      this.authDialogStatus = false
    },
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getRoleList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getRoleList()
    }
  }
}
</script>

<style scoped>

</style>
