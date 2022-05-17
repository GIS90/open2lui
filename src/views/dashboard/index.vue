<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import { adminRoleRtx } from '@/settings.js'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    // 配置不同角色进入Dashboard展示内容
    if (!this.roles.includes(adminRoleRtx)) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
