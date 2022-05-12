<template>
  <div>
    <el-dialog
      :visible="show"
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
      @open="openDialog()"
      @close="closeDialog()"
    >
      <el-form :label-position="labelPosition" label-width="auto">
        <el-form-item label="RTX名称">
          <el-input
            v-model.trim="engname"
            type="text"
            placeholder="请输入角色RTX名称"
            :maxlength="inputAttrs.length"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="disabled"
            prefix-icon="el-icon-edit"
          />
        </el-form-item>
        <el-form-item label="中文名称">
          <el-input
            v-model.trim="chnname"
            type="text"
            placeholder="请输入角色中文名称"
            :maxlength="inputAttrs.length"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :disabled="disabled"
            prefix-icon="el-icon-edit"
          />
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click="submitAddRole()">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'RoleAdd',
  emits: ['close-add-role'],
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
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      dialogAttrs: {
        title: '新增角色',
        width: '40%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: true, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      inputAttrs: { // input attrs
        clear: true, // 可清空的输入框
        length: '55', // 最大输入长度
        limit: true // 展示字数统计
      },
      // data
      engname: '', // 英文名称
      chnname: '', // 中文名称
      introduction: '' // 描述
    }
  },
  computed: {},
  watch: {},
  created() {
    const height = document.documentElement.clientHeight
    const width = document.documentElement.clientWidth
    console.log(height)
    console.log(width)
  },
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      this.engname = ''
      this.chnname = ''
      this.introduction = ''
    },
    closeDialog() {
      this.$emit('close-add-role', false)
    },
    submitAddRole() {

    }
  }
}
</script>

<style scoped>

</style>
