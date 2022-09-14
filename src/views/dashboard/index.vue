<template>
  <div>
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DashboardAdmin from './admin'
import DashboardNo from './no'
import { adminRoleRtx } from '@/settings.js'

export default {
  name: 'Dashboard',
  components: {
    DashboardAdmin,
    DashboardNo
  },
  data() {
    return {
      currentRole: 'DashboardAdmin' // 默认
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
      this.currentRole = 'DashboardAdmin'
    } else {
      this.currentRole = 'DashboardAdmin' // 无role判断DashboardNo
    }
  }
}
</script>
