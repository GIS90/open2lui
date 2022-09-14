<template>
  <div id="real-time-index-two" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme: vintage dark macarons shine roma infographic
import resize from './mixins/resize'
import store from '@/store'
import { DashboardIndex } from '@/api/dashboard'

const animationDuration1 = 5000
const animationDuration2 = 4750
const animationDuration3 = 4500
const animationDuration4 = 4250
const animationDuration5 = 4000

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
      chart: null, // Echart实例
      chartLegend: [],
      chartTitle: '本周API请求次数排名TOP5',
      chartSubTitle: '本周累计'
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
            this.chartLegend = data.legend
            this.chartTitle = data.title
            this.chartSubTitle = data.subtitle
            this.chartOptions(data.data) // API请求成功，渲染Echart
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
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: this.chartTitle || '本周API请求次数排名TOP5',
          left: 'center',
          textStyle: {
            fontSize: 18,
            color: '#333',
            fontStyle: 'normal' // normal italic oblique
          },
          // subtext: this.chartSubTitle || '本周累计',
          // subtextStyle: {
          //   fontSize: 13
          // },
          show: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          left: 'center',
          bottom: '15',
          data: this.chartLegend
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {},
            magicType: {
              type: ['line', 'bar', 'stack']
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '65',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: this.chartLegend[0] || '',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            animationDuration1,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: data[0] || [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: this.chartLegend[1] || '',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            animationDuration2,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(0, 221, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: data[1] || [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: this.chartLegend[2] || '',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            animationDuration3,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(55, 162, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: data[2] || [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: this.chartLegend[3] || '',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            animationDuration4,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 0, 135)'
                },
                {
                  offset: 1,
                  color: 'rgb(135, 0, 157)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: data[3] || [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: this.chartLegend[4] || '',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            animationDuration5,
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgb(224, 62, 76)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: data[4] || [0, 0, 0, 0, 0, 0, 0]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
