<template>
  <div>
    <el-drawer
      :visible="show"
      title="字段说明"
      :modal="drawerAttrs.modal"
      :direction="drawerAttrs.arrow"
      :show-close="drawerAttrs.closeButton"
      :close-on-click-modal="drawerAttrs.closeOnModal"
      :close-on-press-escape="drawerAttrs.closeOnEsc"
      @close="close()"
    >
      <div class="app-container tip">
        帮助快速了解菜单信息。
        <ol>
          <li>菜单ID：ID</li>
          <li>RTX名称：唯一标识，子菜单基于父菜单（一级）RTX名称进行拓展，采用驼峰写法，不可更改信息</li>
          <li>中文名称：菜单中文名称，为系统左侧的菜单栏显示内容</li>
          <li>请求地址：访问菜单功能的URL地址信息</li>
          <li>菜单图标：显示左侧菜单栏的图标</li>
          <li>上级菜单：菜单的父节点</li>
          <li>级别：一级菜单、二级菜单</li>
          <li>组件：配置菜单对应VUE前端开发组件名称（<span class="info_red">开发者参数配置</span>）</li>
          <li>重定向：用于一级菜单配置，访问或者转发URL时进行的Redirect URL跳转（<span class="info_red">开发者参数配置</span>）</li>
          <li>Hidden属性：是否在菜单栏中隐藏，建议值为否（显示），如果设置为是，项目将不会显示在菜单栏中（<span class="info_red">开发者参数配置</span>）</li>
          <li>noCache属性：是否缓存菜单页码，建议值为否（缓存），如果设置为是，则不会缓存页面（<span class="info_red">开发者参数配置</span>）</li>
          <li>Affix属性：是否固定在TagView（标签视图）中，建议值为否（不固定），如果设置为是，菜单标签将固定在TagView（<span class="info_red">开发者参数配置</span>）</li>
          <li>Breadcrumb属性：是否在顶部菜单面包屑中进行显示，建议值为是（显示），如果设置为否，则隐藏在面包屑中（<span class="info_red">开发者参数配置</span>）</li>
          <li>创建时间：菜单创建时间</li>
          <li>创建者RTX：菜单创建用户的RTX-ID</li>
        </ol>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'MenuTip',
  emits: ['close-tip'],
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
      drawer: true,
      // drawer attributes
      drawerAttrs: {
        arrow: 'rtl', // 方向：rtl / ltr / ttb / btt
        modal: false, // 是否需要遮罩层：true / false
        closeButton: true, // 是否显示关闭按钮：true / false
        closeOnModal: true, // 是否可以通过点击modal关闭Drawer：true / false
        closeOnEsc: true // 是否可以通过按下ESC关闭Drawer：true / false
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    close() {
      this.$emit('close-tip')
    }
  }
}
</script>

<style scoped>
.tip {
  font-size: 14px;
  line-height: 180%;
  letter-spacing: 1px;
}
</style>
