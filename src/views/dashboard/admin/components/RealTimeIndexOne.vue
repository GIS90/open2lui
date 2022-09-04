<template>
  <div id="real-time-index-one" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme: vintage dark macarons shine roma infographic
import resize from './mixins/resize'
import store from '@/store'
import { DashboardIndex } from '@/api/dashboard'

const animationDuration = 3200

export default {
  name: 'RealTimeIndexOne',
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
      chart: null, // Echart实例
      chartLegend: ['表格合并', '表格拆分', 'PDF转WORD', '钉钉绩效'] // 默认legend，动态API获取
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
      this.chart = echarts.init(document.getElementById('real-time-index-one'), 'macarons') // 方式二：document.getElementById('dynamic-pan-chart')
      // Echart set options 展示
      this.getChartData()
    },
    // initialize dashboard pan data
    getChartData() {
      const data = {
        'rtx_id': store.getters.rtx_id,
        'type': '1'
      }
      return new Promise((resolve, reject) => {
        DashboardIndex(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.chartLegend = data.legend
            this.chartOptions(data.data) //  // API请求成功，渲染Echart
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
        title: {
          show: true,
          text: '工具累积使用情况',
          x: 'center',
          textAlign: 'left',
          textStyle: {
            fontSize: 18,
            color: '#333',
            fontStyle: 'normal' // normal italic oblique
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '15',
          data: this.chartLegend
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '统计详情：',
            type: 'pie',
            roseType: 'radius', // radius area
            radius: [20, 95],
            center: ['50%', '42%'],
            data: data,
            animationType: 'expansion', // 初始动画效果: expansion-展开 scale-缩放
            animationEasing: 'cubicInOut',
            animationDuration
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
