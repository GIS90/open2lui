<template>
  <div class="block">
    <!-- Back top 回到顶部 -->
    <el-backtop :bottom="80" />

    <el-timeline>
      <el-timeline-item
        v-for="(item,index) of timeline"
        :key="index"
        :timestamp="item.timestamp"
        :type="item.type"
        :color="timeLineAttrs.color"
        :size="timeLineAttrs.size"
        :hollow="timeLineAttrs.hollow"
        :placement="timeLineAttrs.placement"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <!-- page分页 -->
    <div class="block page-div">
      <el-pagination
        :background="pagAttrs.background"
        :current-page="pageCur"
        :total="pageTotal"
        :page-size="pageSize"
        :layout="pagAttrs.layout"
        :page-sizes="pagAttrs.pageSizes"
        :pager-count="pagAttrs.pagerCount"
        :small="pagAttrs.small"
        :disabled="pagAttrs.disabled"
        :prev-text="pagAttrs.prevText"
        :next-text="pagAttrs.nextText"
        :hide-on-single-page="pagAttrs.hosp"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { getTimeLine } from '@/api/user'
import store from '@/store'

export default {
  name: 'Timeline',
  props: {},
  data() {
    return {
      timeLineAttrs: {
        icon: '', // 自定义图标
        type: 'primary', // 节点类型: primary / success / warning / danger / info
        color: 'hsl', // 节点颜色: hsl / hsv / hex / rgb
        size: 'large', // 节点尺寸: normal / large
        hollow: false, // 是否空心点: true / false
        center: false, // 是否垂直居中: true / false
        placement: 'top' // 时间戳位置: top / bottom
      },
      backTopText: 'Top', // 回到顶部文案
      // pagination attrs
      pagAttrs: {
        layout: 'total, sizes, prev, pager, next, jumper', // 组件布局
        background: false, // 是否为分页按钮添加背景色
        pageSizes: [10, 20, 30, 50], // 每页显示个数选择器的选项设置
        pagerCount: 5, // 页码按钮的数量，当总页数超过该值时会折叠(大于等于 5 且小于等于 21 的奇数)
        hosp: false, // hide-on-single-page 只有一页时是否隐藏
        small: false, // 是否使用小型分页样式，默认false，可选值：true, false
        prevText: '<',
        nextText: '>',
        disabled: false
      },
      pageCur: 1, // 当前page
      pageSize: 10, // 每页显示条目个数
      pageTotal: 0, // 总条数
      timeline: []
    }
  },
  created() {
    this.getTimeLineList()
  },
  methods: {
    getTimeLineList() {
      if (!store.getters.rtx_id) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'limit': this.pageSize || 10,
        'offset': (this.pageCur - 1) * this.pageSize || 0
      }
      return new Promise((resolve, reject) => {
        getTimeLine(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.timeline = data.timeline
            this.pageTotal = data.total
          } else if (status_id === 101) {
            this.timeline = []
            this.pageTotal = 0
          }
          resolve(this.timeline)
        }).catch(error => {
          reject(error)
        })
      })
    },
    handleSizeChange(pageSize) { // pageSize 改变时会触发
      this.pageSize = pageSize
      this.getTimeLineList()
    },
    handleCurrentChange(page) { // currentPage 改变时会触发
      this.pageCur = page
      this.getTimeLineList()
    }
  }
}
</script>
<style lang="scss" scoped>
.customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.page-div {
  text-align: center;
}
</style>
