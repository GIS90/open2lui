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
        <!-- 摘要 -->
        <el-row :gutter="20">
          <!-- 摘要：作者 -->
          <el-col :span="8">
            <el-form-item label="作者" prop="author">
              <el-select
                v-model.trim="formData.author"
                style="width: 90%"
                :size="selectAttrs.size"
                :placeholder="selectAttrs.placeholder"
                :disabled="disabled"
                :filterable="selectAttrs.filterable"
                :multiple="selectAttrs.multiple"
                :multiple-limit="formDataLimit.author"
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
          </el-col>
          <!-- 摘要：时间 -->
          <el-col :span="8">
            <el-form-item label="发布时间" prop="time">
              <el-date-picker
                v-model="formData.time"
                :type="timeAttrs.type"
                :format="timeAttrs.format"
                :placeholder="timeAttrs.placeholder"
                :align="timeAttrs.align"
                :readonly="timeAttrs.readonly"
                :editable="timeAttrs.editable"
                :clearable="timeAttrs.clearable"
                :size="timeAttrs.size"
                :picker-options="timeAttrs.pickerOptions"
                :disabled="disabled"
                style="width: 90%"
              />
            </el-form-item>
          </el-col>
          <!-- 摘要：推荐度 -->
          <el-col :span="8">
            <el-form-item label="推荐度" prop="recommend">
              <el-rate
                v-model="formData.recommend"
                :max="rateAttrs.max"
                :allow-half="rateAttrs.half"
                :low-threshold="rateAttrs.lowThreshold"
                :high-threshold="rateAttrs.highThreshold"
                :colors="rateAttrs.colors"
                :show-text="rateAttrs.showText"
                :text-color="rateAttrs.textColor"
                :texts="rateAttrs.texts"
                :disabled="disabled"
                style="display:inline-block"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 标题 -->
        <el-row>
          <el-form-item label="标题" prop="title">
            <el-input
              v-model.trim="formData.title"
              type="text"
              placeholder="请输入文章标题"
              :maxlength="formDataLimit.title"
              :clearable="inputAttrs.clear"
              :show-word-limit="inputAttrs.limit"
              :size="inputAttrs.size"
              :prefix-icon="inputAttrs.prefixIcon"
              :disabled="disabled"
            />
          </el-form-item>
        </el-row>
        <!-- 标签 -->
        <el-row>
          <editor-wang :content="formData.html" @on-change-html="OnChangeHtml" />
        </el-row>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="info" @click.native.prevent="submit(2)">存草稿箱</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submit(1)">发布</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import EditorWang from '@/components/EditorWang'
import { getUserKVList } from '@/api/manage'
import { sqlbaseAdd } from '@/api/search'

const validateRecommend = (rule, value, callback) => {
  if (value === 0) {
    callback(new Error('请选择推荐度'))
  } else if (value > 3) {
    callback(new Error('请选择正确的推荐度'))
  } else if (value < 0) {
    callback(new Error('请选择正确的推荐度'))
  } else {
    callback()
  }
}

export default {
  name: 'SqlBaseAddEditor',
  components: {
    'editor-wang': EditorWang
  },
  emits: ['close-add-dg'],
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
  inject: {},
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '新增',
        width: '85%', // Dialog 的宽度
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
      selectAttrs: { // select attrs
        size: 'medium', // 大小：''/medium/small/mini
        multiple: false, // 多选
        clearable: true, // 清空选择
        filterable: true, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 1, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '请选择作者' // 默认显示内容
      },
      timeAttrs: { // date time attrs
        type: 'datetime', // 显示类型：year/month/date/week/datetime/datetimerange/daterange
        format: 'yyyy-MM-dd HH:mm:ss', // 显示在输入框中的格式
        align: 'left', // 对齐方式: left, center, right
        readonly: false, // 只读
        editable: false, // 文本框可输入
        clearable: true, // 是否显示清除按钮
        size: 'medium', // 大小：''/medium/small/mini
        placeholder: '请选择时间', // 默认显示内容
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }, {
            text: '一月前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', date)
            }
          }, {
            text: '一年前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 365)
              picker.$emit('pick', date)
            }
          }]
        }
      },
      rateAttrs: {
        max: 3, // 最大分
        half: false, // 是否允许半选
        lowThreshold: 1, // 低分和中等分数的界限值，值本身被划分在低分中
        highThreshold: 2.5, // 高分和中等分数的界限值，值本身被划分在高分中
        showText: true, // 是否显示辅助文字
        textColor: '#1F2D3D', // 辅助文字颜色
        texts: ['一般', '常用', '频繁'], // 辅助文字数组
        colors: ['#99A9BF', '#F7BA2A', '#FF0000'] // 颜色
      },
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      formData: {
        title: '', // 标题
        label: [], // 标签
        html: '', // 内容
        author: '', // 作者，默认当前登录人
        time: '', // 时间
        recommend: 0 // 推荐度
      },
      formDataLimit: {
        title: 55, // 标题
        html: '' // 内容
      },
      formDataRules: {
        title: [
          { required: true, message: '请输入标题', trigger: ['blur', 'change'] },
          { min: 1, max: 55, message: '标题最大长度为55', trigger: ['blur', 'change'] }
        ],
        author: [
          { required: true, message: '请选择作者', trigger: ['blur', 'change'] }
        ],
        time: [
          { required: true, message: '请选择发布时间', trigger: ['blur', 'change'] }
        ],
        recommend: [
          { validator: validateRecommend, trigger: 'change' }
        ]
      },
      userList: [
        { key: store.getters.rtx_id, value: store.getters.rtx_id } // 默认当前用户
      ]
    }
  },
  computed: {
    titleLength() {
      return this.formData.title.length
    }
  },
  watch: {
    fullScreenStatus(newVal, oldVal) {
      newVal ? this.fullScreenIcon = 'el-icon-copy-document' : this.fullScreenIcon = 'el-icon-full-screen'
      newVal ? this.fullScreenText = '缩小' : this.fullScreenText = '全屏'
    }
  },
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作，获取最新数据
      // 初始化非全屏
      this.fullScreenStatus = false
      // 初始化form data
      this.formData.title = ''
      this.formData.label = []
      this.formData.html = ''
      this.formData.author = store.getters.rtx_id
      this.formData.time = ''
      this.formData.recommend = 0
      this.$nextTick(() => {
        this.getUserList()
        // 重置表单状态
        this.$refs.formData.resetFields()
      })
    },
    closeDialog() { // 关闭dg
      // 清空表单状态
      this.$refs.formData.clearValidate()
      this.$emit('close-add-dg', false)
    },
    handleFull() { // 是否全屏model
      this.fullScreenStatus = !this.fullScreenStatus
    },
    getUserList() {
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        getUserKVList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.userList = data.list
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    OnChangeHtml(html) {
      if (this.formData.html !== html) {
        this.formData.html = html
      }
    },
    submit(type) { // 提交
      this.$refs.formData.validate(valid => {
        if (valid) {
          if (![1, 2].includes(type)) {
            type = 1
          }
          if (!this.formData.html) {
            this.$message({
              message: '请输入内容',
              type: 'warning',
              duration: 2.0 * 1000
            })
            return false
          }

          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'title': this.formData.title,
            'author': this.formData.author,
            'recommend': this.formData.recommend,
            'summary': '',
            'label': '',
            'public': type === 1,
            'public_time': this.formData.time,
            'content': this.formData.html
          }
          return new Promise((resolve, reject) => {
            sqlbaseAdd(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '新增成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-add-dg', true)
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
  },
  setup: {}
}
</script>

<style scoped>
</style>
