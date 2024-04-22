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
      <!-- content -->
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
        :on-preview="handlePictureCardPreview"
      >
        <i class="el-icon-plus" />
        <div slot="tip" class="el-upload__tip avatar-remark">
          <div>上传文件数量： <strong style="color: red">{{ fileList.length }}</strong></div>
          <el-alert type="warning" show-icon class="avatar-remark-alert">
            <ol class="avatar-remark-alert-ul">
              <li>仅支持<span class="info_red">jpg/png</span>格式文件上传，且不超过<span class="info_red">2M</span>（2048KB）。</li>
              <li>单次上传最大限制<span class="info_red">{{ uploadAttrs.limit }}</span>个。</li>
              <li>上传成功后，对单张图片可进行信息完善、裁剪编辑等操作，暂不支持批量操作。</li>
            </ol>
          </el-alert>
        </div>
      </el-upload>
      <!-- 图片预览 -->
      <el-dialog :visible.sync="dialogVisible" z-index="1000">
        <img width="100%" :src="dialogImageUrl">
      </el-dialog>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-checkbox v-model="uploadSuccessAutoClose" class="dialog-footer-auto-close" @change="changeAutoClose">是否上传成功后关闭</el-checkbox>
          <el-button v-show="fileList.length>0" :disabled="uploadBtnAttrs.disabled" @click="handleClear">
            清空
          </el-button>
          <el-button :disabled="uploadBtnAttrs.disabled" @click.prevent.stop="closeDialog">
            取消
          </el-button>
          <el-button type="primary" :disabled="uploadBtnAttrs.disabled" :loading="uploadBtnAttrs.loading" @click="submitUpload">
            上传
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { SystemApiTypeList } from '@/api/system'
import { getToken } from '@/utils/auth'
import { validImageFile } from '@/utils/validate'
import { uploadMulFiles } from '@/api/common'

export default {
  name: 'AvatarAdd',
  emits: ['close-add-dg'],
  components: {},
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
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '新增',
        width: '75%', // Dialog 的宽度
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
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      textAreaAttrs: { // textArea attrs
        rows: 3, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '255', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      selectAttrs: { // select attrs
        size: 'medium', // 大小：''/medium/small/mini
        multiple: false, // 多选
        clearable: true, // 清空选择
        filterable: true, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 1, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '请选择API类型' // 默认显示内容
      },
      numberAttrs: { // input number attrs
        size: '', // 大小：large, small
        min: 1, // 最小值
        max: 10000, // 最大值
        step: 1, // 计数器步长
        controls: true, // 是否使用控制按钮
        controlsPosition: '',	// 控制按钮位置: right
        placeholder: '请输入排序ID'
      },
      uploadApis: {
        url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_UPLOAD_FILES_API || '', // 使用组件自带上传功能URL，默认为空，动态配置文件中获取
        accept: '.jpg,.jpeg,.png', // 上传文件的类型
        headers: { // 设置请求上传的请求头部，token验证
          'Access-Control-Allow-Origin': '*',
          'X-Token': getToken(),
          'X-Rtx-Id': store.getters.rtx_id
        },
        method: 'POST', // 设置上传请求方法
        data: { // 上传时附带的额外参数
          'rtx_id': store.getters.rtx_id,
          'file_type': 8 // 8-avatar
        },
        name: 'files', // 上传的文件字段名，后台API用
        cookie: true // 发送 cookie 凭证信息
      },
      uploadAttrs: {
        multiple: true, // 是否支持多选文件
        showFileList: true, // 是否显示已上传文件列表
        drag: false, // 是否启用拖拽上传
        listType: 'picture-card', // 文件列表的类型 "text" | "picture" | "picture-card"
        autoUpload: false, // 是否自动上传文件
        // limit: process.env.VUE_APP_UPLOAD_FILES_LIMIT ? process.env.VUE_APP_UPLOAD_FILES_LIMIT - 0 : 20, // 允许上传文件的最大数量, 0无限制
        limit: parseInt(process.env?.VUE_APP_UPLOAD_FILES_LIMIT ?? 20), // 允许上传文件的最大数量, 0无限制
        disabled: false
      },
      fileList: [], // 文件列表
      dialogImageUrl: '', // 当前选择的图片URL
      dialogVisible: false, // 是否显示当前选择图片
      // 上传button
      uploadBtnAttrs: {
        disabled: false,
        loading: false
      },
      // 是否上传过文件状态
      isUpload: false,
      // 是否上传成功后关闭
      uploadSuccessAutoClose: false
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
      // 非全屏
      this.fullScreenStatus = false
      // 文件列表
      this.fileList = []
      // localStore读取设置是否上传成功后自动关闭
      this.uploadSuccessAutoClose = localStorage.getItem('uploadSuccessAutoClose') === 'true'
      // 表单初始化
      // this.formData.blueprint = ''
      this.$nextTick(() => {
        // 重置表单状态
        this.getTypeList()
        // this.$refs.formData.resetFields()
      })
    },
    closeDialog() { // 关闭dialog
      // 清空表单状态
      // this.$refs.formData.clearValidate()
      /* 手动清空文件 */
      this.$refs.uploadRef.clearFiles()
      this.$emit('close-add-dg', this.isUpload)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
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
        return 'http://121.4.56.169:9999/common/file_upload'
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

      // 成功上传后设置自动关闭
      if (status_id === 100 && this.uploadSuccessAutoClose) {
        // 延迟
        setTimeout(() => {
          this.$emit('close-file-upload', this.isUpload)
        }, 2000)
      }
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
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeUpload(uploadFile) {
      /* 文件上传前的hook，主要用来格式、大小验证 */
      // 文件格式
      return uploadFile?.name ? validImageFile(uploadFile.name) : true
      // 文件大小
      /*
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
      */
    },
    manualUpload() {
      /* 手动上传的hook */
      // not found upload file
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
      uploadForm.append('file_type', 8) // 8-avatar
      this.fileList.forEach(file => {
        uploadForm.append(file.name, file.raw)
      })
      return new Promise((resolve, reject) => {
        uploadMulFiles(uploadForm).then(response => {
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

          // 成功上传后设置自动关闭
          if (status_id === 100 && this.uploadSuccessAutoClose) {
            // 延迟
            setTimeout(() => {
              this.$emit('close-file-upload', this.isUpload)
            }, 2000)
          }
        }).catch(error => {
          reject(error)
        }).finally(() => {
          this.uploadAttrs.disabled = false
          this.uploadBtnAttrs.disabled = false
          this.uploadBtnAttrs.loading = false
        })
      })
    },
    getTypeList() {
      const params = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        SystemApiTypeList(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.typeList = data
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    changeAutoClose(v) {
      this.uploadSuccessAutoClose = v
      localStorage.setItem('uploadSuccessAutoClose', v)
    }
  }
}
</script>

<style scoped>
.avatar-remark {
  font-size: 15px !important;
  margin-top: 25px;
}

.avatar-remark-alert{
  margin-top: 25px;
}

.avatar-remark-alert-ul {
  list-style-type: upper-roman;
}

.avatar-remark-alert-ul li {
  margin-top: 10px;
  font-size: 15px;
  color: black;
  line-height: 1.5;
}

.dialog-footer-auto-close {
  margin-right: 20px;
}
</style>
