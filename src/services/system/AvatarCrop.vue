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
    <el-row class="avatar-image-preview" :gutter="20">
      <el-col :span="16">
        <img id="avatar-image" width="550px" :src="imageUrl">
      </el-col>
      <el-col :span="8">
        <!-- 预览 -->
        <div class="avatar-image-crop-preview">
          <el-divider><i class="el-icon-view">  预览</i></el-divider>
          <!--
          <img id="avatar-image-crop-preview-image" width="200px" :src="imageUrl">
          <div id="avatar-image-crop-preview-image"></div>
          -->
        </div>

        <!-- 操作 -->
        <div class="avatar-image-config">
          <el-divider><i class="el-icon-edit">  配置</i></el-divider>
          <el-input
            v-model="cropperConfig.scale"
            type="number"
            step="0.1"
            inputmode="decimal"
          >
            <template slot="prepend">缩放比例</template>
          </el-input>
          <el-input
            v-model="cropperConfig.angle"
            class="operation-line"
            type="number"
          >
            <template slot="prepend">旋转角度</template>
          </el-input>
          <el-input
            v-model="cropperConfig.x"
            class="operation-line"
            type="number"
          >
            <template slot="prepend">X偏移量</template>
            <template slot="append">PX</template>
          </el-input>
          <el-input
            v-model="cropperConfig.y"
            class="operation-line"
            type="number"
          >
            <template slot="prepend">Y偏移量</template>
            <template slot="append">PX</template>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row class="operation-group">
      <el-button-group>
        <!-- 放大 -->
        <el-tooltip class="item" effect="dark" content="放大" placement="bottom">
          <el-button plain type="primary" icon="el-icon-zoom-in" @click="zoom(cropperConfig.scale)" />
        </el-tooltip>
        <!-- 缩小 -->
        <el-tooltip class="item" effect="dark" content="缩小" placement="bottom">
          <el-button plain type="primary" icon="el-icon-zoom-out" @click="zoom(-1*cropperConfig.scale)" />
        </el-tooltip>
      </el-button-group>
      <el-button-group class="operation-group-box">
        <!-- 向左旋转 -->
        <el-tooltip class="item" effect="dark" content="向左旋转" placement="bottom">
          <el-button plain type="primary" icon="el-icon-refresh-left" @click="rotate(-1*cropperConfig.angle)" />
        </el-tooltip>
        <!-- 向右旋转 -->
        <el-tooltip class="item" effect="dark" content="向右旋转" placement="bottom">
          <el-button plain type="primary" icon="el-icon-refresh-right" @click="rotate(cropperConfig.angle)" />
        </el-tooltip>
      </el-button-group>
      <el-button-group class="operation-group-box">
        <!-- 左右翻转 -->
        <el-tooltip class="item" effect="dark" content="左右翻转" placement="bottom">
          <el-button plain type="primary" icon="el-icon-c-scale-to-original" @click="scaleX" />
        </el-tooltip>
        <!-- 上下翻转 -->
        <el-tooltip class="item" effect="dark" content="上下翻转" placement="bottom">
          <el-button plain type="primary" icon="el-icon-d-caret" @click="scaleY" />
        </el-tooltip>
      </el-button-group>
      <el-button-group class="operation-group-box">
        <!-- 左移动 -->
        <el-tooltip class="item" effect="dark" content="左移动" placement="bottom">
          <el-button plain type="primary" icon="el-icon-back" @click="move(-1*cropperConfig.x, 0)" />
        </el-tooltip>
        <!-- 右移动 -->
        <el-tooltip class="item" effect="dark" content="右移动" placement="bottom">
          <el-button plain type="primary" icon="el-icon-right" @click="move(cropperConfig.x, 0)" />
        </el-tooltip>
        <!-- 上移动 -->
        <el-tooltip class="item" effect="dark" content="上移动" placement="bottom">
          <el-button plain type="primary" icon="el-icon-top" @click="move(0, -1*cropperConfig.y)" />
        </el-tooltip>
        <!-- 下移动 -->
        <el-tooltip class="item" effect="dark" content="下移动" placement="bottom">
          <el-button plain type="primary" icon="el-icon-bottom" @click="move(0, cropperConfig.y)" />
        </el-tooltip>
      </el-button-group>
      <el-button-group class="operation-group-box">
        <!-- 锁定 -->
        <el-tooltip class="item" effect="dark" content="锁定" placement="bottom">
          <el-button plain type="primary" icon="el-icon-lock" @click="lock(true)" />
        </el-tooltip>
        <!-- 解锁 -->
        <el-tooltip class="item" effect="dark" content="解锁" placement="bottom">
          <el-button plain type="primary" icon="el-icon-unlock" @click="lock(false)" />
        </el-tooltip>
      </el-button-group>
    </el-row>

    <!--footer-->
    <template #footer>
      <span class="dialog-footer">
        <el-button :disabled="disabled" icon="el-icon-close" @click="closeDialog()">取消</el-button>
        <el-button :disabled="disabled" type="primary" icon="el-icon-refresh" @click="reset()">重置</el-button>
        <el-button :disabled="disabled" type="success" icon="el-icon-scissors" @click="crop()">裁剪</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import store from '@/store'
import { SystemAvatarDetail } from '@/api/system'

