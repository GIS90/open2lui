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
        <svg-icon icon-class="i_delete" />  删除
      </el-button>
      <el-button id="btn-robot" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openRobotDialog">
        <svg-icon icon-class="i_robot" />  Robot配置
      </el-button>
      <el-button id="btn-temp" type="warning" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="tempSendDialog">
        <svg-icon icon-class="i_notify" />  临时通知
      </el-button>
      <!-- 右侧icon -->
      <span style="float: right">
        <el-tooltip effect="dark" content="刷新" placement="top">
          <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="getTableList(2)" />
        </el-tooltip>
      </span>
    </el-row>

    <!-- 新增 -->
    <qywx-add :show="addDialogStatus" @close-add-dg="closeAddDialog" />

    <!-- Robot配置 -->
    <qywx-robot :show="robotDialogStatus" @close-robot-dg="closeRobotDialog" />

    <!--Table表格-->
    <div id="data-container" class="table-sty">
      <el-table
        ref="multipleTableRef"
        style="width: 100%"
        :data="tableData"
        :size="tableAttrs.size"
        :fit="tableAttrs.fit"
        :show-header="tableAttrs.showHeader"
        :highlight-current-row="tableAttrs.hcr"
        :border="tableAttrs.border"
        :empty-text="tableAttrs.emptyText"
        :default-sort="{ prop: 'create_time', order: 'descending' }"
        :header-cell-style="setTableHeaderStyle"
        :row-style="setTableRowStyle"
        @select="selectRow"
        @selection-change="selectChange"
        @select-all="selectAll"
      >
        <el-table-column fixed="left" type="selection" width="60" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column fixed="left" label="创建时间" width="240" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot">
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 20px">{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="280" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="content" label="消息内容" width="420" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="type_name" label="消息类型" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="count" label="发送次数" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="last_send_time" label="最新发送时间" width="220" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="rtx_id" label="创建人RTX" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column fixed="right" label="操作" min-width="360" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-tooltip class="table-handle-icon" effect="dark" content="编辑" placement="top">
              <i class="el-icon-edit" @click="rowHandleEdit(scope.$index, scope.row)" />
            </el-tooltip>
            <el-tooltip class="icon-item" effect="light" content="发送" placement="top">
              <el-button
                icon="el-icon-position"
                type="primary"
                size="mini"
                round
                plain
                @click="rowHandleSend(scope.$index, scope.row)"
              />
            </el-tooltip>
            <el-tooltip class="table-handle-icon icon-item" effect="dark" content="定时发送" placement="top">
              <i class="el-icon-setting" style="color: red" @click="rowHandleCron(scope.$index, scope.row)" />
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

    <!-- 批量删除 -->
    <batch-delete :show="deleteConfirm" :list="selectList" :source="deleteSource" @close-delete-dialog="closeDeleteDialog" />

    <!-- 编辑 -->
    <qywx-set :show="setDialogStatus" :row-md5="oprSelectRowMd5" @close-set-dg="closeSetDialog" />

    <!-- 发送 -->
    <qywx-send :show="sendDialogStatus" :row-md5="oprSelectRowMd5" @close-send-dg="closeSendDialog" />

    <!-- 临时发送 -->
    <qywx-send-temp :show="sendTempDialogStatus" @close-send-temp-dg="closeSendTempDialog" />

  </div>
</template>

<script>
import store from '@/store'
import QywxRobot from '@/services/notify/QywxRobot'
import QywxAdd from '@/services/notify/QywxAdd'
import QywxSet from '@/services/notify/QywxSet'
import QywxSend from '@/services/notify/QywxSend'
import QywxSendTemp from '@/services/notify/QywxSendTemp'
import Pagination from '@/components/Pagination'
import BatchDelete from '@/components/BatchDelete'
import { notifyQywxList, notifyQywxDelete } from '@/api/notify'

export default {
  name: 'Qywx',
  components: {
    'qywx-add': QywxAdd,
    'qywx-set': QywxSet,
    'qywx-send': QywxSend,
    'qywx-send-temp': QywxSendTemp,
    'qywx-robot': QywxRobot,
    'batch-delete': BatchDelete,
    'public-pagination': Pagination
  },
  emits: [],
  props: {},
  data() {
    return {
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
      oprSelectRowMd5: '', // 当前选择data-md5
      addDialogStatus: false, // 新增dialog状态
      setDialogStatus: false, // 设置dialog状态
      sendDialogStatus: false, // send-dialog状态
      sendTempDialogStatus: false, // send-temp-dialog状态(临时)
      deleteSource: 'notify-qywx', // delete source
      deleteConfirm: false, // 删除确认dialog状态
      robotDialogStatus: false // Robot配置dg状态
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
    this.$nextTick(() => {
      this.getTableList()
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
    setTableHeaderStyle() { // table title样式
      return {
        background: '#eee',
        color: '#606266'
      }
    },
    setTableRowStyle() { // table row style
    },
    getTableList(type) { // get source list data
      // 初始化选择参数
      this.selectAllStatus = false
      this.selectList = []
      this.oprSelectRowMd5 = ''
      // 禁用按钮/INPUT/SELECT
      this.btnDisabled = true

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        notifyQywxList(data).then(response => {
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
    rowHandleSend(index, row) { // 打开发送dtalk dg
      if (row?.md5_id) {
        this.oprSelectRowMd5 = row.md5_id
        this.sendDialogStatus = true
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
          notifyQywxDelete(data).then(response => {
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
    closeSendDialog(isRefresh) { // 关闭发送dg
      this.sendDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    },
    openRobotDialog() { // 打开Robot配置
      this.robotDialogStatus = true
    },
    closeRobotDialog() { // 关闭Robot配置
      this.robotDialogStatus = false
    },
    rowHandleCron(index, row) { // 定时发送设置
      if (!row || !row.md5_id) {
        return false
      }
      this.$message({
        message: '暂未开通',
        type: 'warning',
        duration: 2.0 * 1000
      })
      return false
    },
    tempSendDialog() { // 打开临时发送dg
      this.sendTempDialogStatus = true
    },
    closeSendTempDialog() { // 关闭临时发送dg
      this.sendTempDialogStatus = false
    }
  },
  setup: {}
}
</script>

<style scoped>

</style>
