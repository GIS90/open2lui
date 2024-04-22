<template>
  <el-dialog
    :visible="show"
    :title="dialogAttrs.title"
    :width="dialogAttrs.width"
    :fullscreen="dialogAttrs.fullScreen"
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
    @close="cancelDelete"
  >
    <span class="dialog-text">确认删除选择的数据吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button :disabled="btnDisabled" @click="cancelDelete">取消</el-button>
      <el-button :disabled="btnDisabled" :loading="btnLoading" type="primary" @click="confirmDelete">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import store from '@/store'
import { SystemDictDeletes, SystemApiDeletes, SystemAvatarDeletes } from '@/api/system'
import { notifyDtalkDeletes, notifyDtalkRobotDeletes, notifyQywxDeletes, notifyQywxRobotDeletes } from '@/api/notify'
import { searchSqlbaseDeletes } from '@/api/search'
import { officeExcelResultDeletes, officeExcelSourceDeletes, officePDFDeletes } from '@/api/office'

export default {
  name: 'BatchDelete',
  emits: ['close-delete-dialog'],
  components: {},
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    list: {
      type: Array,
      require: true,
      default: function() {}
    },
    source: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      dialogAttrs: {
        title: '提示',
        width: '30%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: true, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      btnDisabled: false,
      btnLoading: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    cancelDelete() { // 关闭dg
      this.$emit('close-delete-dialog', false)
    },
    confirmDelete() { // 确认删除
      if (this.list.length === 0) {
        this.$message({
          message: '请选择删除的数据',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      // 无删除source
      if (!this.source) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'list': this.list
      }
      this.btnDisabled = true
      this.btnLoading = true
      if (this.source === 'notify-dtalk') {
        // 消息通知 > 钉钉绩效
        this.deleteNotifyDtalk(data)
      } else if (this.source === 'notify-dtalk-robot') {
        // 消息通知 > 钉钉绩效 > 钉钉绩效机器人
        this.deleteNotifyDtalkRobot(data)
      } else if (this.source === 'notify-qywx') {
        // 消息通知 > 企微通知
        this.deleteNotifyQywx(data)
      } else if (this.source === 'notify-qywx-robot') {
        // 消息通知 > 企微通知 > 企微通知机器人
        this.deleteNotifyQywxRobot(data)
      } else if (this.source === 'system-dict') {
        // 系统维护 > 数据字典
        this.deleteSystemDict(data)
      } else if (this.source === 'system-avatar') {
        // 系统维护 > 头像管理
        this.deleteSystemAvatar(data)
      } else if (this.source === 'system-api') {
        // 系统维护 > 后台API
        this.deleteSystemApi(data)
      } else if (this.source === 'search-sqlbase') {
        // 知识平台 > SQL仓库
        this.deleteSearchSqlbase(data)
      } else if (this.source === 'office-excel-source') {
        // 文档工具 > 表格合并 && 表格拆分
        this.deleteOfficeExcelSource(data)
      } else if (this.source === 'office-excel-result') {
        // 文档工具 > 表格历史
        this.deleteOfficeExcelResult(data)
      } else if (this.source === 'office-pdf') {
        // 文档工具 > PDF转WORD
        this.deleteOfficePDF2WORD(data)
      } else {
        return false
      }
    },
    // notify > dtalk
    deleteNotifyDtalk(data) {
      return new Promise((resolve, reject) => {
        notifyDtalkDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // notify > dtalk robot
    deleteNotifyDtalkRobot(data) {
      return new Promise((resolve, reject) => {
        notifyDtalkRobotDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // notify > qywx
    deleteNotifyQywx(data) {
      return new Promise((resolve, reject) => {
        notifyQywxDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // notify > qywx robot
    deleteNotifyQywxRobot(data) {
      return new Promise((resolve, reject) => {
        notifyQywxRobotDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // system > dict
    deleteSystemDict(data) {
      return new Promise((resolve, reject) => {
        SystemDictDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // system > avatar
    deleteSystemAvatar(data) {
      return new Promise((resolve, reject) => {
        SystemAvatarDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // system > api
    deleteSystemApi(data) {
      return new Promise((resolve, reject) => {
        SystemApiDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // search > sqlbase
    deleteSearchSqlbase(data) {
      return new Promise((resolve, reject) => {
        searchSqlbaseDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // office > excel-source
    deleteOfficeExcelSource(data) {
      return new Promise((resolve, reject) => {
        officeExcelSourceDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // office > excel-result
    deleteOfficeExcelResult(data) {
      return new Promise((resolve, reject) => {
        officeExcelResultDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    },
    // search > pdf-2-word
    deleteOfficePDF2WORD(data) {
      return new Promise((resolve, reject) => {
        officePDFDeletes(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.$emit('close-delete-dialog', true)
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
          this.btnLoading = false
        })
      })
    }
  }
}
</script>

<style scoped>
.dialog-text {
  font-size: 18px;
  font-weight: bold;
  color: red;
}
</style>
