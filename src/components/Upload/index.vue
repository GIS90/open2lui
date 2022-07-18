<template>
  <div>
    <el-dialog
      :visible="dialog"
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
      @close="handleClose"
      @open="handleOpen"
    >
      <!-- upload -->
      <div style="text-align: center;">
        <el-upload
          ref="uploadRef"
          :action="getUploadUrl()"
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
          <i class="el-icon-upload" />
          <div class="el-upload__text">拖拽或者 <em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">
              <!-- 提示说明 支持html显示-->
              <p v-html="tips" />
              <p>上传文件数量： <strong>{{ fileList.length }}</strong>（{{ uploadAttrs.limit>0 ? '单次上传限制'+uploadAttrs.limit : '无限制' }}）</p>
            </div>
          </template>

        </el-upload>
      </div>

      <!-- dialog footer -->
      <template #footer>
        <span class="dialog-footer">
          <el-button
            v-show="fileList.length>0"
            :disabled="uploadBtnAttrs.disabled"
            @click="handleClear"
          >
            清空
          </el-button>
          <el-button
            :disabled="uploadBtnAttrs.disabled"
            @click.prevent.stop="handleClose"
          >
            取消
          </el-button>
          <el-button
            type="primary"
            :disabled="uploadBtnAttrs.disabled"
            :loading="uploadBtnAttrs.loading"
            @click="submitUpload"
          >
            确定
          </el-button>
        </span>
      </template>

    </el-dialog>
  </div>
</template>

<script>
import { uploadMulFiles } from '@/api/common'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { validExcelFile } from '@/utils/validate'
// const path = require('path')

export default {
  name: 'Upload',
  emits: ['close-file-upload'],
  components: {},
  props: {
    // 是否显示dg，value：true or false
    dialog: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    // 上传文件类型: 1-excel merge, 2-excel split, 3-word, 4-ppt, 5-text, 6-pdf, 7-dtalk, 99-other
    fileType: {
      type: String,
      require: true,
      default: '1'
    }
  },
  data() {
    return {
      // 依据上传文件类型定制tip，1-excel merge, 2-excel split, 3-word, 4-ppt, 5-text, 6-pdf, 7-dtalk, 99-other
      tips: this.getUploadTip(),
      fileList: [], // 文件列表
      isManualUpload: true, // 是否手动上传，值为false：upload组件自带的每次只上传一个，多文件为循环上传
      // true：manualUpload 上传所有文件
      uploadApis: {
        url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_UPLOAD_FILES_API || '', // 使用组件自带上传功能URL，默认为空，动态配置文件中获取
        accept: this.getUploadAccept(), // 上传文件的类型
        headers: { // 设置请求上传的请求头部，token验证
          'Access-Control-Allow-Origin': '*',
          'X-Token': getToken(),
          'X-Rtx-Id': store.getters.rtx_id
        },
        method: 'POST', // 设置上传请求方法
        data: { // 上传时附带的额外参数
          'rtx_id': store.getters.rtx_id,
          'file_type': this.fileType
        },
        name: 'files', // 上传的文件字段名，后台API用
        cookie: true // 发送 cookie 凭证信息
      },
      uploadAttrs: {
        multiple: true, // 是否支持多选文件
        showFileList: true, // 是否显示已上传文件列表
        drag: true, // 是否启用拖拽上传
        listType: 'text', // 文件列表的类型 "text" | "picture" | "picture-card"
        autoUpload: false, // 是否自动上传文件
        limit: process.env.VUE_APP_UPLOAD_FILES_LIMIT ? process.env.VUE_APP_UPLOAD_FILES_LIMIT - 0 : 20, // 允许上传文件的最大数量, 0无限制
        disabled: false
      },
      dialogAttrs: {
        title: '文件上传',
        width: '55%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '5%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: false, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: true, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      // 上传button
      uploadBtnAttrs: {
        disabled: false,
        loading: false
      },
      // 是否上传过文件状态
      isUpload: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getUploadTip() { // upload tip内容，支持html
      // 上传文件类型：1-excel merge, 2-excel split, 3-word, 4-ppt, 5-text, 6-pdf, 7-dtalk, 99-other
      if (this.fileType === '1') {
        return '<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。'
      } else if (this.fileType === '2') {
        return '<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。'
      } else if (this.fileType === '3') {
        return '.doc,.docx'
      } else if (this.fileType === '4') {
        return '.ppt,.pptx'
      } else if (this.fileType === '5') {
        return '.txt'
      } else if (this.fileType === '6') {
        return '<strong>提示</strong>：仅支持<span class=\"info_red\">.pdf</span>格式文件上传。'
      } else if (this.fileType === '7') {
        return '<strong>提示</strong>：支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式文件上传，.xls格式文件条数最大支持为<strong>65535</strong>行，超出请上传.xlxs格式数据。'
      } else {
        return ''
      }
    },
    getUploadAccept() { // upload accept
      // 上传文件类型：1-excel merge, 2-excel split, 3-word, 4-ppt, 5-text, 6-pdf, 7-dtalk, 99-other
      if (['1', '2', '7'].includes(this.fileType)) {
        return '.xls,.xlsx'
      } else if (this.fileType === '3') {
        return '.doc,.docx'
      } else if (this.fileType === '4') {
        return '.ppt,.pptx'
      } else if (this.fileType === '5') {
        return '.txt'
      } else if (this.fileType === '6') {
        return '.pdf'
      } else {
        return ''
      }
    },
    handleClose() {
      /* 手动清空文件 */
      this.$refs.uploadRef.clearFiles()
      this.$emit('close-file-upload', this.isUpload)
    },
    handleOpen() {
      /* 初始化fileList */
      this.fileList = []
    },
    handleClear() {
      /* 手动清空上传文件 */
      this.$refs.uploadRef.clearFiles()
      this.fileList = []
    },
    cancelUpload() {
      /* 取消上传 */
      this.$refs.uploadRef.abort()
    },
    submitUpload() {
      /* 手动提交上传文件 */
      this.isManualUpload ? this.manualUpload() : this.$refs.uploadRef.submit()
    },
    getUploadUrl() {
      return !this.isManualUpload ? this.uploadApis.url : ''
      /*
      if (process.env.VUE_APP_BASE_API && process.env.VUE_APP_UPLOAD_FILES_API) {
        return (process.env.VUE_APP_BASE_API + process.env.VUE_APP_UPLOAD_FILES_API)
      } else {
        return 'http://121.4.56.169:9999/excel/upload'
      }
      */
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
      return uploadFile?.name ? validExcelFile(uploadFile.name) : true
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
      // 更改isUpload状态
      this.isUpload = true
      this.uploadAttrs.disabled = true
      this.uploadBtnAttrs.disabled = true
      this.uploadBtnAttrs.loading = true
      // data form parameters
      const uploadForm = new FormData()
      uploadForm.append('rtx_id', this.$store.getters.rtx_id)
      uploadForm.append('file_type', this.fileType)
      this.fileList.forEach(file => {
        uploadForm.append(file.name, file.raw)
      })
      return new Promise((resolve, reject) => {
        uploadMulFiles(uploadForm).then(response => {
          this.uploadAttrs.disabled = false
          this.uploadBtnAttrs.disabled = false
          this.uploadBtnAttrs.loading = false
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '文件上传成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.handleClear()
          }
          resolve(response)
        }).catch(error => {
          this.uploadAttrs.disabled = false
          this.uploadBtnAttrs.disabled = false
          this.uploadBtnAttrs.loading = false
          this.$message({
            message: '服务端发异常，请稍后尝试',
            type: 'warning',
            duration: 2.0 * 1000
          })
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