export default {
  name: 'AvatarCrop',
  components: {},
  extends: [],
  emits: ['close-crop-dg'],
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    rowMd5: {
      type: String,
      require: true,
      default: ''
    },
    imageUrl: {
      type: String,
      require: true,
      default: ''
    }
  },
  inject: {},
  data() {
    return {
      disabled: false, // 禁用组件
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '裁剪',
        width: '70%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '3%', // Dialog CSS 中的 margin-top 值
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
      imageObject: {
        name: '',
        url: '',
        orUrl: ''
      },
      cropper: null, // 定义cropper对象
      // cropper配置
      cropperOption: {
        viewMode: 1, // 显示模式：0-裁剪框不可移动 1-裁剪框可移动 2-裁剪框自由移动
        aspectRatio: 2 / 2, // 裁剪框宽高比例
        autoCropArea: 0.8, // 裁剪区域大小（相对于原始图片大小）
        movable: true, // 裁剪框是否可移动
        scalable: true, // 裁剪框是否可缩放图片（改变长宽）
        zoomable: true, // 裁剪框是否可缩放图片（改变聚焦）
        rotatable: true, // 裁剪框是否可翻转
        guides: true, // 是否显示裁剪框虚线
        background: true, // 是否显示背景网格
        cropBoxMovable: true, // 是否允许裁剪框推动
        cropBoxResizable: true, // 是否允许裁剪框缩放
        minCropBoxHeight: 200, // 裁剪框最小高度
        minCropBoxWidth: 200 // 裁剪框最小宽度
      },
      // 操纵配置
      cropperConfig: {
        scale: 0.1, // 缩放比例
        angle: 30, // 旋转角度
        x: 10, // X偏移量
        y: 10, // Y偏移量
        arrowX: 1,
        arrowY: 1
      }
    }
  },
  computed: {},
  watch: {
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    }
  },
  created() {
  },
  mounted() {},
  methods: {
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    closeDialog() { // 关闭dialog
      this.$emit('close-crop-dg', false)
    },
    openDialog() {
      // 销毁cropper对象
      if (this.cropper) {
        this.destroyCropper()
      }
      if (!this.rowMd5) {
        this.closeDialog()
      }
      // 初始化非全屏
      this.fullScreenStatus = false
      // 最新数据
      this.$nextTick(() => {
        // 重置表单状态
        this.getDetail()
      })
    },
    getDetail() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }

      return new Promise((resolve, reject) => {
        SystemAvatarDetail(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            // detail
            this.imageObject.name = data.detail.name
            this.imageObject.url = data.detail.url
            this.imageObject.orUrl = data.detail.or_url

            if (this.imageObject.url) {
              this.createCropper()
            }
          } else {
            this.$emit('close-view-dg', false)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // ---------------------------------------- cropper -----------------------------------------------
    // 创建
    createCropper() {
      const image = document.getElementById('avatar-image')
      this.cropper = new Cropper(image, this.cropperOption)
    },
    // 销毁
    destroyCropper() {
      this.cropper.destroy()
      // 重置变量
      this.cropper = null
    },
    // 裁剪
    crop() {
      if (this.cropper) {
        this.data = null
        this.cropper.clear()
        this.cropper.crop()

        // setTimeout(() => {
        //   this.cropper.disable()
        // }, 3000)
        // setTimeout(() => {
        //   this.cropper.enable()
        // }, 6000)

        // setTimeout(() => {
        //   this.cropper.destroy()
        // }, 3000)
      } else {
        this.$message.error('图片没有准备就绪')
      }
    },
    // 重置
    reset() {
      if (this.cropper) {
        this.cropper.clear()
        this.cropper.reset()
      } else {
        this.$message.error('图片没有准备就绪')
      }
    },
    // 移动底图
    move(x, y) {
      if (this.cropper) {
        this.cropper.move(x, y)
      } else {
        this.$message.error('图片没有准备就绪')
      }
    },
    // 缩放（放大缩小）
    zoom(ratio) {
      if (this.cropper) {
        this.cropper.zoom(ratio)
        // const containerData = this.cropper.getContainerData();
        // this.cropper.zoomTo(ratio, {
        //   x: containerData.width / 2,
        //   y: containerData.height / 2,
        // })
      } else {
        this.$message.error('图片没有准备就绪')
      }
    },
    // 旋转
    rotate(degree) {
      if (this.cropper) {
        this.cropper.rotate(degree)
      } else {
        this.$message.error('图片没有准备就绪')
      }
    },
    // 左右翻转
    scaleX() {
      if (this.cropper) {
        this.cropperConfig.arrowX = -1 * this.cropperConfig.arrowX
        this.cropper.scaleX(this.cropperConfig.arrowX)
      } else {
        this.$message.error('图片没有准备就绪')
      }
    },
    // 上下翻转
    scaleY() {
      if (this.cropper) {
        this.cropperConfig.arrowY = -1 * this.cropperConfig.arrowY
        this.cropper.scaleY(this.cropperConfig.arrowY)
      } else {
        this.$message.error('图片没有准备就绪')
      }
    },
    // 锁定
    lock(value) {
      if (this.cropper) {
        value ? this.cropper.disable() : this.cropper.enable()
      } else {
        this.$message.error('图片没有准备就绪')
      }
    }
    // ---------------------------------------- cropper -----------------------------------------------
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  },
  setup() {
  }
}
</script>

<style scoped>
.avatar-image-preview {
  text-align: center;
}

.avatar-image-crop-preview {
  width: 95%;
  margin-left: 5%;
}

#avatar-image-crop-preview-image{
  margin-top: 15px;
  width: 200px;
}

.operation-line {
  margin-top: 15px;
}

.operation-group {
  margin-top: 15px;
}

.operation-group-box {
  margin-left: 15px;
}

.avatar-image-config {
  width: 95%;
  margin-left: 5%;
}
</style>
