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

      <!--content-->
      <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto" style="width: 100%">
        <!-- 发送设置 -->
        <el-divider content-position="left">发送设置</el-divider>
        <el-form-item label="是否群发" prop="mass">
          <el-radio v-model="formData.mass" label="0">否</el-radio>
          <el-radio v-model="formData.mass" label="1">是</el-radio>
        </el-form-item>

        <!-- 消息设置 -->
        <el-divider content-position="left">消息设置</el-divider>
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

        <!-- 根据消息类型显示不同的消息内容主体 -->
        <el-form-item label="消息内容" prop="content">
          <!-- 消息内容 -->
          <el-input
            v-model="formData.content"
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
        <el-form-item label="用户列表" prop="user">
          <el-input
            v-model.trim="formData.user"
            type="textarea"
            placeholder="用户电话列表，多个用户用英文;分割，最多支持150人"
            :rows="textAreaAttrs.rows"
            :autosize="textAreaAttrs.autoSize"
            :maxlength="formDataLimit.user"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="textAreaAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="是否发送" prop="send">
          <el-switch
            v-model="formData.send"
            active-color="#ff4949"
            inactive-color="#13ce66"
            active-text="已发送"
            inactive-text="未发送"
            disabled
          />
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
import { notifyMessageDetail, notifyMessageUpdate } from '@/api/notify'

const validateUser = (rule, value, callback) => {
  if (value.includes('；')) {
    callback(new Error('请用英文;分割多个用户'))
  } else {
    callback()
  }
}

export default {
  name: 'MessageSet',
  components: {},
  emits: ['close-set-dg'],
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
      tipShow: false, // tip提示状态
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '编辑',
        width: '65%', // Dialog 的宽度
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
        rows: 8, // 输入框行数
        autoSize: { minRows: 6, maxRows: 12 }, // 自适应内容高度，默认false，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }
        clear: true, // 可清空的输入框
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      // data
      boolList: [], // 是/否选项
      formData: {
        mass: '0', // 是否群发：0-单人发送 1-多人发送
        title: '', // 标题
        content: '', // 内容
        user: '', // 接收人列表
        send: false // 是否发送：False-未发送 True-已发送
      },
      formDataLimit: {
        title: 55,
        content: 255,
        user: 2000
      },
      formDataRules: {
        title: [
          { required: true, message: '请输入消息标题', trigger: ['blur', 'change'] },
          { min: 1, max: 55, message: '消息标题最大长度为55', trigger: ['blur', 'change'] }
        ],
        content: [
          { required: true, message: '请输入消息内容', trigger: ['blur', 'change'] },
          { min: 1, max: 1000, message: '消息内容最大长度为2000', trigger: ['blur', 'change'] }
        ],
        user: [
          { required: true, message: '请输入用户人电话', trigger: ['blur', 'change'] },
          { min: 1, max: 2000, message: '用户电话最大长度为2000', trigger: ['blur', 'change'] },
          { required: true, trigger: 'blur', validator: validateUser } // 特殊校验
        ]
      }
    }
  },
  computed: {},
  watch: {
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    },
    'formData.mass': {
      handler: function(newValue, oldValue) {
        this.formDataLimit.user = newValue === '0' ? 11 : 2000
      },
      deep: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作，获取最新数据
      // 初始化操作，获取最新数据
      if (!this.rowMd5) {
        this.$emit('close-set-dg', true)
        return false
      }
      this.fullScreenStatus = false // 初始化非全屏

      // 初始化枚举数据
      this.$nextTick(() => {
        this.getDNewInfo()
      })
    },
    closeDialog() { // 关闭dg
      // 清空表单状态
      this.$refs.formData.clearValidate()
      this.$emit('close-set-dg', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    getDNewInfo() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        notifyMessageDetail(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.title = data.detail.title
            this.formData.content = data.detail.content
            this.formData.user = data.detail.user
            this.formData.mass = data.detail.mass
            this.formData.send = data.detail.send

            this.formDataLimit.user = data.detail.mass === '0' ? 11 : 2000
          } else {
            this.$emit('close-set-dg', false)
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
          if (this.formData.mass === '0' && this.formData.user.length > 11) {
            this.$message({
              message: '用户电话最大长度为11',
              type: 'warning',
              duration: 2.0 * 1000
            })

            return
          }

          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'md5': this.rowMd5,
            'mass': this.formData.mass !== '0',
            'title': this.formData.title,
            'content': this.formData.content,
            'user': this.formData.user
          }

          return new Promise((resolve, reject) => {
            notifyMessageUpdate(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '编辑成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-set-dg', true)
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
