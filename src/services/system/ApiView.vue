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
      <el-form ref="formData" :label-position="labelPosition" :model="formData" label-width="auto" style="width: 100%">
        <!-- 配置信息 -->
        <el-divider content-position="left">配置信息</el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="BluePrint" prop="blueprint">
              <el-input
                v-model.trim="formData.blueprint"
                type="text"
                placeholder="请输入BluePrint（英文）"
                :maxlength="formDataLimit.blueprint"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="ApiName" prop="apiname">
              <el-input
                v-model.trim="formData.apiname"
                type="text"
                placeholder="请输入ApiName（英文）"
                :maxlength="formDataLimit.apiname"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 基础信息 -->
        <el-divider content-position="left">基础信息</el-divider>
        <el-form-item label="类型" prop="type">
          <el-select
            v-model="formData.type"
            style="width: 100%"
            :size="selectAttrs.size"
            :placeholder="selectAttrs.placeholder"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="formDataLimit.type"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option
              v-for="(item, index) in typeList"
              :key="index"
              :label="item.value"
              :value="item.key"
            >
              <span class="select-opt-left">{{ item.value }}</span>
              <span class="select-opt-right">{{ item.key }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="简述" prop="short">
          <el-input
            v-model.trim="formData.short"
            type="text"
            placeholder="请输入API简述"
            :maxlength="formDataLimit.short"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
        </el-form-item>
        <el-form-item label="说明" prop="long">
          <el-input
            v-model="formData.long"
            type="textarea"
            placeholder="请输入API说明"
            :rows="textAreaAttrs.rows"
            :maxlength="formDataLimit.long"
            :clearable="textAreaAttrs.clear"
            :show-word-limit="textAreaAttrs.limit"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
          />
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
        <!-- 其他信息 -->
        <el-divider content-position="left">其他信息</el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="创建人RTX" prop="create_rtx">
              <el-input
                v-model.trim="formData.create_rtx"
                type="text"
                :maxlength="formDataLimit.create_rtx"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建时间" prop="create_time">
              <el-input
                v-model.trim="formData.create_time"
                type="text"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="更新人RTX" prop="update_rtx">
              <el-input
                v-model.trim="formData.update_rtx"
                type="text"
                :maxlength="formDataLimit.update_rtx"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="更新时间" prop="update_time">
              <el-input
                v-model.trim="formData.update_time"
                type="text"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { SystemApiDetail } from '@/api/system'

export default {
  name: 'ApiView',
  emits: ['close-view-dg'],
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
    rowMd5: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: true, // 禁用组件
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '详情',
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
        // length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      textAreaAttrs: { // textArea attrs
        rows: 3, // 输入框行数
        autoSize: false, // 自适应内容高度
        clear: true, // 可清空的输入框
        // length: '255', // 最大输入长度
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
      formData: {
        blueprint: '',
        apiname: '',
        type: '',
        short: '',
        long: '',
        order_id: 1,
        create_rtx: '',
        create_time: '',
        update_rtx: '',
        update_time: ''
      },
      formDataLimit: {
        blueprint: '25',
        apiname: '35',
        short: '55',
        long: '120',
        type: 1,
        create_rtx: '25',
        update_rtx: '25'
      },
      typeList: []
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
      this.$emit('close-view-dg', false)
    },
    openDialog() { // 初始化操作
      // 初始化非全屏
      this.fullScreenStatus = false
      // 数据初始化
      this.formData.blueprint = ''
      this.formData.apiname = ''
      this.formData.type = ''
      this.formData.short = ''
      this.formData.long = ''
      this.formData.order_id = 1
      this.formData.create_rtx = ''
      this.formData.create_time = ''
      this.formData.update_rtx = ''
      this.formData.update_time = ''
      this.typeList = []
      // 请求
      this.$nextTick(() => {
        // 重置表单状态
        this.getDetail()
        this.$refs.formData.resetFields()
      })
    },
    getDetail() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        SystemApiDetail(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            // detail
            this.formData.blueprint = data.detail.blueprint
            this.formData.apiname = data.detail.apiname
            this.formData.type = data.detail.type
            this.formData.short = data.detail.short
            this.formData.long = data.detail.long
            this.formData.order_id = data.detail.order_id
            this.formData.create_rtx = data.detail.create_rtx
            this.formData.create_time = data.detail.create_time
            this.formData.update_rtx = data.detail.update_rtx
            this.formData.update_time = data.detail.update_time
            // type list
            this.typeList = data.type
          } else {
            this.$emit('close-view-dg', false)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
