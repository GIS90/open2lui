<template>
  <div>
    <wang-toolbar
      style="border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;"
      :editor="editor"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <wang-editor
      v-model="html"
      style="height: 300px; overflow-y: hidden;"
      :default-config="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
  </div>
</template>
<!-- wang-editor css -->
<style src="@wangeditor/editor/dist/css/style.css"></style>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  name: 'EditorWang',
  components: {
    'wang-editor': Editor,
    'wang-toolbar': Toolbar
  },
  emits: [],
  props: {
    height: {
      type: String,
      require: false,
      default: '500px'
    }
  },
  inject: {},
  data() {
    return {
      editor: null, // editor对象
      html: '',
      // 工具栏配置
      toolbarConfig: {},
      // 编辑器配置
      editorConfig: {
        placeholder: '请输入内容......', // 配置编辑器 placeholder
        readOnly: false, // 是否只读，只读状态可通过 editor.enable() 和 editor.disable() 切换
        autoFocus: false, // 是否focus
        scroll: true // 是否支持滚动
      },
      mode: 'default' // 'default' or 'simple' 简洁模式
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    beforeDestroy() {
      if (this.editor == null) return
      this.editor.destroy() // 组件销毁时，及时销毁编辑器
    }
  }
}
</script>
