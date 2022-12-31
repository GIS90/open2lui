<template>
  <div class="block page-div">
    <el-pagination
      :background="pagAttrs.background"
      :current-page="page"
      :total="total"
      :page-size="size"
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
</template>

<script>
export default {
  name: 'Pagination',
  emits: [
    'pagin-size-change',
    'pagin-current-change'
  ],
  components: {},
  props: {
    page: {
      type: Number,
      require: true,
      default: 1
    },
    size: {
      type: Number,
      require: true,
      default: 15
    },
    total: {
      type: Number,
      require: true,
      default: 0
    }
  },
  data() {
    return {
      // pagination attrs
      pagAttrs: {
        layout: 'total, sizes, prev, pager, next, jumper', // 组件布局
        background: true, // 是否为分页按钮添加背景色
        pageSizes: [15, 30, 50, 100, 500], // 每页显示个数选择器的选项设置
        pagerCount: 5, // 页码按钮的数量，当总页数超过该值时会折叠(大于等于 5 且小于等于 21 的奇数)
        hosp: false, // hide-on-single-page 只有一页时是否隐藏
        small: false, // 是否使用小型分页样式，默认false，可选值：true, false
        prevText: '<',
        nextText: '>',
        disabled: false
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSizeChange(pageSize) { // pageSize 改变时会触发
      this.$emit('pagin-size-change', pageSize)
    },
    handleCurrentChange(page) { // currentPage 改变时会触发
      this.$emit('pagin-current-change', page)
    }
  }
}
</script>

<style scoped>
.page-div {
  text-align: center;
  margin-top: 25px;
}
</style>
