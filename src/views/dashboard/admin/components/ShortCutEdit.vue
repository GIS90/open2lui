<template>
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
    <!--content-->
    <el-row v-show="selectCount >= maxSelectCount">
      <el-alert title="菜单快捷入口最多选择15个，已达上限" type="error" effect="light" style="margin-bottom: 25px" />
    </el-row>
    <!-- 已选择 -->
    <el-row :gutter="rowAttrs.gutter" class="board">
      <div class="board-column">
        <!-- 标题 -->
        <div class="board-column-header board-column-header-left">
          未选功能 {{ unselectList.length }}
        </div>
        <!-- 内容 -->
        <drag-container
          :group-name="dragAttrs.groupName"
          :orientation="dragAttrs.orient"
          :behaviour="dragAttrs.behaviour"
          :drag-begin-delay="dragAttrs.dragBeginDelay"
          :animation-duration="dragAttrs.animationDuration"
          :auto-scroll-enabled="dragAttrs.autoScrollEnabled"
          :drag-class="dragClass.dragClassUnSelect"
          :drop-class="dragClass.dropClassUnSelect"
          :get-child-payload="getChildPayloadUnSelect"
          @drop="drop('unselect', $event)"
        >
          <drag-draggable v-for="item in unselectList" :key="item.id">
            <el-tooltip :content="item.name" placement="top" effect="dark">
              <div class="card-box-icon-wrapper">
                <svg-icon :icon-class="item.icon" class-name="card-box-icon" />
              </div>
            </el-tooltip>
          </drag-draggable>
        </drag-container>
      </div>
    </el-row>
    <!-- 为选择 -->
    <el-row :gutter="rowAttrs.gutter" class="board">
      <el-col class="board-column">
        <!-- 标题 -->
        <div class="board-column-header board-column-header-right">
          已选功能 {{ selectList.length }}
        </div>
        <!-- 内容 -->
        <drag-container
          :group-name="dragAttrs.groupName"
          :orientation="dragAttrs.orient"
          :behaviour="dragAttrs.behaviour"
          :drag-begin-delay="dragAttrs.dragBeginDelay"
          :animation-duration="dragAttrs.animationDuration"
          :auto-scroll-enabled="dragAttrs.autoScrollEnabled"
          :drag-class="dragClass.dragClassSelect"
          :drop-class="dragClass.dropClassSelect"
          :get-child-payload="getChildPayloadSelect"
          @drop="drop('select', $event)"
        >
          <drag-draggable v-for="item in selectList" :key="item.id">
            <el-tooltip :content="item.name" placement="top" effect="dark">
              <div class="card-box-icon-wrapper">
                <svg-icon :icon-class="item.icon" class-name="card-box-icon" />
              </div>
            </el-tooltip>
          </drag-draggable>
        </drag-container>
      </el-col>
    </el-row>
    <!--footer-->
    <template #footer>
      <span class="dialog-footer">
        <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
        <el-button :disabled="disabled" :loading="loading" type="primary" @click="submit()">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import store from '@/store'
import { DashboardShortCutEditSave, DashboardShortCutEditList } from '@/api/dashboard'

