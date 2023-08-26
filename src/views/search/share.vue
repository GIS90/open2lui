<template>
  <div class="app-container">
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
              <el-button :size="btnAttrs.size" :type="btnAttrs.type" :plain="btnAttrs.plain" :circle="btnAttrs.circle" :round="btnAttrs.round" @click="openReaderWindow(item.url)">在线阅读 >></el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from '@/store'
import { searchShareList } from '@/api/search'

export default {
  name: 'SearchShare',
  components: {},
  directives: {},
  emits: [],
  props: {},
  inject: {},
  data() {
    return {
      // image attrs
      imageAttrs: {
        fit: 'fill', //	确定图片如何适应容器框:fill / contain / cover / none / scale-down
        lazy: false
      },
      // button attrs
      btnAttrs: {
        size: 'medium', // 大小：medium / small / mini / ''
        type: 'success', // 类型：primary / success / warning / danger / info / text
        plain: true, // 是否朴素按钮
        round: true, // 是否圆角按钮
        circle: false // 是否圆形按钮
      },
      // pagination attrs
      pageCur: 1, // 当前page
      pageSize: 15, // 每页显示条目个数
      pageTotal: 0, // 总条数
      // search form data
      searchData: {},
      dataList: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.$nextTick(() => {
      this.getTableList()
    })
  },
  mounted() {},
  methods: {
    openReaderWindow(url) {
      window.open(url, '_blank')
    },
    getTableList() { // get source list data
      // table loading
      this.tableLoading = true
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
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          this.btnDisabled = false
          this.tableLoading = false
        })
      })
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

</style>
