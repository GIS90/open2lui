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
      <!-- title -->
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
      <!-- content -->
      <div class="viewer-box">
        <!-- 图片 -->
        <viewer ref="viewer" :options="viewerOption" @inited="inited">
          <img v-for="img in images" :key="img.id" :src="img.url" class="viewer-box-image">
        </viewer>
        <!-- page分页 -->
        <el-pagination
          class="viewer-box-pagin"
          :current-page="pageCur"
          :total="pageTotal"
          :page-size="pageSize"
          :layout="pagAttrs.layout"
          :page-sizes="pagAttrs.pageSizes"
          :pager-count="pagAttrs.pagerCount"
          :small="pagAttrs.small"
          :background="pagAttrs.background"
          :disabled="pagAttrs.disabled"
          :prev-text="pagAttrs.prevText"
          :next-text="pagAttrs.nextText"
          :hide-on-single-page="pagAttrs.hosp"
          @pagin-size-change="paginSizeChange"
          @pagin-current-change="paginCurrentChange"
        />
      </div>

      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click="submit">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
// import store from '@/store'
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from 'v-viewer'
import { WindowBrowserPageSize } from '@/utils/index.js'

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
      // dialog attrs
      dialogAttrs: {
        title: '隐藏功能 > 随即头像',
        width: '65%', // Dialog 的宽度
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
      // pagination attrs
      pageCur: 1, // 当前page
      pageSize: 21, // 每页显示条目个数
      pageTotal: 0, // 总条数
      pagAttrs: {
        layout: 'total, sizes, prev, pager, next, jumper', // 组件布局
        background: true, // 是否为分页按钮添加背景色
        pageSizes: [21, 42, 105, 210, 420], // 每页显示个数选择器的选项设置*1, *2, *5, *10, *20
        pagerCount: 5, // 页码按钮的数量，当总页数超过该值时会折叠(大于等于 5 且小于等于 21 的奇数)
        hosp: false, // hide-on-single-page 只有一页时是否隐藏
        small: false, // 是否使用小型分页样式，默认false，可选值：true, false
        prevText: '<',
        nextText: '>',
        disabled: false
      },
      // v-viewer options
      viewerOption: {
        inline: false, // 线上模式（区域内展示，非全屏覆盖）
        title: false, // 图片名称
        button: true, // 关闭按钮
        toolbar: true, // 工具栏
        navbar: true, // 缩略图导航栏
        fullscreen: true, // 播放全屏
        loading: true, // 加载
        loop: true, // 循环浏览
        movable: true, // 拖动
        rotatable: true, // 旋转
        scalable: true, // 翻转
        toggleOnDblclick: true, // 双击还原大小
        transition: true, // 动画过渡
        keyboard: true, // 键盘操作
        focus: true, // 导航栏聚焦
        zoomable: true, // 缩放
        zoomOnTouch: true, // 触摸缩放
        zoomOnWheel: true, // 鼠标缩放
        tooltip: true, // 缩放百分比提示
        zoomRatio: 0.1, // 鼠标滚轮缩放比例
        maxZoomRatio: 10, // 鼠标滚轮缩放最大比例
        minZoomRatio: 0.1, // 鼠标滚轮缩放最小比例
        backdrop: true, // 预览modal背景
        interval: 2800 // 播放时间间隔

      },
      images: [
        { id: 1, url: 'http://2lstore.pygo2.top/avatars/1a02dfe1808eaadc5e9c8d70f5733daa.jpeg' },
        { id: 2, url: 'http://2lstore.pygo2.top/avatars/2fbdcfae592accd03f6c0170b288e985.jpeg' },
        { id: 3, url: 'http://2lstore.pygo2.top/avatars/3c87f0f3cc5af848c32d80ca05f24542.jpeg' },
        { id: 4, url: 'http://2lstore.pygo2.top/avatars/4f6162b0284b95fa699e17f8e6f5929d.jpeg' },
        { id: 5, url: 'http://2lstore.pygo2.top/avatars/5d9b1e6862029fce98b342e2a1b727be.jpeg' },
        { id: 6, url: 'http://2lstore.pygo2.top/avatars/f6203911630ee1b04db542c02629b25b.jpeg' },
        { id: 7, url: 'http://2lstore.pygo2.top/avatars/4336fa14f3f2a6c075395fad6d631611.jpeg' },
        { id: 8, url: 'http://2lstore.pygo2.top/avatars/b7cbcdc96f20fdf497c4d3d4f5a0dbc2.jpeg' },
        { id: 9, url: 'http://2lstore.pygo2.top/avatars/c933509f3fcc721e6f8e8612f7ec8725.jpeg' },
        { id: 10, url: 'http://2lstore.pygo2.top/avatars/cf54984fcab697eed7df219d5128cda0.jpeg' },
        { id: 11, url: 'http://2lstore.pygo2.top/avatars/d65d529de6fb7a186d07e3920767307a.jpeg' },
        { id: 12, url: 'http://2lstore.pygo2.top/avatars/e3471b6c8b2806548eae9d4b4a22d596.jpeg' },
        { id: 13, url: 'http://2lstore.pygo2.top/avatars/f0cfc6c28eb2cee49f3c65130c28868e.jpeg' },
        { id: 14, url: 'http://2lstore.pygo2.top/avatars/f71b2efcb9b12fc50d4fe91174291430.jpeg' },
        { id: 15, url: 'http://2lstore.pygo2.top/avatars/4336fa14f3f2a6c075395fad6d631611.jpeg' },
        { id: 16, url: 'http://2lstore.pygo2.top/avatars/b7cbcdc96f20fdf497c4d3d4f5a0dbc2.jpeg' },
        { id: 17, url: 'http://2lstore.pygo2.top/avatars/c933509f3fcc721e6f8e8612f7ec8725.jpeg' },
        { id: 18, url: 'http://2lstore.pygo2.top/avatars/cf54984fcab697eed7df219d5128cda0.jpeg' },
        { id: 19, url: 'http://2lstore.pygo2.top/avatars/d65d529de6fb7a186d07e3920767307a.jpeg' },
        { id: 20, url: 'http://2lstore.pygo2.top/avatars/e3471b6c8b2806548eae9d4b4a22d596.jpeg' },
        { id: 21, url: 'http://2lstore.pygo2.top/avatars/f0cfc6c28eb2cee49f3c65130c28868e.jpeg' }
      ],
      browserWidth: 0,
      browserHeight: 0
    }
  },
  computed: {
    watchBrowserSize: () => {
      const browserSize = this.browserWidth + this.browserHeight
      this.reCalImageCount(browserSize)
    }
  },
  watch: {
    // 监控浏览器宽度变化
    browserWidth(newVal, oldVal) {
      // this.reCalImageCount()
    },
    // 监控浏览器高度变化
    browserHeight(newVal, oldVal) {
      // this.reCalImageCount()
    },
    // 监控是否全屏
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    }
  },
  created() {},
  mounted() {
    const [width, height] = WindowBrowserPageSize()
    this.browserWidth = width
    this.browserHeight = height
    this.reCalImageCount()
  },
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
    getDataList() { // 数据获取

    },
    inited(viewer) {
      this.$refs.viewer = viewer
    },
    showViewer() { // 展示浏览图片
      this.$viewer.show()
    },
    submit() { // 提交

    },
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getDataList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getDataList()
    },
    reCalImageCount(size) { // 重新计算一行图片展示的个数，以及展示的行数
      // 图片宽度：132 = 120（图片宽度）+ margin-left（6px）+margin-right（6px）
      console.log(this.browserWidth, this.browserHeight)
      console.log(this.browserWidth * 0.65 / 162)
      const imageRow = parseInt(this.browserWidth * 0.65 / 132) > 0 ? parseInt(this.browserWidth * 0.65 / 132) : 1
      // 图片高度：130 = 120（图片宽度）+ margin-top（5px）+margin-bottom（5px）
      const imageCol = parseInt((this.browserHeight - 200) / 130) > 0 ? parseInt((this.browserHeight - 200) / 130) : 1
      this.pageSize = imageRow * imageCol
      this.pagAttrs.pageSizes = [
        this.pageSize, this.pageSize * 2, this.pageSize * 5, this.pageSize * 10, this.pageSize * 20
      ]
    }
  },
  setup: {}
}
</script>

<style scoped>
.viewer-box {
  text-align: center;
}

.viewer-box-image {
  width: 120px;
  height: 120px;
  margin: 5px 6px 5px 6px;
  transition: transform .4s ease-in-out;
  /* transition-property: none| all | property >>> all表示所有属性都有过渡效果，property定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔 */
  /* transition-duration: time值； >>> 默认是0 没有动画效果，以秒或者毫秒计 */
  /* transition-timing-function:linear|ease|ease-in|ease-out|ease-in-out >>> 动画效果[https://easings.net/] */
  /* transition-delay >>> 延迟执行的时间 */
  transform-origin: center center; /* 中心点 */
}

.viewer-box-image:hover {
  transform: scale(1.2) rotate(360deg); /* 缩放+旋转 */
  /*transform: translate(10px, 10px);  !* 平移translateX, translateY *!*/
  /*transform: rotate(360deg);  !* 旋转 *!*/
  /*transform: scale(1.2);  !* 缩放 *!*/
  /*transform: skew(90deg, 10deg);  !* 扭曲skewX, skewY *!*/
}

.viewer-box-pagin {
  margin-top: 20px;
}
</style>
