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
      @open="openDialog"
      @close="closeDialog"
    >
      <!--title-->
      <template #title>
        <span class="dialog-title">
          <span v-text="dialogAttrs.title" />
          <el-tooltip class="item" effect="dark" content="关闭" placement="top">
            <i class="el-icon-close dialog-title-close" @click="closeDialog" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" :content="fullScreenText" placement="top">
            <i :class="[fullScreenIcon, 'dialog-title-full']" @click="handleFull" />
          </el-tooltip>
        </span>
      </template>
      <!--content-->
      <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto" style="width: 100%">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="RTX名称" prop="name">
              <el-input
                v-model.trim="formData.name"
                type="text"
                placeholder="请输入唯一RTX名称（建议使用英文）"
                :maxlength="menuLimit.name"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="显示名称" prop="title">
              <el-input
                v-model.trim="formData.title"
                type="text"
                placeholder="请输入菜单左侧显示名称"
                :maxlength="menuLimit.title"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 通用参数 -->
        <el-divider content-position="left">通用参数</el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="请求地址" prop="path">
              <el-input
                v-model.trim="formData.path"
                type="text"
                placeholder="请输入功能访问URL"
                :maxlength="menuLimit.path"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="图标" prop="icon">
              <el-input
                v-model.trim="formData.icon"
                type="text"
                placeholder="请输入菜单左侧显示图标"
                :maxlength="menuLimit.icon"
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
            <el-form-item label="上级菜单" prop="pid">
              <el-select
                v-model="formData.pid"
                style="width: 100%"
                placeholder="请选择上级菜单"
                :filterable="selectAttrs.fa"
                :multiple="selectAttrs.multiple"
                :multiple-limit="selectAttrs.limit"
                :clearable="selectAttrs.clearable"
                :no-data-text="selectAttrs.noDataText"
                :collapse-tags="selectAttrs.collapseTags"
                :disabled="disabled"
              >
                <el-option-group
                  v-for="group in menuSelect"
                  :key="group.label"
                  :label="group.label"
                >
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-option-group>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="级别" prop="level">
              <el-select
                v-model="formData.level"
                style="width: 100%"
                placeholder="请选择级别"
                :filterable="selectAttrs.filterable"
                :multiple="selectAttrs.multiple"
                :multiple-limit="selectAttrs.limit"
                :clearable="selectAttrs.clearable"
                :no-data-text="selectAttrs.noDataText"
                :collapse-tags="selectAttrs.collapseTags"
                :disabled="disabled"
              >
                <el-option
                  v-for="(item, index) in levelEnum"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="快捷入口" prop="shortcut">
              <el-select
                v-model="formData.shortcut"
                style="width: 100%"
                placeholder="请选择是否设置快捷入口"
                :filterable="selectAttrs.filterable"
                :multiple="selectAttrs.multiple"
                :multiple-limit="selectAttrs.limit"
                :clearable="selectAttrs.clearable"
                :no-data-text="selectAttrs.noDataText"
                :collapse-tags="selectAttrs.collapseTags"
                :disabled="disabled"
              >
                <el-option
                  v-for="(item, index) in boolEnum"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 开发者配置 -->
        <el-divider content-position="left">开发者配置</el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="组件" prop="component">
              <el-tooltip content="菜单对应的VUE前端开发组件名称" placement="top" effect="light">
                <el-input
                  v-model.trim="formData.component"
                  type="text"
                  placeholder="请输入菜单mapping组件"
                  :maxlength="menuLimit.component"
                  :clearable="inputAttrs.clear"
                  :show-word-limit="inputAttrs.limit"
                  :size="inputAttrs.size"
                  :prefix-icon="inputAttrs.prefixIcon"
                  :disabled="disabled"
                />
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="重定向" prop="redirect">
              <el-tooltip content="一级菜单的重定向属性" placement="top" effect="light">
                <el-input
                  v-model.trim="formData.redirect"
                  type="text"
                  placeholder="请输入重定向的URL"
                  :maxlength="menuLimit.redirect"
                  :clearable="inputAttrs.clear"
                  :show-word-limit="inputAttrs.limit"
                  :size="inputAttrs.size"
                  :prefix-icon="inputAttrs.prefixIcon"
                  :disabled="disabled"
                />
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Hidden属性" prop="hidden">
              <el-tooltip content="是否在菜单栏中隐藏，建议值为否（显示）" placement="top" effect="light">
                <el-select
                  v-model="formData.hidden"
                  style="width: 100%"
                  placeholder="请选择Hidden属性"
                  :filterable="selectAttrs.filterable"
                  :multiple="selectAttrs.multiple"
                  :multiple-limit="selectAttrs.limit"
                  :clearable="selectAttrs.clearable"
                  :no-data-text="selectAttrs.noDataText"
                  :collapse-tags="selectAttrs.collapseTags"
                  :disabled="disabled"
                >
                  <el-option
                    v-for="(item, index) in boolEnum"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Cache属性" prop="cache">
              <el-tooltip content="是否缓存菜单页码，建议值为是（缓存）" placement="top" effect="light">
                <el-select
                  v-model="formData.cache"
                  style="width: 100%"
                  placeholder="请选择Cache属性"
                  :filterable="selectAttrs.filterable"
                  :multiple="selectAttrs.multiple"
                  :multiple-limit="selectAttrs.limit"
                  :clearable="selectAttrs.clearable"
                  :no-data-text="selectAttrs.noDataText"
                  :collapse-tags="selectAttrs.collapseTags"
                  :disabled="disabled"
                >
                  <el-option
                    v-for="(item, index) in boolEnum"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Affix属性" prop="affix">
              <el-tooltip content="是否固定在TagView（标签视图）中，建议值为否（不固定）" placement="top" effect="light">
                <el-select
                  v-model="formData.affix"
                  style="width: 100%"
                  placeholder="请选择Affix属性"
                  :filterable="selectAttrs.filterable"
                  :multiple="selectAttrs.multiple"
                  :multiple-limit="selectAttrs.limit"
                  :clearable="selectAttrs.clearable"
                  :no-data-text="selectAttrs.noDataText"
                  :collapse-tags="selectAttrs.collapseTags"
                  :disabled="disabled"
                >
                  <el-option
                    v-for="(item, index) in boolEnum"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Breadcrumb属性" prop="breadcrumb">
              <el-tooltip content="是否在顶部菜单面包屑中进行显示，建议值为是（显示）" placement="top" effect="light">
                <el-select
                  v-model="formData.breadcrumb"
                  style="width: 100%"
                  placeholder="请选择Breadcrumb属性"
                  :filterable="selectAttrs.filterable"
                  :multiple="selectAttrs.multiple"
                  :multiple-limit="selectAttrs.limit"
                  :clearable="selectAttrs.clearable"
                  :no-data-text="selectAttrs.noDataText"
                  :collapse-tags="selectAttrs.collapseTags"
                  :disabled="disabled"
                >
                  <el-option
                    v-for="(item, index) in boolEnum"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submitSetMenu()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { menuAddInit, menuAdd } from '@/api/manage'
