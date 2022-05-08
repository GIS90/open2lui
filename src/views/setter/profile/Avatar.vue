<template>
  <div>
    <el-button class="pan-btn yellow-btn avatar-btn" @click="openDialog">
      <i class="el-icon-upload" /> 上传头像
    </el-button>
    <!--上传头像dialog-->
    <image-cropper
      v-show="showDia"
      :key="imageIndex"
      :width="width"
      :height="height"
      :url="uploadUrl"
      :no-rotate="rotate"
      :no-circle="circle"
      :no-square="square"
      :max-size="maxSize"
      :params="params"
      lang-type="zh"
      @close="closeDialog"
      @crop-upload-success="uploadSuccess"
    />
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'

export default {
  name: 'Avatar',
  components: {
    'image-cropper': ImageCropper
  },
  emits: ['update-avatar'],
  props: {
    avatar: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      image: this.avatar,
      showDia: false,
      imageIndex: 0,
      width: 300,
      height: 300,
      uploadUrl: '', // 上传地址
      rotate: false, // 旋转
      circle: false, // 圆形图片预览
      square: false, // 方形图片预览
      maxSize: 3072, // 图片大小上线 3M
      params: { 'rtx_id': this.$store.getters.rtx_id }
    }
  },
  created() {
    this.uploadUrl = process.env.VUE_APP_AVATAR_API || '/user/avatar'
  },
  methods: {
    openDialog() {
      this.showDia = true
    },
    closeDialog() {
      this.showDia = false
    },
    uploadSuccess(respData) {
      const { avatar } = respData
      this.showDia = false
      this.imageIndex = this.imageIndex + 1
      this.image = avatar
      // 更新UserCard avatar
      this.$emit('update-avatar', avatar)
      // 更新Navbar avatar
      this.$store.commit('user/SET_AVATAR', avatar)
      this.$message({
        message: '头像更新成功',
        type: 'success',
        duration: 2 * 1000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-btn {
  padding: 13px 25px !important;
  //background-color: #0a76a4 !important;
}
.avatar{
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