export default {
  name: 'ShortCutEdit',
  emits: [
    'close-edit'
  ],
  components: {
    'drag-container': Container,
    'drag-draggable': Draggable
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
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      // dialog attrs
      dialogAttrs: {
        title: '编辑',
        width: '55%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '5%', // Dialog CSS 中的 margin-top 值
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
      rowAttrs: {
        gutter: 0, // 栅格间隔
        type: 'flex', // 布局模式，可选 flex
        justify: 'center', // flex 布局下的水平排列方式：start/end/center/space-around/space-between，默认start
        align: 'middle' // flex 布局下的垂直排列方式：top/middle/bottom，默认top
      },
      colAttrs: {
        span: 24, // 栅格占据的列数
        offset: 0, // 栅格左侧的间隔格数
        push: 0, // 栅格向右移动格数
        pull: 0 // 栅格向左移动格数
      },
      // vue-smooth-dnd: https://github.com/kutlugsahin/vue-smooth-dnd
      // vue-smooth-dnd demo: https://kutlugsahin.github.io/vue-smooth-dnd/#/cards
      dragAttrs: { // Drag属性配置
        groupName: 'short-cut-menu-edit', // 组名：组名相同可以相互操作
        orient: 'horizontal', // 方式：horizontal水平 vertical垂直
        behaviour: 'move', // 行为模式：move or copy or drop-zone or contain
        lockAxis: '', // 移动的轴：x, y or undefined
        dragBeginDelay: 0, // 开始操作的延迟时间
        animationDuration: 250, // 动画持续时间
        autoScrollEnabled: true // 是否Scroll
      },
      dragClass: { // Drag class样式
        dragClassSelect: '', // select drag样式
        dragClassUnSelect: '', // unselect drag样式
        dropClassSelect: '', // select drop样式
        dropClassUnSelect: '' // unselect drop样式
      },
      unselectList: [], // 未选择列表
      selectList: [], // 已选择列表
      maxSelectCount: 15, // 最大功能选择个数
      selectCount: 0, // 选择的个数，最大15个【2行】，最后一个编辑功能
      banDrag: false // 是否允许进行拖拽
    }
  },
  computed: {},
  watch: {
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    },
    selectCount(newVal, oldVal) {
      // selectList最大上限15
      // 等于15，selectList不允许拖拽
      newVal >= this.maxSelectCount ? this.banDrag = false : this.banDrag = true
    }
  },
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      // 初始化非全屏
      this.fullScreenStatus = false
      this.initData()
    },
    closeDialog() { // 关闭dialog
      this.$emit('close-edit', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    initData() {
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        DashboardShortCutEditList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.unselectList = data.unselect
            this.selectList = data.select
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submit() {
      const ids = this.selectList.map((value, index) => {
        return value.id.toString()
      })
      const data = {
        'rtx_id': store.getters.rtx_id,
        'select': ids
      }
      // 启动禁用按钮
      this.disabled = true
      this.loading = true
      // this.dragGroupSelect.put = false // 不允许拖拽
      return new Promise((resolve, reject) => {
        DashboardShortCutEditSave(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '设置成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-edit', true)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.disabled = false
          this.loading = false
        })
      })
    },
    getChildPayloadUnSelect(index) {
      return this.unselectList[index]
    },
    getChildPayloadSelect(index) {
      return this.selectList[index]
    },
    drop(type, dropResult) {
      // 拖拽成功会触发2次drag：remove->add
      // const { removedIndex, addedIndex, payload, element } = dropResult
      if (type === 'select') {
        this.selectList = this.applyDrag(this.selectList, dropResult)
      } else {
        this.unselectList = this.applyDrag(this.unselectList, dropResult)
      }
    },
    dragStart(dragResult) {
      // const { isSource, payload, willAcceptDrop } = dragResult
    },
    dragEnd(dragResult) {
      // const { isSource, payload, willAcceptDrop } = dragResult
    },
    // 可选方法: Enter Leave Ready
    dragEnter() {},
    dragLeave() {},
    dragReady() {},
    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult
      if (removedIndex === null && addedIndex === null) return arr

      const result = [...arr]
      let itemToAdd = payload
      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
  width: 100%;
  margin: 0 !important;
  //width: 1000px;
  //display: flex;
  //justify-content: space-around;
  //flex-direction: row;
  //align-items: flex-start;
}

.board-column {
  padding: 0 !important;
  min-width: 300px;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  //border-radius: 3px;
}

// 标题样式
.board-column-header {
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  background-color: #333;
  //border-radius: 10px 10px 0 0;
}

.board-column-header-left {
  background-color: #FCE38A;
}

.board-column-header-right {
  background-color: #08D9D6;
}

// 图标框div
.card-box-icon-wrapper {
  float: left;
  margin: 25px 25px 25px 25px;
  padding: 14px;
  transition: all 0.38s ease-out;
  border-radius: 16px;
  color: #00ADB5;
  &:hover {
    color: #fff; // hover图标背景色
    background: #F38181; // F38181 00ADB5 34bfa3 编辑hover图标框div背景色
  }
}

// Svg图标样式
.card-box-icon {
  font-size: 28px;
  //float: left;
}
</style>