import store from '@/store'

export default {
  name: 'MenuAdd',
  emits: [
    'close-add-menu'
  ],
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
      labelPosition: 'right', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      fullScreenStatus: false, // DIALOG是否全屏状态，默认false
      fullScreenIcon: 'el-icon-full-screen', // DIALOG全屏图标
      fullScreenText: '全屏', // DIALOG全屏文本提示
      dialogAttrs: {
        title: '新增',
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
      selectAttrs: { // select attrs
        multiple: false, // 多选
        clearable: true, // 清空选择
        filterable: false, // 搜索功能false
        fa: true, // 搜索功能true
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '' // 默认显示内容
      },
      menuLimit: {
        name: 25,
        path: 35,
        title: 25,
        level: 1,
        shortcut: 1,
        component: 25,
        hidden: 1,
        redirect: 55,
        icon: 25,
        cache: 1,
        affix: 1,
        breadcrumb: 1
      },
      formData: { // menu object
        name: '',
        title: '',
        path: '',
        icon: '',
        pid: '',
        level: '',
        component: '',
        redirect: '',
        hidden: '',
        cache: '',
        affix: '',
        breadcrumb: '',
        shortcut: ''
      },
      formDataRules: {
        name: [
          { required: true, message: '请输入RTX名称', trigger: ['blur', 'change'] },
          { min: 1, max: 25, message: 'RTX名称最大长度为25', trigger: ['blur', 'change'] }
        ],
        path: [
          { required: true, message: '请输入功能访问URL', trigger: ['blur', 'change'] },
          { min: 1, max: 35, message: '请求地址最大长度为35', trigger: ['blur', 'change'] }
        ],
        title: [
          { required: true, message: '请输入显示名称', trigger: ['blur', 'change'] },
          { min: 1, max: 25, message: '显示名称最大长度为25', trigger: ['blur', 'change'] }
        ],
        pid: [
          { required: true, message: '请选择上级菜单', trigger: ['blur', 'change'] }
        ],
        level: [
          { required: true, message: '请选择菜单级别', trigger: ['blur', 'change'] }
        ],
        icon: [
          { required: true, message: '请输入菜单图标', trigger: ['blur', 'change'] },
          { min: 1, max: 25, message: '显示图标最大长度为25', trigger: ['blur', 'change'] }
        ],
        component: [
          { required: true, message: '请输入菜单组件', trigger: ['blur', 'change'] },
          { min: 1, max: 25, message: '菜单组件最大长度为25', trigger: ['blur', 'change'] }
        ],
        hidden: [
          { required: true, message: '请选择Hidden属性', trigger: ['blur', 'change'] }
        ],
        cache: [
          { required: true, message: '请选择cache属性', trigger: ['blur', 'change'] }
        ],
        affix: [
          { required: true, message: '请选择Affix属性', trigger: ['blur', 'change'] }
        ],
        breadcrumb: [
          { required: true, message: '请选择Breadcrumb属性', trigger: ['blur', 'change'] }
        ],
        shortcut: [
          { required: true, message: '请选择是否设置快捷入口', trigger: ['blur', 'change'] }
        ]
      },
      menuSelect: {}, // menu select list
      levelEnum: [],
      boolEnum: []
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
    closeDialog() {
      this.$emit('close-add-menu', false)
    },
    openDialog() { // 初始化数据 && 枚举列表
      // 清空参数
      this.formData.name = ''
      this.formData.title = ''
      this.formData.path = ''
      this.formData.icon = ''
      this.formData.pid = ''
      this.formData.level = ''
      this.formData.component = ''
      this.formData.redirect = ''
      this.formData.hidden = ''
      this.formData.cache = ''
      this.formData.affix = ''
      this.formData.breadcrumb = ''
      this.formData.shortcut = ''
      // 初始化非全屏
      this.fullScreenStatus = false
      this.$nextTick(() => {
        this.getDNewInfo()
        // 重置表单状态
        this.$refs.formData.resetFields()
      })
    },
    getDNewInfo() {
      // 获取初始化枚举列表
      const params = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      return new Promise((resolve, reject) => {
        menuAddInit(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.levelEnum = data.level_enmus
            this.boolEnum = data.bool_enmus
            this.menuSelect = data.menu_options
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    submitSetMenu() {
      const data = {
        rtx_id: store.getters.rtx_id,
        md5: this.rowMd5,
        name: this.formData.name,
        title: this.formData.title,
        path: this.formData.path,
        icon: this.formData.icon,
        pid: this.formData.pid,
        level: this.formData.level,
        component: this.formData.component,
        redirect: this.formData.redirect,
        hidden: this.formData.hidden,
        cache: this.formData.cache,
        affix: this.formData.affix,
        breadcrumb: this.formData.breadcrumb,
        shortcut: this.formData.shortcut
      }
      // menu add
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          return new Promise((resolve, reject) => {
            menuAdd(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '菜单新增成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('close-add-menu', true)
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
