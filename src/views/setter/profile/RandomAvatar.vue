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
      随机头像
      <div>
        <viewer ref="viewer" class="viewer" :images="images" :option="viewerOption" @inited="inited">
          <template #default="scope">
            <img v-for="src in scope.images" :key="src" :src="src" style="width: 200px;height: 200px;">{{ scope.options }}
          </template>
        </viewer>
        <button type="button" @click="showViewer">Show</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import store from '@/store'
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from 'v-viewer'

export default {
  name: 'RandomAvatar',
  components: {
    'viewer': Viewer
  },
  emits: ['close-random-avatar'],
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
  inject: {},
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '隐藏功能',
        width: '55%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
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
      viewerOption: {
        toolbar: false
      },
      images: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F06%2F20190506144331_HzNai.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688567771&t=a2b094ba45810322dd07b2741f50581d',
        'https://up.enterdesk.com/edpic/8f/aa/16/8faa1679a1b494fe39f329cc3551b15c.jpg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F20%2F20200920233141_8676c.thumb.1000_0.webp&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688567938&t=7724e0a386a529898ffb8b24dcd47a71',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F12%2F20200812105950_4WFTF.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688567938&t=7ba61063927fff4ab4c0ccb92869e8a1',
        'https://up.enterdesk.com/edpic_source/31/8c/55/318c5586cf3a7a757684d9567fdbee66.jpg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F05%2F20210805211949_e77e4.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688567938&t=54a48e345d516a37039244750bf714ce',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F02%2F20200402223216_wctja.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688567998&t=8fe7266cf5e0084d5c896a66b64a508e'
      ]
    }
  },
  computed: {},
  watch: {
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    }
  },
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      // 初始化非全屏
      this.fullScreenStatus = false
    },
    closeDialog() { // 关闭dialog
      this.$emit('close-random-avatar', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    inited(viewer) {
      this.$viewer = viewer
    },
    showViewer() {
      this.$viewer.show()
    }
  },
  setup: {}
}
</script>

<style scoped>

</style>
