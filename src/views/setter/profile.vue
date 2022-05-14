<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <!-- user card -->
        <el-col :span="8" :xs="24">
          <user-card :user="user" />
        </el-col>
        <!-- user base info and timeline -->
        <el-col :span="16" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="账户信息" name="account">
                <account :user="user" :rtx="rtx" />
              </el-tab-pane>
              <el-tab-pane label="操作日志" name="timeline">
                <time-line />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './profile/UserCard'
import Timeline from './profile/Timeline'
import Account from './profile/Account'

export default {
  name: 'Profile',
  components: {
    'user-card': UserCard,
    'time-line': Timeline,
    'account': Account
  },
  data() {
    return {
      user: {},
      rtx: '',
      introduction: '',
      activeTab: 'account', // 默认tab
      isTimeLineGet: false // 是否进行重新获取
    }
  },
  computed: {
    ...mapGetters([
      'userObj',
      'rtx_id'
    ])
  },
  created() {
    this.initUser()
  },
  methods: {
    initUser() {
      this.user = this.userObj
      this.rtx = this.rtx_id
      this.introduction = this.userObj.introduction
    },
    refreshTimeLine() {
      this.isTimeLineGet = true
    },
    resetTimeLine() {
      this.isTimeLineGet = false
    }
  }
}
</script>
