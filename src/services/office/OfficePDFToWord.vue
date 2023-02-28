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
      <!-- form -->
      <div id="main-opr-div" style="text-align: center;">
        <el-form :label-position="labelPosition" label-width="auto" style="width: 100%">
          <!--模式-->
          <el-form-item>
            <el-switch
              v-model="formData.mode"
              class="sw-sty"
              style="display: block"
              :disabled="disabled"
              :width="switchAttrs.width"
              :active-text="switchAttrs.activeText"
              :inactive-text="switchAttrs.inactiveText"
              :active-color="switchAttrs.activeColor"
              :inactive-color="switchAttrs.inactiveColor"
              :active-value="switchAttrs.activeValue"
              :inactive-value="switchAttrs.inactiveValue"
              @change="changeStatus($event)"
            />
          </el-form-item>
          <el-form-item label="文件名称">
            <el-input
              v-model.trim="formData.name"
              type="text"
              placeholder="新文件docx文档名称，不填写则默认以当前PDF文件名称命名"
              :size="inputAttrs.size"
              :maxlength="formDataLimit.name"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :prefix-icon="inputAttrs.prefixIcon"
              :disabled="disabled"
            />
          </el-form-item>
          <el-form-item label="起始页码">
            <el-input
              v-model.trim="formData.start"
              placeholder="文档转换的起始页码，默认首页开始"
              :size="inputAttrs.size"
              :maxlength="formDataLimit.start"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :prefix-icon="inputAttrs.prefixIcon"
              :disabled="!formData.mode"
              oninput="this.value=this.value.replace(/[^\d]/g,'');"
            />
          </el-form-item>
          <el-form-item label="结束页码">
            <el-input
              v-model.trim="formData.end"
              placeholder="文档转换的结束页码，默认最后一页结束"
              :size="inputAttrs.size"
              :maxlength="formDataLimit.end"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :prefix-icon="inputAttrs.prefixIcon"
              :disabled="!formData.mode"
              oninput="this.value=this.value.replace(/[^\d]/g,'');"
            />
          </el-form-item>
          <el-form-item label="指定页码">
            <el-input
              v-model.trim="formData.pages"
              type="text"
              placeholder="请输入指定转换的指定页码，以,（英文逗号）分割"
              :size="inputAttrs.size"
              :maxlength="formDataLimit.pages"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :prefix-icon="inputAttrs.prefixIcon"
              :disabled="formData.mode"
            />
          </el-form-item>
        </el-form>
      </div>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" type="primary" @click="submit()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { officePDFDetail, officePDFTo } from '@/api/office'

export default {
  name: 'OfficePDFToWord',
  emits: ['close-to-dg'],
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
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      dialogAttrs: {
        title: '转换',
        width: '55%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: false, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: false, // 是否可以通过按下 ESC 关闭 Dialog
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
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 35, // 宽度（像素），默认40
        activeText: '通用页码', // 打开时的文字描述
        inactiveText: '指定页码', // 关闭时的文字描述
        activeValue: true, // 打开时的value
        inactiveValue: false, // 打开时的value
        activeColor: '#ff4949', // 打开时的背景色
        inactiveColor: '#13ce66' // 关闭时的背景色
      },
      formDataLimit: {
        name: 80,
        start: 6,
        end: 6,
        pages: 120
      },
      // data
      formData: {
        name: '', // 新文件名称
        start: '', // 英文名称
        end: '', // 中文名称
        pages: '', // 描述
        mode: true // 模式
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 模式转换
    changeStatus(value) {
      this.formData.mode = value
    },
    openDialog() { // 初始化操作，获取最新数据
      if (!this.rowMd5) {
        this.$emit('close-to-dg', true)
        return false
      }
      this.formData.name = ''
      this.getDNewInfo()
    },
    closeDialog() { // 关闭dg
      this.$emit('close-to-dg', false)
    },
    getDNewInfo() {
      const params = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      // 获取tablerow最新数据
      return new Promise((resolve, reject) => {
        officePDFDetail(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData.start = data.start
            this.formData.end = data.end
            this.formData.pages = data.pages
            this.formData.mode = data.mode
          } else {
            this.$emit('close-to-dg')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submit() { // 提交
      // 页码判断，页码为0，也就是转换下角标0，第一页
      // if (this.formData.start === '0') {
      //   this.$message({
      //     message: '起始页码不允许设置0',
      //     type: 'warning',
      //     duration: 2.0 * 1000
      //   })
      //   return false
      // }
      if (this.formData.end === '0') {
        this.$message({
          message: '结束页码不允许设置0',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      if (this.formData.start && this.formData.end) {
        if (parseInt(this.formData.start) >= parseInt(this.formData.end)) {
          this.$message({
            message: '起始页码不允许小于结束页码',
            type: 'warning',
            duration: 2.0 * 1000
          })
          return false
        }
      }
      // 组件状态
      this.disabled = true
      // loading
      const loading = this.$loading({
        target: document.querySelector('#main-opr-div'), // DOM
        body: false, // 遮罩插入至DOM中的body上，默认false
        fullscreen: true, // 是否全屏
        lock: true, // 是否锁屏
        text: '努力工作中......', // 加载文案
        spinner: 'el-icon-loading', // 加载icon
        background: '', // 背景rgba(0, 0, 0, 0.8)
        class: '' // 自定义样式类
      })
      const data = {
        'rtx_id': store.getters.rtx_id,
        'name': this.formData.name,
        'start': this.formData.start,
        'end': this.formData.end,
        'pages': this.formData.pages,
        'mode': this.formData.mode,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        officePDFTo(data).then(response => {
          // 关闭loading
          this.disabled = false
          loading.close()
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '文件转换成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-to-dg', true)
          }
          resolve(response)
        }).catch(error => {
          // 关闭loading
          this.disabled = false
          loading.close()
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>
.sw-sty {
  text-align: right;
}

</style>
