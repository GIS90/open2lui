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
    @open="openDialog()"
    @close="closeDialog()"
  >
    <el-row v-show="selectCount >= 15">
      <el-alert title="菜单快捷入口最多选择15个，已达上限" type="error" effect="light" style="margin-bottom: 25px" />
    </el-row>
    <el-row :gutter="24" class="board">
      <el-col :span="12" class="board-column">
        <!-- 标题 -->
        <div class="board-column-header board-column-header-left">
          未选 {{ unselectList.length }}
        </div>
        <!-- 内容 -->
        <draggable v-model="unselectList" tag="div" :group="dragGroupUnSelect" :animation="dragAnimation" class="board-column-content" @start="start($event,'unselect')" @change="change">
          <div v-for="item in unselectList" :key="item.id" class="board-column-content-item">
            {{ item.name }}
          </div>
        </draggable>
      </el-col>
      <el-col :span="12" class="board-column">
        <!-- 标题 -->
        <div class="board-column-header board-column-header-right">
          已选 {{ selectList.length }}
        </div>
        <!-- 内容 -->
        <draggable v-model="selectList" tag="div" :group="dragGroupSelect" :animation="dragAnimation" class="board-column-content" @start="start($event,'select')" @change="change">
          <div v-for="item in selectList" :key="item.id" class="board-column-content-item">
            {{ item.name }}
          </div>
        </draggable>
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
import draggable from 'vuedraggable'
import store from '@/store'
import { DashboardShortCutEditSave, DashboardShortCutEditList } from '@/api/dashboard'

export default {
  name: 'ShortCutEdit',
  emits: [
    'close-edit'
  ],
  components: {
    draggable: draggable
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
        showClose: true, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      // vuedraggable group参数：https://www.itxst.com/vue-draggable/tutorial.html
      dragGroupUnSelect: {
        name: 'menu', // 群组名称，相同的组之间可以相互拖拽
        // pull: 'clone', // 拖拽是否为复制数据：true, false, 'clone', array , function
        put: true // 是否允许拖拽：true, false, array , function
      },
      dragGroupSelect: {
        name: 'menu', // 群组名称，相同的组之间可以相互拖拽
        // pull: 'clone', // 拖拽是否为复制数据：true, false, 'clone', array , function
        put: true // 是否允许拖拽：true, false, array , function
      },
      dragSort: true, // 是否开启内部排序
      dragAnimation: 1500, // 拖动时的动画效果
      // 未选择列表
      unselectList: [],
      // 已选择列表
      selectList: [],
      selectCount: 0, // 选择的个数，最大15个【2行】，最后一个编辑功能
      banDrag: false // 是否允许进行拖拽
    }
  },
  computed: {},
  watch: {
    selectCount(newVal, oldVal) {
      // selectList最大上限15
      // 等于15，selectList不允许拖拽
      newVal >= 15 ? this.dragGroupSelect.put = false : this.dragGroupSelect.put = true
    }
  },
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      this.initData()
    },
    closeDialog() { // 关闭dialog
      this.$emit('close-edit', false)
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
    // vuedraggable method: start, add, remove, update, end, choose, unchoose, sort, filter, clone
    start(event, type) {
      if (this.selectCount >= 15 && type === 'unselect') {
        // 停止message提示，启用alert组件提示
        // this.$message({
        //   message: '菜单快捷入口最多选择15个，已达上限',
        //   type: 'warning',
        //   duration: 2.0 * 1000
        // })
        this.dragGroupSelect.put = false
      }
      return true
    },
    change(event) {
      this.selectCount = this.selectList.length
    },
    submit() {
      // TODO 可以设置空
      // if (this.selectCount < 1) {
      //   this.$message({
      //     message: '请设置快捷入口功能',
      //     type: 'warning',
      //     duration: 2.0 * 1000
      //   })
      // }
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
      this.dragGroupSelect.put = false // 不允许拖拽
      return new Promise((resolve, reject) => {
        DashboardShortCutEditSave(data).then(response => {
          this.disabled = false
          this.loading = false
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
          this.disabled = false
          this.loading = false
          reject(error)
        })
      })
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
  border-radius: 3px;

  .board-column-header {
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 10px 10px 0 0;
  }

  .board-column-header-left {
    background-color: #FCE38A;
    border-radius: 5px 0 0 0;
  }

  .board-column-header-right {
    background-color: #08D9D6;
    border-radius: 0 5px 0 0;
  }

  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    .board-column-content-item {
      font-size: 13px;
      cursor: pointer;
      width: 100%;
      height: 42px;
      //margin: 0 0 0 15px;
      background-color: #fff;
      text-align: left;
      line-height: 40px;
      padding: 2px 15px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

