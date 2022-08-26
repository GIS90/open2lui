<template>
  <div>
    <!-- 快捷入口 -->
    <el-row class="row-group">
      <!-- 功能快捷菜单 -->
      <el-col v-for="(item, index) of shortCutData" :key="index" :xs="8" :sm="6" :md="6" :lg="3" :xl="2" class="card-box">
        <el-tooltip :content="item.name" placement="top" effect="dark">
          <router-link :to="{ path: item.path }">
            <div class="card-box-icon-wrapper card-box-icon-div">
            <svg-icon :icon-class="item.icon" class-name="card-box-icon" />
            </div>
          </router-link>
        </el-tooltip>
      </el-col>
      <!-- 功能快捷编辑 -->
      <el-col :xs="8" :sm="6" :md="6" :lg="3" :xl="2" class="card-box">
        <el-tooltip content="快捷功能编辑" placement="top" effect="dark">
          <div class="card-box-icon-wrapper card-box-icon-div-edit" @click="openEdit">
            <svg-icon icon-class="c_edit" class-name="card-box-icon" />
          </div>
        </el-tooltip>
      </el-col>
    </el-row>
    <!-- Edit dialog -->
    <short-cut-edit :show="showEdit" @close-edit="closeEdit" />
  </div>
</template>

<script>
import store from '@/store'
import ShortCutEdit from './ShortCutEdit.vue'
import { DashboardShortCut } from '@/api/dashboard'

export default {
  name: 'ShortCutGroup',
  emits: [],
  components: {
    'short-cut-edit': ShortCutEdit
  },
  props: {},
  data() {
    return {
      shortCutData: [],
      showEdit: false // 是否打开Edit dg
    }
  },
  computed: {},
  watch: {},
  created() {
    this.$nextTick(() => {
      this.initData()
    })
  },
  mounted() {},
  methods: {
    // initialize dashboard shortcut data
    initData() {
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        DashboardShortCut(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.shortCutData = data
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    openEdit() { // 打开Edit dg
      this.showEdit = true
    },
    closeEdit(refresh) { // 关闭Edit dg
      this.showEdit = false
      if (refresh) {
        this.initData()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row-group {
  margin-top: 5px;

  .card-box {
    margin-bottom: 5px;
    text-align: center!important;

    .card-box-icon-div {
      color: #00ADB5; // 图标框div背景色
    }

    &:hover {
      .card-box-icon-wrapper {
        color: #fff; // hover图标背景色
      }
      .card-box-icon-div {
        background: #00ADB5; // 36a3f7 34bfa3 hover图标框div背景色
      }
      .card-box-icon-div-edit {
        background: #F38181; // 34bfa3 编辑hover图标框div背景色
      }
    }

    // 图标框div
    .card-box-icon-wrapper {
      float: left;
      margin: 10px 0 0 14px;
      padding: 14px;
      transition: all 0.38s ease-out;
      border-radius: 16px;
    }

    // Svg图标样式
    .card-box-icon {
      float: left;
      font-size: 32px;
    }

  }
}

@media (max-width:550px) {

  .card-box-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
