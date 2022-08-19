<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import DashboardNo from './no'
import { adminRoleRtx } from '@/settings.js'

export default {
  name: 'Dashboard',
  components: {
    adminDashboard,
    DashboardNo
  },
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
    if (this.roles.includes(adminRoleRtx)) { // 管理员
      this.currentRole = 'adminDashboard'
    } else {
      this.currentRole = 'DashboardNo' // 无role判断DashboardNo
    }
  }
}
</script>
