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
      <el-form ref="formData" :label-position="labelPosition" label-width="auto" style="width: 100%">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="菜单ID">
              <el-input
                v-model.trim="formData.id"
                type="text"
                placeholder="菜单ID"
                :maxlength="menuLimit.id"
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
            <el-form-item label="RTX名称">
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
            <el-form-item label="中文名称">
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
            <el-form-item label="请求地址">
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
            <el-form-item label="图标">
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
            <el-form-item label="上级菜单">
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
            <el-form-item label="级别">
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
            <el-form-item label="快捷入口">
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
          <el-col :span="12">
            <el-form-item label="排序ID">
              <el-input
                v-model.trim="formData.order_id"
                type="text"
                placeholder="请输入菜单左侧排序ID，ID值越小位置在前面"
                :maxlength="menuLimit.order_id"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 开发者配置 -->
        <el-divider content-position="left">开发者配置</el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="组件">
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
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="重定向">
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
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Hidden属性">
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
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Cache属性">
              <el-select
                v-model="formData.cache"
                style="width: 100%"
                placeholder="请选择cache属性"
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
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Affix属性">
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
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Breadcrumb属性">
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
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 拓展信息 -->
        <el-divider content-position="left">拓展信息</el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="创建者RTX">
              <el-input
                v-model.trim="formData.create_rtx"
                type="text"
                placeholder="创建者RTX"
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
            <el-form-item label="创建时间">
              <el-input
                v-model.trim="formData.create_time"
                type="text"
                placeholder="创建时间"
                :maxlength="menuLimit.time"
                :clearable="inputAttrs.clear"
                :show-word-limit="inputAttrs.limit"
                :size="inputAttrs.size"
                :prefix-icon="inputAttrs.prefixIcon"
                :disabled="disabled"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <div v-if="formData.is_del">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="禁用者RTX">
                <el-input
                  v-model.trim="formData.delete_rtx"
                  type="text"
                  placeholder="禁用者RTX"
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
              <el-form-item label="禁用时间">
                <el-input
                  v-model.trim="formData.delete_time"
                  type="text"
                  placeholder="禁用时间"
                  :maxlength="menuLimit.time"
                  :clearable="inputAttrs.clear"
                  :show-word-limit="inputAttrs.limit"
                  :size="inputAttrs.size"
                  :prefix-icon="inputAttrs.prefixIcon"
                  :disabled="disabled"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { menuDetail } from '@/api/manage'
import store from '@/store'

export default {
  name: 'MenuDetail',
  emits: [
    'close-detail-menu'
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
    },
    rowMd5: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
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
        id: 3,
        name: 25,
        path: 35,
        title: 25,
        level: 1,
        shortcut: 1,
        component: 25,
        hidden: 1,
        redirect: 55,
        icon: 25,
        order_id: 5,
        cache: 1,
        affix: 1,
        breadcrumb: 1,
        time: 25
      },
      formData: {}, // menu object
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
      this.$emit('close-detail-menu')
    },
    openDialog() { // 初始化数据 && 枚举列表
      // 初始化非全屏
      this.fullScreenStatus = false

      const params = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      // 获取menu detail
      return new Promise((resolve, reject) => {
        menuDetail(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.formData = data.menu
            this.levelEnum = data.level_enmus
            this.boolEnum = data.bool_enmus
            this.menuSelect = data.menu_options
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
