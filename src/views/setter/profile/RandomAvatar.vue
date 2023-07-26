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
        <viewer ref="viewer" :options="viewerOption" :images="images" @inited="viewerInited">
          <img v-for="(img, index) in images" :id="img.md5_id" :ref="img.md5_id" :key="index" :src="img.url" class="viewer-box-image" @click="selectViewerImage(index)">
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
          @size-change="paginSizeChange"
          @current-change="paginCurrentChange"
        />
      </div>

      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" type="primary" plain @click="viewerPlay">开始浏览</el-button>
          <el-button :disabled="disabled" type="danger" @click="clearSelectViewer">清空选择</el-button>
          <el-button :disabled="disabled" :loading="loading" type="success" @click="submit">设置</el-button>
          <el-button :disabled="disabled" @click="closeDialog">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
// import store from '@/store'
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from 'v-viewer'
import { WindowBrowserInnerSize } from '@/utils/index.js'
import store from '@/store'
import { ImageProfileAvatarList, ImageProfileAvatarSet } from '@/api/image'

export default {
  name: 'RandomAvatar',
  components: {
    'viewer': Viewer
  },
  emits: ['close-random-avatar', 'update-avatar'],
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
        title: '隐藏功能 > 随机头像',
        width: '68%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '5%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: false, // 是否可以通过按下 ESC 关闭 Dialog
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
      viewer: '', // viewer对象
      viewerOption: {
        inline: false, // 线上模式（区域内展示，非全屏覆盖）
        title: false, // 图片名称
        button: true, // 关闭按钮
        // toolbar: true, // 工具栏
        toolbar: { // 工具栏（boolean | Visibility(0 | 1 | 2 | 3 | 4) | ToolbarButtonSize('small' | 'medium' | 'large') | Function | ToolbarButtonOptions | undefined;）
          zoomIn: 'large', // 缩小
          zoomOut: 'large', // 放大
          oneToOne: 'large', // 100%
          prev: 'large', // 上一个
          play: 'large', // 播放
          next: 'large', // 下一个
          rotateLeft: 'large', // 左旋转
          rotateRight: 'large', // 右旋转
          flipHorizontal: 'large', // 水平翻转
          flipVertical: 'large', // 垂直翻转
          reset: 'large', // 重置
          // 自定义按钮: 下载
          download: {
            click: function(event, e2) {
              console.log(event)
              console.log(e2)
            },
            show: false,
            size: 'large'
          }
        },
        navbar: true, // 缩略图导航栏
        fullscreen: true, // 播放全屏
        loading: true, // 加载
        loop: true, // 循环浏览
        movable: true, // 拖动【toolbar】
        rotatable: true, // 旋转【toolbar】
        scalable: true, // 翻转【toolbar】
        toggleOnDblclick: true, // 双击还原大小
        transition: true, // 动画过渡
        keyboard: true, // 键盘操作
        focus: true, // 导航栏聚焦
        zoomable: true, // 缩放【toolbar】
        zoomOnTouch: true, // 触摸缩放
        zoomOnWheel: true, // 鼠标缩放
        tooltip: true, // 缩放百分比提示
        zoomRatio: 0.1, // 鼠标滚轮缩放比例
        maxZoomRatio: 10, // 鼠标滚轮缩放最大比例
        minZoomRatio: 0.1, // 鼠标滚轮缩放最小比例
        backdrop: true, // 预览modal背景
        interval: 2800, // 播放时间间隔
        zIndex: 9999,
        view: function() { // 图片查看事件
        }
      },
      curImage: '', // 当前选择的图片MD5
      images: [] // 头像Array
      // images: [
      //   { id: 1, md5_id: 100, url: 'http://2lstore.pygo2.top/avatars/1a02dfe1808eaadc5e9c8d70f5733daa.jpeg' },
      //   { id: 2, md5_id: 200, url: 'http://2lstore.pygo2.top/avatars/d65d529de6fb7a186d07e3920767307a.jpeg' },
      //   { id: 3, md5_id: 300, url: 'http://2lstore.pygo2.top/avatars/c933509f3fcc721e6f8e8612f7ec8725.jpeg' },
      //   { id: 4, md5_id: 400, url: 'http://2lstore.pygo2.top/avatars/4336fa14f3f2a6c075395fad6d631611.jpeg' }
      // ]
    }
  },
  computed: {},
  watch: {
    // 监控是否全屏
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
      // 是否全屏触发重新渲染
      this.reCalImageCount()
    }
  },
  created() {
    this.$nextTick(() => {
      this.getDataList()
    })
  },
  mounted() {
    // mount初始化宽度、高度
    this.reCalImageCount()

    // 监控浏览器宽度、高度变化【不建议开启实时监听，否则造成API请求频繁】
    /*
    window.onresize = () => {
      this.reCalImageCount()
    }
    */
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
      // 组件禁用
      this.disabled = true

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 21,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }

      return new Promise((resolve, reject) => {
        ImageProfileAvatarList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.images = data.list
            this.pageTotal = data.total
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          this.disabled = false
        })
      })
    },
    viewerInited(viewer) {
      // 初始化viewer对象
      // this.$viewer = viewer
      if (viewer) {
        this.viewer = viewer
      }
    },
    viewerPlay() { // 浏览图片
      console.log(this.viewer)
      if (this.viewer) {
        // 设置从0开始
        this.viewer.index = 0
        setTimeout(() => {
          this.viewer.show()
        }, 250)
      }
    },
    selectViewerImage(selectIndex) {
      if (this.images && selectIndex >= 0) {
        this.images.forEach((item, index) => {
          // 清空image选择样式
          // document.getElementById(item.md5_id).classList.remove('viewer-select-image')
          this.$refs[item.md5_id][0].classList.remove('viewer-select-image') // ref动态变量[0]

          if (index === selectIndex) {
            // 当前选择image-md5
            this.curImage = item.md5_id
            // 当前被选择查看的image的样式
            // document.getElementById(item.md5_id).classList.add('viewer-select-image')
            this.$refs[item.md5_id][0].classList.add('viewer-select-image')
          }
        })
      }
    },
    clearSelectViewer() {
      if (this.curImage) {
        this.$refs[this.curImage][0].classList.remove('viewer-select-image')
        this.curImage = ''
      } else {
        this.$notify({
          title: '警告', // 标题
          type: 'warning', // 类型：success/warning/info/error
          message: '无选择头像', // 消息
          duration: 2000, // 显示时间(毫秒)
          // offset: 300, // 偏移量
          position: 'top-right', // 位置：top-right/top-left/bottom-right/bottom-left
          showClose: false // 是否显示关闭按钮
        })
      }
    },
    submit() { // 提交
      // check
      if (!this.curImage) {
        this.$message({
          message: '请选择喜欢的头像',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      // 组件禁用
      this.disabled = true
      this.loading = true

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'avatar': this.curImage
      }

      return new Promise((resolve, reject) => {
        ImageProfileAvatarSet(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            // 更新UserCard avatar
            this.$emit('update-avatar', data.avatar)
            // 更新Navbar avatar
            this.$store.commit('user/SET_AVATAR', data.avatar)
            this.$message({
              message: '设置成功',
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          this.disabled = false
          this.loading = false
        })
      })
    },
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getDataList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getDataList()
    },
    reCalImageCount() { // 重新计算一行图片展示的个数，以及展示的行数
      // 浏览器的高度、宽度
      // const [width, height] = this.fullScreenStatus ? WindowBrowserInnerSize() : WindowBrowserPageSize
      const [width, height] = WindowBrowserInnerSize()
      // console.log('=============>resize: ', width, height)

      // 图片宽度：132 = 120（图片宽度）+ margin-left（9px）+margin-right（9px）
      // modal宽度占比比例：0.65为modal，1为全屏
      const ratioWidth = this.fullScreenStatus ? 1 : 0.68
      const imageRow = parseInt(width * ratioWidth / 139) > 1 ? parseInt(width * ratioWidth / 139) : 1
      // 图片高度：130 = 120（图片宽度）+ margin-top（7px）+margin-bottom（7px）
      // extraHeight  = modal header + modal footer + modal距离底部的距离
      const extraHeight = this.fullScreenStatus ? 200 : 450
      const imageCol = parseInt((height - extraHeight) / 134) > 1 ? parseInt((height - extraHeight) / 134) : 1
      this.pageSize = imageRow * imageCol
      this.pagAttrs.pageSizes = [
        this.pageSize, this.pageSize * 2, this.pageSize * 5, this.pageSize * 10, this.pageSize * 20
      ]

      // 重新加载图片
      this.getDataList()
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
  /*border: 3px solid blue;*/
  border-radius: 5px;
  width: 120px;
  height: 120px;
  margin: 7px 9px 7px 9px;
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

.viewer-select-image {
  border: 7px double red;
  border-image: linear-gradient(to right, #FFFF00FF, #FF0000FF) 1;
}

.viewer-box-pagin {
  margin-top: 20px;
}
</style>
