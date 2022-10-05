<template>
  <div class="drawer-container">
    <!-- 登录人 -->
    <h3>欢迎，<span class="info_red"> {{ rtx_id }}</span></h3>
    <!-- 系统基础信息 -->
    <div v-show="info">
      <h3 class="drawer-title">系统信息</h3>
      <!-- 系统名称 -->
      <div class="drawer-item">
        <span>系统名称</span>
        <span class="drawer-switch">{{ info.name }}</span>
      </div>
      <!-- 版本号 -->
      <div class="drawer-item">
        <span>版本号</span>
        <span class="drawer-switch">{{ info.version }}</span>
      </div>
      <!-- 创建人 -->
      <div class="drawer-item">
        <span>管理员</span>
        <span class="drawer-switch">{{ info.author }}</span>
      </div>
      <!-- 前端Github -->
      <div class="drawer-item">
        <span>前端Github</span>
        <a target="_blank" :href="info.furl" class="drawer-switch github_a">
          <svg-icon icon-class="c-github-f" />
        </a>
      </div>
      <!-- 后端Github -->
      <div class="drawer-item">
        <span>后端Github</span>
        <a target="_blank" :href="info.burl" class="drawer-switch github_a">
          <svg-icon icon-class="c-github-b" />
        </a>
      </div>
    </div>
    <!-- 系统布局配置 -->
    <div>
      <h3 class="drawer-title">布局配置</h3>
      <!-- 主题色 -->
      <div class="drawer-item">
        <span>主题色</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange" />
      </div>
      <!-- Tags-View -->
      <div class="drawer-item">
        <span>开启 Tags-View</span>
        <el-switch v-model="tagsView" class="drawer-switch" />
      </div>
      <!-- Header -->
      <div class="drawer-item">
        <span>固定 Header</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>
      <!-- Logo -->
      <div class="drawer-item">
        <span>侧边栏 Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'
import { baseInfo } from '@/settings.js'
import { mapGetters } from 'vuex'

export default {
  components: { ThemePicker },
  data() {
    return {
      // 默认值
      info: baseInfo || {
        name: 'OpenTool-Z',
        version: 'V1.2.1',
        author: 'PyGo²',
        furl: 'https://github.com/GIS90',
        burl: 'https://github.com/GIS90/open2lisapi.git'
      }
    }
  },
  computed: {
    ...mapGetters([
      'rtx_id'
    ]),
    fixedHeader: {
      get() {
        return this.$store.state.settings.fixedHeader
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val
        })
      }
    },
    tagsView: {
      get() {
        return this.$store.state.settings.tagsView
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    },
    sidebarLogo: {
      get() {
        return this.$store.state.settings.sidebarLogo
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}

.github_a {
  font-size: 25px;
  color: rgb(32, 160, 255);
}

.github_a:hover {
  font-size: 32px;
  color: red;
  font-style:italic;
}
</style>
