<template>
  <div id="real-time-index-two" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme: vintage dark macarons shine roma infographic
import resize from './mixins/resize'
import store from '@/store'
import { DashboardIndex } from '@/api/dashboard'

const animationDuration = 4800

export default {
  name: 'RealTimeIndexTwo',
  emits: [],
  components: {},
  mixins: [resize],
  props: {
    className: {
      type: String,
      require: false,
      default: 'chart'
    },
    width: {
      type: String,
      require: false,
      default: '100%'
    },
    height: {
      type: String,
      require: false,
      default: '350px'
    }
  },
  data() {
    return {
      chart: null // Echart实例
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.chartInit()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    chartInit() {
      // Echart实例化
      // this.chart = echarts.init(this.$el, 'macarons') // 方式一：this.$el
      this.chart = echarts.init(document.getElementById('real-time-index-two'), 'macarons') // 方式二：document.getElementById('dynamic-pan-chart')
      // Echart set options 展示
      this.getChartData()
    },
    // initialize dashboard pan data
    getChartData() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'type': '3'
      }
      return new Promise((resolve, reject) => {
        DashboardIndex(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.chartOptions(data) // API请求成功，渲染Echart
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // echart options && show【https://echarts.apache.org/zh/option.html】
    chartOptions(data) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>
