<template>
  <div>
    <el-upload
      ref="uploadRef"
      :action="uploadApis.url"
      :accept="uploadApis.accept"
      :file-list="fileList"
      :headers="uploadApis.headers"
      :method="uploadApis.method"
      :data="uploadApis.data"
      :name="uploadApis.name"
      :with-credentials="uploadApis.cookie"
      :show-file-list="uploadAttrs.showFileList"
      :list-type="uploadAttrs.listType"
      :auto-upload="uploadAttrs.autoUpload"
      :limit="uploadAttrs.limit"
      :drag="uploadAttrs.drag"
      :multiple="uploadAttrs.multiple"
      :disabled="uploadAttrs.disabled"
      :on-success="uploadSuccess"
      :on-remove="uploadRemove"
      :on-change="uploadChange"
      :on-exceed="uploadExceed"
      :before-upload="beforeUpload"
    >
      <el-button slot="trigger" size="medium" type="info" :disabled="uploadBtnAttrs.disabled">选择</el-button>
      <el-button v-show="fileList.length>0" class="btn-margin" size="medium" type="primary" :disabled="uploadBtnAttrs.disabled" :loading="uploadBtnAttrs.loading" @click.prevent="submitUpload">
        上传
      </el-button>
      <div slot="tip" class="el-upload__tip">
        <!-- 提示说明 支持html显示-->
        <div v-html="tips" />
        <div>切换不同文件类型，需要重新上传附件。</div>
      </div>
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import store from '@/store'
import { qywxUploadTempFile } from '@/api/notify'

export default {
  name: 'QywxUpload',
  components: {},
  emits: ['file-upload-success'],
  props: {
    robot: {
      type: String,
      require: true,
      default: ''
    },
    type: {
      type: String,
      require: true,
      default: ''
    }
  },
  inject: {},
  data() {
    return {
      selectType: this.type,
      tips: '',
      fileList: [], // 文件列表
      isManualUpload: true, // 是否手动上传，值为false：upload组件自带的每次只上传一个，多文件为循环上传
      uploadApis: {
        url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_UPLOAD_QYWX_TEMP_API || '', // 使用组件自带上传功能URL，默认为空，动态配置文件中获取
        accept: '*', // 上传文件的类型
        headers: { // 设置请求上传的请求头部，token验证
          'Access-Control-Allow-Origin': '*',
          'X-Token': getToken(),
          'X-Rtx-Id': store.getters.rtx_id
        },
        method: 'POST', // 设置上传请求方法
        data: { // 上传时附带的额外参数
          'rtx_id': store.getters.rtx_id,
          'type': this.type,
          'robot': this.robot
        },
        name: 'files', // 上传的文件字段名，后台API用
        cookie: true // 发送 cookie 凭证信息
      },
      uploadAttrs: {
        multiple: false, // 是否支持多选文件
        showFileList: true, // 是否显示已上传文件列表
        drag: false, // 是否启用拖拽上传
        listType: 'text', // 文件列表的类型 "text" | "picture" | "picture-card"
        autoUpload: false, // 是否自动上传文件
        limit: 1, // 允许上传文件的最大数量
        disabled: false
      },
      // 上传button
      uploadBtnAttrs: {
        disabled: false,
        loading: false
      }
    }
  },
  computed: {},
  watch: {
    type(newVal, oldVal) {
      if (newVal === 'image') {
        this.tips = '<strong class="info_red">图片（image）：10MB，支持JPG,PNG格式</strong>'
      } else if (newVal === 'voice') {
        this.tips = '<strong class="info_red">语音（voice） ：2MB，播放长度不超过60s，仅支持AMR格式</strong>'
      } else if (newVal === 'video') {
        this.tips = '<strong class="info_red">视频（video） ：10MB，支持MP4格式</strong>'
      } else if (newVal === 'file') {
        this.tips = '<strong class="info_red">普通文件（file）：20MB</strong>'
      } else {
        this.tips = ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleClear() {
      /* 手动清空上传文件 */
      this.$refs.uploadRef.clearFiles()
      this.fileList = []
    },
    cancelUpload() {
      /* 取消上传 */
      this.$refs.uploadRef.abort()
    },
    uploadSuccess(response, uploadFile) {
      /* 文件上传成功的hook */
      const { status_id, message } = response
      this.$message({
        message: status_id === 100 ? (uploadFile?.name ? uploadFile.name + '上传成功' : '文件上传成功') : message,
        type: status_id === 100 ? 'success' : 'warning',
        duration: 2 * 1000
      })
    },
    uploadExceed(files, UploadFiles) {
      /* 文件上传超过限制的hook */
      this.$message({
        message: '文件个数超过上传限制',
        type: 'warning',
        duration: 2.0 * 1000
      })
    },
    uploadRemove(uploadFile, uploadFiles) {
      /* 文件移除列表成功的hook */
      this.fileList = uploadFiles
      this.$message({
        message: uploadFile?.name ? uploadFile.name + '移除列表成功' : '文件移除列表成功',
        type: 'success',
        duration: 2.0 * 1000
      })
    },
    uploadChange(uploadFile, uploadFiles) { //
      /* 文件上个数发生改变的hook */
      this.fileList = uploadFiles
    },
    beforeUpload(uploadFile) {
      /* 文件上传前的hook，主要用来格式、大小验证 */
    },
    submitUpload() {
      /* 手动提交上传文件 */
      this.isManualUpload ? this.manualUpload() : this.$refs.uploadRef.submit()
    },
    manualUpload() {
      /* 手动上传的hook */
      if (this.fileList.length < 1) {
        this.$message({
          message: '请选择上传文件',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      // file limit
      if (this.uploadAttrs.limit > 0 &&
        this.fileList.length > this.uploadAttrs.limit) {
        this.$message({
          message: '文件个数超过上传限制',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      this.uploadAttrs.disabled = true
      this.uploadBtnAttrs.disabled = true
      this.uploadBtnAttrs.loading = true
      // data form parameters
      const uploadForm = new FormData()
      uploadForm.append('rtx_id', this.$store.getters.rtx_id)
      uploadForm.append('type', this.type)
      uploadForm.append('robot', this.robot)
      this.fileList.forEach(file => {
        uploadForm.append(file.name, file.raw)
      })
      return new Promise((resolve, reject) => {
        qywxUploadTempFile(uploadForm).then(response => {
          const { status_id, message, data } = response
          if (status_id === 100) {
            this.$message({
              message: '文件上传成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            // this.handleClear() // 手动清除上传文件列表
            this.$emit('file-upload-success', data.media_id)
          }
          resolve(response)
        }).catch(error => {
          this.$message({
            message: '服务端发异常，请稍后尝试',
            type: 'warning',
            duration: 2.0 * 1000
          })
          reject(error)
        }).finally(() => {
          this.uploadAttrs.disabled = false
          this.uploadBtnAttrs.disabled = false
          this.uploadBtnAttrs.loading = false
        })
      })
    }
  },
  setup: {}
}
</script>

<style scoped>

</style>
