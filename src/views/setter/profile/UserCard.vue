<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <strong>About me</strong>
    </div>

    <div class="user-profile">
      <!-- user avatar -->
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="image.height" :width="image.width" :hoverable="false">
          <div style="margin-top: 15px;">Hello</div>
          <div class="user-name text-center" style="margin-top: 20px;color: red;">{{ user.rtx_id }}</div>
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
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>自我介绍</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <div class="user-introduction text-muted">{{ user.introduction }}</div>
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>IT技能</span></div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>Vue</span>
            <el-progress :percentage="40" />
          </div>
          <div class="progress-item">
            <span>JavaScript</span>
            <el-progress :percentage="30" />
          </div>
          <div class="progress-item">
            <span>Python</span>
            <el-progress :percentage="85" />
          </div>
          <div class="progress-item">
            <span>摸鱼</span>
            <el-progress :percentage="100" status="success" />
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import Avatar from './Avatar'

export default {
  name: 'UserCard',
  components: {
    'pan-thumb': PanThumb,
    'avatar': Avatar
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
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
      // 头像设置
      image: {
        height: '150px',
        width: '150px'
      }
    }
  },
  methods: {
    updateAvatar(value) {
      this.user.avatar = value
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
</style>
