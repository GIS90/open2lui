<template>
  <div>
    <!-- toolbar -->
    <div id="editor-header" class="editor-header">
      <wang-toolbar
        style="border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;"
        :editor="editor"
        :default-config="toolbarConfig"
        :mode="editorMode"
      />
    </div>
    <!-- editor -->
    <div id="editor-text" class="editor-text">
      <wang-editor
        v-model="editorHtml"
        class="editor-text-container"
        :default-config="editorConfig"
        :mode="editorMode"
        @onCreated="onCreated"
        @onChange="onChange"
      />
    </div>
    <!-- length -->
    <div id="editor-footer" class="editor-footer">
      <span>字符个数：<span class="editor-footer-count">{{ editorTextLength }}</span></span>
      <span style="margin-left: 20px;">HTML个数：<span class="editor-footer-count">{{ editorHtmlLength }}</span></span>
    </div>
  </div>
</template>

<!-- wang-editor css -->
<style src="@wangeditor/editor/dist/css/style.css"></style>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { getToken } from '@/utils/auth'
import store from '@/store'

export default {
  name: 'EditorWang',
  components: {
    'wang-editor': Editor,
    'wang-toolbar': Toolbar
  },
  emits: ['on-change-html'],
  props: {
    html: {
      type: String,
      require: true,
      default: ''
    }
  },
  inject: {},
  data() {
    return {
      editor: null, // editor对象
      editorHtml: this.html,
      editorText: this.text,
      editorTextLength: 0, // text内容长度
      // 工具栏配置
      toolbarConfig: {
        insertKeys: [], // 自定义扩展的菜单
        // 排除掉指定菜单
        excludeKeys: [
          'uploadVideo', // 视频上传
          'fullScreen' // 全屏
        ]
      },
      // 编辑器配置
      editorConfig: {
        placeholder: '请输入内容......', // 配置编辑器 placeholder
        readOnly: false, // 是否只读，只读状态可通过 editor.enable() 和 editor.disable() 切换
        autoFocus: false, // 是否focus
        scroll: true, // 是否支持滚动
        MENU_CONF: {
          // 图片上传
          uploadImage: {
            server: process.env.VUE_APP_BASE_API + process.env.VUE_APP_UPLOAD_IMAGE_API || '', // 动态配置文件中获取
            timeout: 5 * 1000, // 5s
            fieldName: 'files',
            meta: { rtx_id: store.getters.rtx_id }, // 自定义上传参数
            metaWithUrl: false, // 是否meta拼接到url参数中
            headers: { // 设置请求上传的请求头部，token验证
              'Access-Control-Allow-Origin': '*',
              'X-Token': getToken(),
              'X-Rtx-Id': store.getters.rtx_id
            },
            allowedFileTypes: ['image/*'], // 类型限制
            maxFileSize: 2 * 1024 * 1024, // 单个文件的最大体积限制，默认为 2M
            maxNumberOfFiles: 1, // 最多可上传几个文件
            withCredentials: true, // 跨域是否传递cookie
            base64LimitSize: 5 * 1024, // insert base64 format, if file's size less than 5kb
            onBeforeUpload(file) {
              // console.log('onBeforeUpload', file)
              return file // will upload this file
              // return false // prevent upload
            },
            onProgress(progress) {
              // console.log('onProgress', progress)
            },
            onSuccess(file, res) {
              // console.log('onSuccess', file, res)
            },
            onFailed(file, res) {
              // alert(res.message)
              // console.log('onFailed', file, res)
            },
            onError(file, err, res) {
              // alert(err.message)
              // console.error('onError', file, err, res)
            }
          },
          // 视频上传（禁用状态）
          // uploadVideo: {},
          // 代码块
          codeSelectLang: {
            codeLangs: [
              { text: 'CSS', value: 'css' },
              { text: 'HTML', value: 'html' }
            ]
          }
        }
      },
      editorMode: 'default' // 'default' or 'simple' 简洁模式
    }
  },
  computed: {
    editorHtmlLength() {
      return this.editorHtml.length
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      // console.log(this.editor.getAllMenuKeys()) // 菜单KEYS
      // this.editor.setHtml(this.html)
    },
    onChange(editor) {
      // console.log(this.editor.getHtml())
      // console.log(this.editor.getText())
      // if (this.editor.getText() === '') {
      //   this.editorTextLength = 0
      //   return false
      // }
      this.editorTextLength = this.editor.getText().length
      this.$emit('on-change-html', this.editor.getHtml(), this.editor.getText())
    },
    beforeDestroy() {
      if (this.editor == null) return
      this.editor.destroy() // 组件销毁时，及时销毁编辑器
    }
  }
}
</script>

<style scoped>
.editor-header{}

.editor-text {
  min-height: calc(65vh - 40px);
  max-height: calc(100vh);
  background-color: rgb(245, 245, 245);
  overflow-y: auto;
  position: relative;
}

.editor-text-container {
  width: 85%;
  height: 84%;
  min-height: calc(65vh - 40px);
  /*max-height: calc(100vh);*/
  overflow-y: hidden;
  margin: 3% auto 3% auto;
  background-color: #fff;
  padding: 2% 5% 5% 5%;
  /*padding: 20px 50px 50px 50px;*/
  border: 1px solid #e8e8e8;
  box-shadow: 0 20px 20px rgb(0 0 0 / 12%);
}

.editor-footer{
  margin-top: 10px;
  font-size: 14px;
  font-weight: 800;
}

.editor-footer-count {
  color: red;
}
</style>

