<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-button id="btn-search" class="btn-margin" :type="searchType" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="showSearch">
        <svg-icon :icon-class="searchIcon" />  {{ searchBtnText }}
      </el-button>
      <!-- 右侧icon -->
      <span style="float: right">
        <el-tooltip effect="dark" content="刷新" placement="top">
          <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="getTableList(2)" />
        </el-tooltip>
      </span>
    </el-row>
    <!--Search查询条件区域-->
    <Transition>
      <div v-if="searchStatus" class="searchBox">
        <share-filter :user-list="userList" :disabled="btnDisabled" @filter-search-result="filterSearchResult" />
      </div>
    </Transition>

    <div style="margin-top: 10px;" />

    <!-- 数据 -->
    <el-row v-for="(value, key) in dataList" :key="key" :gutter="30">
      <el-col v-for="item in value" :key="item.md5" :span="6">
        <div class="col-box">
          <!-- 上部：图片 -->
          <el-image :src="item.image" class="col-box-image" :fit="imageAttrs.fit" :lazy="imageAttrs.lazy">
            <!-- 图片加载占位 -->
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
          <!-- 下部：文本 -->
          <div>
            <!-- 简述 -->
            <div class="col-box-text col-box-margin">
              {{ item.summary }}
            </div>
            <!-- 标签 -->
            <!--
            <div class="col-box-label col-box-margin">
              <el-tag v-for="(tag, index) in item.label" :key="index" class="col-box-label-tag">
                {{ tag }}
              </el-tag>
            </div>
            -->
            <div class="col-box-divider">
              <hr>
            </div>
            <!-- 操作 -->
            <div class="col-box-opr col-box-margin">
              <el-button :size="btnBaseAttrs.oprSize" :type="btnBaseAttrs.type" :plain="btnBaseAttrs.plain" :circle="btnBaseAttrs.circle" :round="btnBaseAttrs.round" @click="openReaderWindow(item.url)">在线阅读</el-button>
              <el-button :size="btnBaseAttrs.oprSize" :type="btnBaseAttrs.type" :plain="btnBaseAttrs.plain" :circle="btnBaseAttrs.circle" :round="btnBaseAttrs.round" @click="openDetailWindow(item.md5)">知识详情</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- page分页 -->
    <public-pagination :page="pageCur" :size="pageSize" :total="pageTotal" @pagin-size-change="paginSizeChange" @pagin-current-change="paginCurrentChange" />

    <!--详情-->
    <share-detail :row-md5="selectMd5" :show="openDetailStatus" :edit='editStatus' @close-detail-window="closeDetailWindow" />
  </div>
</template>

<script>
import store from '@/store'
import { searchShareList } from '@/api/search'
import Pagination from '@/components/Pagination'
import ShareFilter from '@/services/search/ShareFilter'
import ShareDetail from '@/services/search/ShareDetail'

export default {
  name: 'SearchShare',
  components: {
    'share-filter': ShareFilter,
    'share-detail': ShareDetail,
    'public-pagination': Pagination
  },
  directives: {},
  emits: [],
  props: {},
  inject: {},
  data() {
    return {
      btnDisabled: false, // 按钮禁用状态
      // image attrs
      imageAttrs: {
        fit: 'fill', //	确定图片如何适应容器框:fill / contain / cover / none / scale-down
        lazy: false
      },
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        oprSize: 'small', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      // button icon attributes
      btnIconAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: true // 是否为圆形按钮
      },
      // pagination attrs
      pageCur: 1, // 当前page
      pageSize: 15, // 每页显示条目个数
      pageTotal: 0, // 总条数
      searchType: 'primary', // search button type: primary, success, default is primary
      searchIcon: 'i-double-arrow-down', // search button icon
      searchBtnText: '展开查询', // search button text
      searchStatus: false, // 是否展开查询条件
      searchData: {}, // search form data
      userList: [], // user list
      dataList: [],
      selectMd5: '', // 当前选择数据
      editStatus: false, // 编辑状态
      openDetailStatus: false // 详情dialog
    }
  },
  computed: {},
  watch: {
    searchStatus(newVal, oldVal) { // watch is or not show search if
      if (newVal) {
        this.searchBtnText = '关闭查询'
        this.searchType = 'success'
        this.searchIcon = 'i-double-arrow-up'
      } else {
        this.searchBtnText = '展开查询'
        this.searchType = 'primary'
        this.searchIcon = 'i-double-arrow-down'
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.getTableList(1)
    })
  },
  mounted() {},
  methods: {
    openReaderWindow(url) {
      window.open(url, '_blank')
    },
    paginSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getTableList()
    },
    paginCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getTableList()
    },
    getTableList(type) { // get source list data
      // type: 1-初始化，2-手动刷新，3-高级查询
      // 禁用按钮/INPUT/SELECT
      this.btnDisabled = true

      // list列表参数
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 15,
        'offset': (this.pageCur - 1) * this.pageSize || 0,
        ...this.searchData
      }

      return new Promise((resolve, reject) => {
        searchShareList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100 || status_id === 101) {
            this.dataList = data.list
            this.pageTotal = data.total
            this.userList = data.user
          }
          // 手动刷新提示
          if ([2, 3].includes(type) && status_id === 100) {
            const msg = type === 2 ? '刷新成功' : '查询成功'
            this.$notify({
              title: '消息', // 标题
              type: 'success', // 类型：success/warning/info/error
              message: msg, // 消息
              duration: 1200, // 显示时间(毫秒)
              // offset: 300, // 偏移量
              position: 'top-right', // 位置：top-right/top-left/bottom-right/bottom-left
              showClose: false // 是否显示关闭按钮
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          this.btnDisabled = false
        })
      })
    },
    showSearch() {
      this.searchStatus = !this.searchStatus
    },
    filterSearchResult(data, isRefresh) { // 更新高级查询条件
      this.searchData = data
      if (isRefresh) {
        this.getTableList(3)
      }
    },
    openDetailWindow(md5) {
      this.selectMd5 = md5
      this.openDetailStatus = true
    },
    closeDetailWindow() {
      this.openDetailStatus = false
    }
  },
  template: '',
  setup() {
    return {}
  }
}
</script>

<style scoped>
.col-box {
  border: 6px double #ccc;;
  margin: 10px 10px 20px 10px;
  text-align: center;
  /*height: 350px;*/
  /*width: 94% !important;*/
}

.col-box-margin {
  margin: 20px;
}

.col-box-image {
  margin-top: 15px;
  width: 92%;
  height: 30%;
}

.col-box-text {
  text-align: left;
  width: 90%;
}

.col-box-label-tag {
  margin: 0 5px 0 5px;
}

.col-box-divider {
  text-align: center !important;
  width: 90% !important;
  margin-left: 5%;
}

.col-box-opr {
  /*width: 90%;*/
}

.searchBox{
  margin-top: 20px;
}

.v-enter-active {
  animation: bounce-in 0.5s;
}
.v-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
