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
      @open="openDialog"
      @close="closeDialog"
    >
      <el-form ref="menuForm" :label-position="labelPosition" label-width="auto">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="菜单ID">
              <el-input
                v-model.trim="menuObject.id"
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
                v-model.trim="menuObject.name"
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
                v-model.trim="menuObject.title"
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
        <el-row><h3>通用参数：</h3></el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="请求地址">
              <el-input
                v-model.trim="menuObject.path"
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
                v-model.trim="menuObject.icon"
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
                v-model="menuObject.pid"
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
                v-model="menuObject.level"
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
            <el-form-item label="排序ID">
              <el-input
                v-model.trim="menuObject.order_id"
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
        <el-row><h3>开发者配置：</h3></el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="组件">
              <el-input
                v-model.trim="menuObject.component"
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
                v-model.trim="menuObject.redirect"
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
                v-model="menuObject.hidden"
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
                v-model="menuObject.cache"
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
                v-model="menuObject.affix"
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
                v-model="menuObject.breadcrumb"
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
        <el-row><h3>拓展信息：</h3></el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="创建者RTX">
              <el-input
                v-model.trim="menuObject.create_rtx"
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
                v-model.trim="menuObject.create_time"
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
        <div v-show="menuObject.is_del">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="禁用者RTX">
                <el-input
                  v-model.trim="menuObject.delete_rtx"
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
                  v-model.trim="menuObject.delete_time"
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
      menuObject: {}, // menu object
      menuSelect: {}, // menu select list
      levelEnum: [],
      boolEnum: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    closeDialog() {
      this.$emit('close-detail-menu')
    },
    openDialog() { // 初始化数据 && 枚举列表
      const params = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.rowMd5
      }
      // 获取menu detail
      return new Promise((resolve, reject) => {
        menuDetail(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.menuObject = data.menu
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
