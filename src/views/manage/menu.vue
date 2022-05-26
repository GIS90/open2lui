<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <el-button id="btn-create" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openAddMenu">
        <svg-icon icon-class="i_add" />  新增
      </el-button>
      <el-button id="btn-tip" type="success" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openTip()">
        <svg-icon icon-class="i_sm" />  字段说明
      </el-button>
      <!-- 是否展开 -->
      <menu-expand :expand="expandStatus" @menu-expand-status="menuExpandStatus" />
    </el-row>

    <!--Table表格-->
    <div id="data-container" class="table-sty">
      <el-table
        ref="multipleSourceTableRef"
        :data="tableData"
        :row-key="tableAttrs.rowKey"
        :size="tableAttrs.size"
        :fit="tableAttrs.fit"
        :show-header="tableAttrs.showHeader"
        :highlight-current-row="tableAttrs.hcr"
        :border="tableAttrs.border"
        style="width: 100%;margin-bottom: 30px;"
        :default-expand-all="tableAttrs.expand"
        :default-sort="{ prop: 'id', order: 'asc' }"
        :empty-text="tableAttrs.emptyText"
        :header-cell-style="setTableHeaderStyle"
        :tree-props="tableAttrs.treeProps"
        :expand-row-keys="tableOneKeys"
      >
        <el-table-column fixed="left" prop="id" label="菜单ID" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="name" label="RTX名称" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="title" label="中文名称" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="path" label="请求地址" width="180" :header-align="tableRowAttrs.headerAlign" align="left" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="level" label="级别" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="icon" label="菜单图标" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="component" label="组件" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="hidden" label="隐藏属性" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="redirect" label="重定向" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="noCache" label="Cache属性" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="affix" label="Affix属性" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="breadcrumb" label="Breadcrumb属性" width="180" :align="tableRowAttrs.align" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column label="创建时间" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="240" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 20px">{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="create_rtx" label="创建者RTX" width="180" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="right" label="操作" :align="tableRowAttrs.align" width="200">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="详情" placement="top">
              <i class="el-icon-document" @click="rowHandleEdit(scope.$index, scope.row, 'detail')" />
            </el-tooltip>
            <el-tooltip class="icon-item" effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="rowHandleEdit(scope.$index, scope.row, 'info')" />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 暂定table、tree 2种显示模式，不做page分页 -->

    <!-- 提示说明 -->
    <menu-tip :show="tipDialogStatus" @close-tip="closeTip" />

    <!-- 详情 -->
    <menu-detail :show="detailDialogStatus" :row-md5="oprSelectRtx" @close-detail-menu="closeDetailMenu" />

    <!-- 编辑 -->
    <menu-set :show="setDialogStatus" :row-md5="oprSelectRtx" @close-set-menu="closeSetMenu" />
  </div>
</template>

<script>
import store from '@/store'
import { getMenuList } from '@/api/manage'
import MenuExpand from '@/components/manage/MenuExpand'
import MenuTip from '@/components/manage/MenuTip'
import MenuDetail from '@/components/manage/MenuDetail'
import MenuSet from '@/components/manage/MenuSet'

export default {
  name: 'Menu',
  emits: [],
  components: {
    'menu-expand': MenuExpand,
    'menu-tip': MenuTip,
    'menu-detail': MenuDetail,
    'menu-set': MenuSet
  },
  props: {},
  data() {
    return {
      btnDisabled: false, // 按钮禁用状态
      expandStatus: false, // 是否展开
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      // switch attrs
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 40, // 宽度（像素），默认40
        activeText: '展开', // 打开时的文字描述
        inactiveText: '关闭', // 关闭时的文字描述
        activeValue: true, // 打开时的value
        inactiveValue: false, // 打开时的value
        activeColor: '#ff4949', // 打开时的背景色
        inactiveColor: '#13ce66' // 关闭时的背景色
      },
      // table attributes
      tableAttrs: {
        rowKey: 'id',
        stripe: true, // 是否为斑马纹 true/false
        border: true, // 是否带有纵向边框 true/false
        size: 'medium', // 尺寸 medium / small / mini / ''
        fit: true, // 列的宽度是否自撑开 true/false
        showHeader: true, // 是否显示表头 true/false
        hcr: true, // 是否要高亮当前行highlight-current-row true/false
        height: 450, // 高度
        maxHeight: 450, // 最大高度(属性为Table指定最大高度，此时若表格所需的高度大于最大高度，则会显示一个滚动条。)
        expand: false, // default-expand-all 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效
        treeProps: { children: 'children' }, // treeProps
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
      tableData: [], // table data
      tableOneKeys: [], // 一级菜单的key
      tipDialogStatus: false, // tip
      oprSelectRtx: '', // 当前选择数据的RTX
      deleteConfirm: false, // 删除确认dialog状态
      detailDialogStatus: false, // 详情dialog
      setDialogStatus: false, // 编辑dialog
      addDialogStatus: false // 新增dialog
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getMenuList()
  },
  mounted() {},
  methods: {
    getMenuList() { // 请求后台API初始化表格数据
      // 初始化选择参数
      this.oprSelectRtx = ''

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        getMenuList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.tableData = data.list
            this.tableOneKeys = data.keys
          }
          resolve(response)
        }).catch(error => {
          this.loading = false
          reject(error)
        })
      })
    },
    setTableHeaderStyle() { // table title样式
      return {
        background: '#eee',
        color: '#606266'
      }
    },
    rowHandleEdit(index, row, type) { // table row 编辑详情
      console.log(index)
      console.log(row)
      console.log(type)
      if (!row || !type) {
        return false
      }
      this.oprSelectRtx = row.rtx_id
      if (type === 'detail') {
        this.detailDialogStatus = true
      } else if (type === 'info') {
        this.setDialogStatus = true
      }
    },
    closeDetailMenu() { // 关闭菜单详情dg
      this.detailDialogStatus = false
    },
    closeSetMenu(isRefresh) { // 关闭编辑菜单dg
      this.setDialogStatus = false
      if (isRefresh) {
        this.getMenuList()
      }
    },
    openAddMenu() { // 打开新增菜单dg
      this.addDialogStatus = true
    },
    closeAddMenu(isRefresh) { // 关闭新增菜单dg
      this.addDialogStatus = false
      if (isRefresh) {
        this.getMenuList()
      }
    },
    menuExpandStatus(status) { // 打开/关闭table 子菜单
      this.expandStatus = status
      this.tableOneKeys.map(item => {
        return this.$refs.multipleSourceTableRef.toggleRowExpansion(item, status)
      })
    },
    openTip() { // 开启tip
      this.tipDialogStatus = true
    },
    closeTip() { // 关闭tip
      this.tipDialogStatus = false
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
