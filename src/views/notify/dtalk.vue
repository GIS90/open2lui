<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-button id="btn-upload" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openFileUpload">
        <svg-icon icon-class="i_upload" />  上传
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="manualSelectALL">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openDeleteDialog">
        <svg-icon icon-class="i_delete" />  批量删除
      </el-button>
      <el-button id="btn-robot" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openRobotDialog">
        <svg-icon icon-class="i_robot" />  Robot配置
      </el-button>
      <el-button id="btn-download" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled">
        <a :href="dtalkTemplateFile"><i class="el-icon-paperclip" />  模板下载</a>
      </el-button>
      <el-button id="btn-tip" type="success" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled" @click="openTip">
        <svg-icon icon-class="i_sm" />  操作说明
      </el-button>
      <!-- 右侧icon -->
      <span style="float: right">
        <el-tooltip effect="dark" content="刷新" placement="top">
          <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="getTableList(2)" />
        </el-tooltip>
      </span>
    </el-row>

    <!-- 提示说明 -->
    <dtalk-tip :show="tipDialogStatus" @close-tip="closeTip" />

    <!-- 文件上传 -->
    <public-upload-file :dialog="uploadDialogStatus" :file-type="fileType" @close-file-upload="closeFileUpload" />

    <!-- Robot配置 -->
    <dtalk-robot :show="robotDialogStatus" @close-robot-dg="closeRobotDialog" />

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
        <el-table-column fixed="left" prop="file_name" label="文件名称" width="320" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="set_sheet_name" label="操作Sheet" width="280" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column label="Sheet数" width="170" sortable :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-popover v-if="scope.row.sheet_names.length > 0" trigger="hover" placement="top" width="280">
              <div v-for="(item, index) in scope.row.sheet_names" :key="index">
                <p><el-tag>表{{ index }}</el-tag>: {{ item.value }}</p>
              </div>
              <div slot="reference">
                <el-tag type="danger">{{ scope.row.nsheet }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="count" label="操作次数" width="150" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column prop="number" label="发送条数" width="150" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column prop="set_title" label="消息标题" width="280" sortable :header-align="tableRowAttrs.headerAlign" align="left" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column prop="rtx_id" label="上传人RTX" width="180" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" />
        <el-table-column prop="create_time" label="创建时间" width="200" sortable :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align" :show-overflow-tooltip="tableRowAttrs.sot" />
        <el-table-column fixed="right" label="操作" min-width="220" :header-align="tableRowAttrs.headerAlign" :align="tableRowAttrs.align">
          <template slot-scope="scope">
            <el-tooltip class="table-handle-icon" effect="dark" content="设置" placement="top">
              <i class="el-icon-setting" @click="rowHandleEdit(scope.$index, scope.row)" />
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

    <!-- 批量删除 -->
    <batch-delete :show="deleteConfirm" :list="selectList" :source="deleteSource" @close-delete-dialog="closeDeleteDialog" />

    <!-- 设置 -->
    <dtalk-set :show="setDialogStatus" :row-md5="oprSelectRowMd5" @close-set-dg="closeSetDialog" />

    <!-- 消息发送 -->
    <dtalk-send :show="sendDialogStatus" :row-md5="oprSelectRowMd5" @close-send-dg="closeSendDialog" />

  </div>
</template>

<script>
import store from '@/store'
import DtalkSet from '@/services/notify/DtalkSet'
import DtalkTip from '@/services/notify/DtalkTip'
import DtalkRobot from '@/services/notify/DtalkRobot'
import DtalkSend from '@/services/notify/DtalkSend'
import UploadFile from '@/components/UploadFile'
import Pagination from '@/components/Pagination'
import BatchDelete from '@/components/BatchDelete'
import { notifyDtalkList, notifyDtalkDelete } from '@/api/notify'

export default {
  name: 'NotifyDtalk',
  emits: [],
  components: {
    'batch-delete': BatchDelete,
    'dtalk-set': DtalkSet,
    'dtalk-tip': DtalkTip,
    'dtalk-robot': DtalkRobot,
    'dtalk-send': DtalkSend,
    'public-pagination': Pagination,
    'public-upload-file': UploadFile
  },
  props: {},
  data() {
    return {
      fileType: '7', // 文件类型：1-excel merge, 2-excel split, 3-word, 4-ppt, 5-text, 6-pdf, 7-dtalk, 99-other
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
      oprSelectRowMd5: '', // 当前选择data-md5
      setDialogStatus: false, // 设置dialog状态
      sendDialogStatus: false, // send-dialog状态(dtalk信息发送)
      deleteSource: 'notify-dtalk', // delete source
      deleteConfirm: false, // 删除确认dialog状态
      robotDialogStatus: false, // Robot配置dg状态
      dtalkTemplateFile: 'http://2lstore.pygo2.top/templates/钉钉消息通知模板V1.0.xls' // dtalk模板文件
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
      this.getTableList(1)
    })
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
    setTableRowStyle() { // table row style
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
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        notifyDtalkList(data).then(response => {
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
          notifyDtalkDelete(data).then(response => {
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
    }
  }
}
</script>

<style scoped>

</style>
