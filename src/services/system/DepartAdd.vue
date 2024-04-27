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
        <el-divider content-position="left">上级部门信息</el-divider>
        <el-form-item label="上级ID">
          <el-input
            v-model.trim="upNode.id"
            type="text"
            :maxlength="formDataLimit.name"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            disabled
          />
        </el-form-item>
        <el-form-item label="上级名称">
          <el-input
            v-model.trim="upNode.name"
            type="text"
            :maxlength="formDataLimit.name"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            disabled
          />
        </el-form-item>
        <el-form-item label="上级路径">
          <el-input
            v-model.trim="upNode.path"
            type="text"
            :maxlength="formDataLimit.name"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            disabled
          />
        </el-form-item>
        <el-divider content-position="left">新部门信息</el-divider>
        <el-form-item label="名称" prop="name">
          <el-input
            v-model.trim="formData.label"
            type="text"
            placeholder="请输入部门名称"
            :maxlength="formDataLimit.label"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="简述" prop="description">
          <el-input
            v-model="formData.description"
            type="textarea"
            placeholder="请输入部门简述"
            :rows="textAreaAttrs.rows"
            :maxlength="formDataLimit.description"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="管理员" prop="manage_rtx">
          <el-select
            v-model="formData.manage_rtx"
            style="width: 100%"
            :size="selectAttrs.size"
            placeholder="请选择部门管理员"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option
              v-for="(item, index) in userList"
              :key="index"
              :label="item.value"
              :value="item.key"
            >
              <span class="select-opt-left">{{ item.value }}</span>
              <span class="select-opt-right">{{ item.key }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="lock">
          <el-radio v-model="formData.lock" :label="radioValue.use">启用</el-radio>
          <el-radio v-model="formData.lock" :label="radioValue.ban">禁用</el-radio>
        </el-form-item>
        <el-form-item label="排序ID" prop="order_id">
          <el-input-number
            v-model="formData.order_id"
            style="width: 100%"
            :controls="numberAttrs.controls"
            :controls-position="numberAttrs.controlsPosition"
            :min="numberAttrs.min"
            :max="numberAttrs.max"
            :step="numberAttrs.step"
            :size="numberAttrs.size"
            :disabled="disabled"
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
import { SystemDepartAdd, SystemDepartAddInit } from '@/api/system'

export default {
  name: 'DepartAdd',
  emits: ['close-add'],
  components: {},
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    upNode: {
      type: Object,
      require: true,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // 是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '新增',
        width: '65%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '2%', // Dialog CSS 中的 margin-top 值
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
        rows: 4, // 输入框行数
        autoSize: { minRows: 4, maxRows: 6 }, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '255', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      selectAttrs: { // select attrs
        size: 'medium', // 大小：''/medium/small/mini
        multiple: true, // 多选
        clearable: true, // 清空选择
        filterable: true, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '请选择管理员' // 默认显示内容
      },
      numberAttrs: { // input number attrs
        size: '', // 大小：large, small, ''默认
        min: 1, // 最小值
        max: 10000, // 最大值
        step: 1, // 计数器步长
        controls: true, // 是否使用控制按钮
        controlsPosition: '',	// 控制按钮位置: right
        placeholder: '请输入排序ID'
      },
      radioAttrs: { // radio attrs
        border: false, // 边框
        size: 'small' // Radio 的尺寸medium / small / mini
      },
      radioValue: {
        use: false,
        ban: true
      },
      formData: {
        label: '', // 名称
        description: '', // 简述
        manage_rtx: '', // 管理员
        lock: false, // 状态
        order_id: 1 // undefined 排序ID
      },
      formDataLimit: {
        label: '30',
        description: '300',
        manage_rtx: '25'
      },
      formDataRules: {
        label: [
          { required: true, message: '请输入部门名称', trigger: ['blur', 'change'] },
          { min: 1, max: 30, message: '部门名称最大长度为30', trigger: ['blur', 'change'] }
        ],
        description: [
          { required: true, message: '请输入部门简述', trigger: ['blur', 'change'] },
          { min: 1, max: 300, message: '部门简述最大长度为300', trigger: ['blur', 'change'] }
        ],
        manage_rtx: [
          { required: true, message: '请选择部门管理员', trigger: ['blur', 'change'] }
        ]
      },
      userList: []
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
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    closeDialog() { // 关闭dialog
      // 清空表单状态
      this.$refs.formData.clearValidate()
      this.$emit('close-add', false)
    },
    openDialog() { // 初始化操作
      // 初始化非全屏
      this.fullScreenStatus = false
      // 表单初始化
      this.formData.label = ''
      this.formData.description = ''
      this.formData.manage_rtx = ''
      this.formData.lock = false
      this.formData.order_id = 1 // undefined or 1
      this.$nextTick(() => {
        // 重置表单状态
        this.initDepart()
        this.$refs.formData.resetFields()
      })
    },
    initDepart() {
      const params = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        SystemDepartAddInit(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.userList = data.user // 用户列表
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submit() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'name': this.formData.label,
            'description': this.formData.description,
            'manage_rtx': this.formData.manage_rtx,
            'lock': this.formData.lock,
            'order_id': this.formData.order_id || 1,
            'pid': this.upNode.id
          }
          return new Promise((resolve, reject) => {
            SystemDepartAdd(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '新增成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-add', true)
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
