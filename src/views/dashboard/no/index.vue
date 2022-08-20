<template>
  <div class="dashboard-no-container">
    <!-- user avatar -->
    <div class="clearfix">
      <pan-thumb :image="avatar" style="float: left">
        <div style="margin-top: 15px;">Hello</div>
        <div class="user-name text-center" style="margin-top: 20px;color: red;">{{ rtx_id }}</div>
      </pan-thumb>
      <!--<github-corner :url="github" :image-height="60" :image-width="60" style="position: absolute; border: 0; top: 0; right: 0;" />-->
      <div class="info-container">
        <span class="display_name">{{ rtx_id }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">践行践远，智慧前行</span>
      </div>
    </div>
    <!-- main[gif] -->
    <div>
      <img :src="gif" class="emptyGif">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
// import GithubCorner from '@/components/GithubCorner'

export default {
  name: 'DashboardNo',
  components: {
    'pan-thumb': PanThumb
    // 'github-corner': GithubCorner
  },
  data() {
    return {
      gif: 'http://2lstore.pygo2.top/avatars/sun-lit.gif',
      github: 'https://github.com/GIS90/open2lisapi.git',
      // 头像设置
      image: {
        height: '150px',
        width: '150px'
      }
    }
  },
  computed: {
    ...mapGetters({
      rtx_id: 'rtx_id',
      avatar: 'avatar'
    })
  }
}
</script>

<style lang="scss" scoped>
  .emptyGif {
    display: block;
    width: 35%;
    margin: 0 auto;
  }

  .dashboard-no-container {
    background-color: rgb(240, 242, 245); // #eee #e3e3e3
    min-height: 100vh;
    padding: 50px 60px 0px;
    .pan-info-roles {
      font-size: 12px;
      font-weight: 700;
      color: #333;
      display: block;
    }
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>
