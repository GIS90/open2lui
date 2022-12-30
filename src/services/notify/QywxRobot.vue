<template>
  <div>
    <el-dialog
      :visible="show"
      :width="dialogAttrs.width"
      :fullscreen="fullScreenStatus"
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
      @open="openDialog()"
      @close="closeDialog()"
    >
      <!--title-->
      <template #title>
        <div @dblclick="handleFull">
          <span class="dialog-title">
            <span v-text="dialogAttrs.title" />
            <el-tooltip class="item" effect="dark" content="关闭" placement="top">
              <i class="el-icon-close dialog-title-close" @click="closeDialog" />
            </el-tooltip>
            <el-tooltip class="item" effect="dark" :content="fullScreenText" placement="top">
              <i :class="[fullScreenIcon, 'dialog-title-full']" @click="handleFull" />
            </el-tooltip>
          </span>
        </div>
      </template>
      <!-- 按钮 -->
      <el-row>
        <el-button id="btn-upload" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openRobotAdd">
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
          <el-table-column fixed="left" type="selection" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="60" />
          <el-table-column fixed="left" prop="id" label="序号" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.headerAlign" width="100" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
          <el-table-column fixed="left" prop="name" label="名称" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.headerAlign" width="240" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
          <el-table-column prop="key" label="企业号标识" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.headerAlign" width="220" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
          <el-table-column prop="secret" label="管理组凭证密钥" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.headerAlign" width="280" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
          <el-table-column prop="agent" label="机器人应用ID" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.headerAlign" width="200" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
          <el-table-column prop="description" label="描述" :header-align="tableRowAttrs.headerAlign" align="left" width="320" sortable :show-overflow-tooltip="tableRowAttrs.sot" />
          <el-table-column prop="rtx_id" label="创建人RTX" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="200" sortable />
          <el-table-column label="创建时间" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="220" sortable>
            <template slot-scope="scope">
              <i class="el-icon-time" />
              <span style="margin-left: 20px">{{ scope.row.create_time }}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" width="320">
            <template slot-scope="scope">
              <el-tooltip class="table-handle-icon" effect="dark" content="设置" placement="top">
                <i class="el-icon-setting" @click="rowHandleEdit(scope.$index, scope.row)" />
              </el-tooltip>
              <el-tooltip class="table-handle-icon icon-item" effect="dark" :content="scope.row.select === true ? '启用' : '关闭'" placement="top">
                <i :class="scope.row.select === true ? 'el-icon-success info_red' : 'el-icon-error'" @click="setSelectStatus(scope.$index, scope.row)" />
              </el-tooltip>
              <el-tooltip class="table-handle-icon icon-item" effect="dark" content="Ping" placement="top">
                <i class="el-icon-phone-outline" @click="rowHandlePing(scope.$index, scope.row)" />
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
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" :loading="loading" type="primary" @click="closeDialog">关闭</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 新增 -->
    <qywx-robot-add :show="addDialogStatus" @close-robot-add="closeRobotAdd" />

    <!-- 删除 -->
    <batch-delete :show="deleteConfirm" :list="selectList" :source="deleteSource" @close-delete-dialog="closeDeleteDialog" />

    <!-- 设置 -->
    <qywx-robot-set :show="setDialogStatus" :row-md5="oprSelectRowMd5" @close-set-dg="closeDialogSet" />
  </div>
</template>

<script>
import store from '@/store'
import QywxRobotAdd from '@/services/notify/QywxRobotAdd'
import QywxRobotSet from '@/services/notify/QywxRobotSet'
import BatchDelete from '@/components/BatchDelete'
import Pagination from '@/components/Pagination'
import { notifyQywxRobotList, notifyQywxRobotDelete,
  notifyQywxRobotPing, notifyQywxRobotSelect } from '@/api/notify'

export default {
  name: 'QywxRobot',
  emits: [],
  components: {
    'batch-delete': BatchDelete,
    'qywx-robot-add': QywxRobotAdd,
    'qywx-robot-set': QywxRobotSet,
    'public-pagination': Pagination
  },
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '机器人配置',
        width: '80%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '6%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: false, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
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
      // table attributes
      tableAttrs: {
        stripe: true, // 是否为斑马纹 true/false
        border: false, // 是否带有纵向边框 true/false
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
      oprSelectRowMd5: '', // 当前选择data-md5
      setDialogStatus: false, // 设置dialog状态
      addDialogStatus: false, // 新增dg状态
      deleteSource: 'notify-qywx-robot', // delete source
      deleteConfirm: false // 删除确认dialog状态
    }
  },
  computed: {},
  watch: {
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    },
    selectAllStatus(newVal, oldVal) { // watch select button status
      if (newVal) {
        this.selBtnText = '取消'
      } else {
        this.selBtnText = '全选'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作，获取最新数据
      // 初始化非全屏
      this.fullScreenStatus = false
      this.getTableList()
    },
    closeDialog() { // 关闭dg
      this.$emit('close-robot-dg', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    getTableList() {
      // 初始化选择参数
      this.selectAllStatus = false
      this.selectList = []

      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        notifyQywxRobotList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.tableData = data.list
            this.pageTotal = data.total
          } else {
            this.$emit('close-robot-dg')
          }
          resolve(response)
        }).catch(error => {
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
    rowHandleEdit(index, row) { // table row 设置dialog
      if (!row || !row.md5_id) {
        return false
      }
      this.oprSelectRowMd5 = row.md5_id
      this.setDialogStatus = true
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
    rowHandleDelete(index, row) { // table row 删除
      if (!row || !row?.md5_id) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': row.md5_id
      }
      this.btnDisabled = true
      return new Promise((resolve, reject) => {
        notifyQywxRobotDelete(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.getTableList()
          }
          this.btnDisabled = false
          resolve(response)
        }).catch(error => {
          this.btnDisabled = false
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
    openRobotAdd() {
      this.addDialogStatus = true
    },
    closeRobotAdd(isRefresh) {
      this.addDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    closeDialogSet(isRefresh) {
      this.setDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    setSelectStatus(index, row) {
      if (!row || !row?.md5_id) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': row.md5_id,
        'select': row.select
      }
      this.btnDisabled = true
      return new Promise((resolve, reject) => {
        notifyQywxRobotSelect(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '设置成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.getTableList()
          }
          this.btnDisabled = false
          resolve(response)
        }).catch(error => {
          this.btnDisabled = false
          reject(error)
        })
      })
    },
    rowHandlePing(index, row) { // table row ping
      if (!row || !row?.md5_id) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': row.md5_id
      }
      this.btnDisabled = true
      return new Promise((resolve, reject) => {
        notifyQywxRobotPing(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: 'Ping成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.btnDisabled = false
          resolve(response)
        }).catch(error => {
          this.btnDisabled = false
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
