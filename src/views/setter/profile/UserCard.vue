<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <strong>一个人的自我修养</strong>
    </div>

    <div class="user-profile">
      <!-- user avatar -->
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="image.height" :width="image.width" :hoverable="false">
          <div class="user-name" style="margin-top: 15px;color: red;">{{ user.rtx_id }}</div>
          <div class="text-center" style="margin-top: 20px;">
            <el-button id="btn-random-avatar" :type="btnBaseAttrs.type" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" @click="openRandomAvatar">
              隐藏功能!
            </el-button>
          </div>
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
      </div>
      <div class="box-center">
        <avatar :avatar="user.avatar" @update-avatar="updateAvatar" />
      </div>
    </div>
    <!-- user introduction -->
    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" style="color: red" /><span>自我介绍</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <div class="user-introduction text-muted">{{ user.introduction }}</div>
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>IT技能</span></div>
        <div class="user-bio-section-body">
          <div v-for="item in itValues" :key="item.id" class="progress-item">
            <span class="progress-item-label">{{ item.text }}</span>
            <div class="progress-item-shape">
              <el-row :gutter="10">
                <el-col :span="2">
                  <el-button icon="el-icon-minus" size="mini" circle @click="decrease(item.name)" />
                </el-col>
                <el-col :span="20">
                  <el-progress :percentage="item.value" :color="customColors" :type="item.type" :format="formatPercent" class="progress-item-shape-p" />
                </el-col>
                <el-col :span="2">
                  <el-button icon="el-icon-plus" size="mini" circle @click="increase(item.name)" />
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- user random avatar -->
    <random-avatar :show="randomStatus" @close-random-avatar="closeRandomAvatar" @update-avatar="updateAvatar" />
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import Avatar from './Avatar'
import RandomAvatar from './RandomAvatar'

export default {
  name: 'UserCard',
  components: {
    'pan-thumb': PanThumb,
    'avatar': Avatar,
    'random-avatar': RandomAvatar
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          rtx_id: '',
          name: '',
          email: '',
          phone: '',
          introduction: '',
          avatar: ''
        }
      }
    }
  },
  data() {
    return {
      // button attributes
      btnBaseAttrs: {
        size: 'small', // 大小 medium / small / mini / ''
        type: 'danger', // 类型 primary / success / warning / danger / info / text
        plain: false, // 是否为朴素按钮
        round: true, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      // 头像设置
      image: {
        height: '150px',
        width: '150px'
      },
      randomStatus: false, // 随机头像功能状态
      customColors: [
        { color: '#1989fa', percentage: 20 },
        { color: '#5cb87a', percentage: 40 },
        { color: '#6f7ad3', percentage: 60 },
        { color: '#e6a23c', percentage: 80 },
        { color: '#f56c6c', percentage: 100 }
      ],
      // IT values
      itValues: {
        itHtml: { id: 1, name: 'itHtml', text: '前端', type: 'line', value: 40 },
        itBack: { id: 2, name: 'itBack', text: '后台', type: 'line', value: 65 },
        itOps: { id: 3, name: 'itOps', text: '运维', type: 'line', value: 35 },
        itFish: { id: 4, name: 'itFish', text: '摸鱼', type: 'line', value: 50 },
        itLive: { id: 5, name: 'itLive', text: '能量值', type: 'dashboard', value: 99 }
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // 初始化IT值
      this.initITValues()
    })
  },
  methods: {
    updateAvatar(value) {
      this.user.avatar = value
    },
    openRandomAvatar() {
      this.randomStatus = true
    },
    closeRandomAvatar() {
      this.randomStatus = false
    },
    initITValues() {
      for (const item in this.itValues) {
        this.itValues[item].value = localStorage[item] ? parseInt(localStorage[item]) : 20 ?? 20
      }
    },
    formatPercent(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    decrease(progress) {
      let value = this.itValues[progress]?.value ?? 0
      value -= 1
      // 0 <= 百分比 <= 100
      if (value > 100) {
        value = 100
      }
      if (value < 0) {
        value = 0
      }
      this.itValues[progress].value = value
      localStorage[progress] = value
    },
    increase(progress) {
      let value = this.itValues[progress]?.value ?? 0
      value += 1
      // 0 <= 百分比 <= 100
      if (value > 100) {
        value = 100
      }
      if (value < 0) {
        value = 0
      }
      this.itValues[progress].value = value
      localStorage[progress] = value
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
    text-align: center;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-introduction {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
.avatar-btn {
  padding: 13px 25px !important;
  //background-color: #0a76a4 !important;
}

// IT样式
.progress-item {
  margin-top: 15px;
}

.progress-item-label {
  font-weight: 400;
}

.progress-item-shape {
  text-align: center;
  margin-top: 5px;
}

.progress-item-shape-p {
  margin-top: 5px;
}
</style>
