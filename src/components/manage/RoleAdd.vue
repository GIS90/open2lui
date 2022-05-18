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
      <el-form ref="addRoleForm" :label-position="labelPosition" :model="addRoleForm" :rules="addRoleRules" label-width="auto">
        <el-form-item label="RTX名称" prop="engname">
          <el-input
            v-model.trim="addRoleForm.engname"
            type="text"
            placeholder="请输入RTX名称（建议使用英文）"
            :maxlength="addRoleLimit.engname"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="中文名称" prop="chnname">
          <el-input
            v-model.trim="addRoleForm.chnname"
            type="text"
            placeholder="请输入中文名称"
            :maxlength="addRoleLimit.chnname"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="描述" prop="introduction">
          <el-input
            v-model.trim="addRoleForm.introduction"
            type="textarea"
            placeholder="请输入相关描述"
            :rows="textAreaAttrs.rows"
            :autosize="textAreaAttrs.autoSize"
            :maxlength="addRoleLimit.introduction"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="textAreaAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submitAddRole()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { addRole } from '@/api/manage'
import store from '@/store'

const validateRoleEName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入RTX名称'))
  } else if (value.length > 25) {
    callback(new Error('RTX名称最大长度为25'))
  } else {
    callback()
  }
}

const validateRoleCName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入中文名称'))
  } else if (value.length > 35) {
    callback(new Error('中文名称最大长度为35'))
  } else {
    callback()
  }
}

const validateRoleIntrod = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入描述'))
  } else if (value.length > 55) {
    callback(new Error('描述最大长度为55'))
  } else {
    callback()
  }
}

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
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      textAreaAttrs: { // textArea attrs
        rows: 2, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '55', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      // data
      addRoleForm: {
        engname: '', // 英文名称
        chnname: '', // 中文名称
        introduction: '' // 描述
      },
      addRoleLimit: {
        engname: '25',
        chnname: '35',
        introduction: '55'
      },
      addRoleRules: {
        engname: [{ required: true, trigger: 'blur', validator: validateRoleEName }],
        chnname: [{ required: true, trigger: 'blur', validator: validateRoleCName }],
        introduction: [{ required: true, trigger: 'blur', validator: validateRoleIntrod }]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      this.addRoleForm.engname = ''
      this.addRoleForm.chnname = ''
      this.addRoleForm.introduction = ''
    },
    closeDialog() { // 关闭dialog
      this.$emit('close-add-role', false)
    },
    submitAddRole() { // 提交
      this.$refs.addRoleForm.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'engname': this.addRoleForm.engname,
            'chnname': this.addRoleForm.chnname,
            'introduction': this.addRoleForm.introduction
          }
          return new Promise((resolve, reject) => {
            addRole(data).then(response => {
              this.disabled = false
              this.loading = false
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '角色新增成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-add-role', true)
              }
              resolve(response)
            }).catch(error => {
              this.disabled = false
              this.loading = false
              reject(error)
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
