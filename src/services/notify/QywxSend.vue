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
      <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto" style="width: 100%">
        <el-form-item label="消息标题" prop="title">
          <el-input
            v-model.trim="formData.title"
            type="text"
            placeholder="请输入消息标题"
            :maxlength="formDataLimit.title"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="消息内容" prop="content">
          <el-input
            v-model.trim="formData.content"
            type="textarea"
            placeholder="请输入消息内容"
            :rows="textAreaAttrs.rows"
            :autosize="textAreaAttrs.autoSize"
            :maxlength="formDataLimit.content"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="textAreaAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="消息类型" prop="type">
          <el-select
            v-model="formData.type"
            style="width: 100%"
            placeholder="请选择消息类型"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option v-for="(item, index) in formData.typeLists" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="用户列表" prop="user">
          <el-input
            v-model.trim="formData.user"
            type="textarea"
            placeholder="用户列表，多个用户用英文;分割"
            :rows="textAreaAttrs.rows"
            :autosize="textAreaAttrs.autoSize"
            :maxlength="formDataLimit.user"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="textAreaAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="Robot选择" prop="robot">
          <el-select
            v-model="formData.robot"
            style="width: 100%"
            placeholder="请选择消息发送的Robot"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option v-for="(item, index) in formData.robotLists" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submit()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { notifyQywxSendInit, notifyQywxSend } from '@/api/notify'

const validateUser = (rule, value, callback) => {
  if (value.includes('；')) {
    callback(new Error('请用英文;分割多个用户'))
  } else {
    callback()
  }
}

export default {
  name: 'QywxSend',
  emits: ['close-send-dg'],
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
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      dialogAttrs: {
        title: '发送',
        width: '55%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '5%', // Dialog CSS 中的 margin-top 值
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
        rows: 8, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '80', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      selectAttrs: { // select attrs
        multiple: false, // 多选
        clearable: true, // 清空选择
        filterable: false, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '' // 默认显示内容
      },
      // data
      formData: {
        title: '', // 标题
        content: '', // 内容
        user: '', // 接收人列表
        type: '', // 消息类型
        typeLists: [], // 消息类型列表
        robot: '', // 消息机器人
        robotLists: [] // 消息机器人列表
      },
      formDataLimit: {
        title: 55,
        content: 1000,
        user: 1000
      },
      formDataRules: {
        title: [
          { required: true, message: '请输入消息标题', trigger: ['blur', 'change'] },
          { min: 1, max: 55, message: '消息标题最大长度为55', trigger: ['blur', 'change'] }
        ],
        content: [
          { required: true, message: '请输入消息标题', trigger: ['blur', 'change'] },
          { min: 1, max: 1000, message: '消息标题最大长度为1000', trigger: ['blur', 'change'] }
        ],
        user: [
          { required: true, message: '请输入用户人列表', trigger: ['blur', 'change'] },
          { min: 1, max: 1000, message: '用户列表最大长度为1000', trigger: ['blur', 'change'] },
          { required: true, trigger: 'blur', validator: validateUser } // 特殊校验
        ],
        type: [
          { required: true, message: '请选择消息类型', trigger: ['blur', 'change'] }
        ],
        robot: [
          { required: true, message: '请选择消息发送的Robot', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作，获取最新数据
      if (!this.rowMd5) {
        this.$emit('close-send-dg', true)
        return false
      }
      this.$nextTick(() => {
        this.getDNewInfo()
        // 重置表单状态
        this.$refs.formData.resetFields()
      })
    },
    closeDialog() { // 关闭dg
      // 清空表单状态
      this.$refs.formData.clearValidate()
      this.$emit('close-send-dg', false)
    },
    getDNewInfo() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        notifyQywxSendInit(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.title = data.title
            this.formData.content = data.content
            this.formData.user = data.user
            this.formData.type = data.type
            this.formData.typeLists = data.type_lists
            this.formData.robot = data.robot
            this.formData.robotLists = data.robot_lists
          } else {
            this.$emit('close-send-dg', false)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submit() { // 提交设置
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'title': this.formData.title,
            'content': this.formData.content,
            'user': this.formData.user,
            'type': this.formData.type,
            'robot': this.formData.robot,
            'md5': this.rowMd5
          }

          return new Promise((resolve, reject) => {
            notifyQywxSend(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '发送成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-send-dg', true)
              }
              resolve(response)
            }).catch(error => {
              reject(error)
            }).finally(() => {
              // 重置按钮状态
              this.disabled = false
              this.loading = false
              // 清空表单状态
              this.$refs.formData.clearValidate()
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
