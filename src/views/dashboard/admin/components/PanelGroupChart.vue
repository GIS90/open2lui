<template>
  <div id="dynamic-pan-chart" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme: vintage dark macarons shine roma infographic
import resize from './mixins/resize'
import store from '@/store'
import { DashboardPanChart } from '@/api/dashboard'

export default {
  name: 'PanelGroupChart',
  mixins: [resize],
  props: {
    className: {
      type: String,
      require: true,
      default: 'chart'
    },
    chartType: {
      type: String,
      require: true,
      default: 'user'
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
    },
    autoResize: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  data() {
    return {
      chart: null, // Echart实例
      chartTitle: '', // Echart 标题
      chartSubTitle: '', // Echart 副标题
      chartData: [] // Echart data
    }
  },
  watch: {
    // 监控chartType，chart实时渲染刷新
    chartType(newVal, oldVal) {
      // update chart data
      this.updateChartData()
    }
  },
  created() {
    // this.updateChartData() // 挂载mounted
  },
  mounted() {
    // 1.初始化echart对象 2.获取echart data 3.setOptions渲染echart
    this.$nextTick(() => {
      this.chartInit()
      this.updateChartData()
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
    // 请求chartData API by chartType
    updateChartData() {
      if (this.chartType) {
        const data = {
          'rtx_id': store.getters.rtx_id,
          'type': this.chartType
        }
        return new Promise((resolve, reject) => {
          DashboardPanChart(data).then(response => {
            const { status_id, data } = response
            if (status_id === 100) {
              this.chartData = data.data
              this.chartTitle = data.title
              this.chartSubTitle = data.subtitle
              this.chartOptions(this.chartData)
            }
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      }
    },
    // echart对象
    chartInit() {
      // 实例化Echart对象
      this.chart = echarts.init(this.$el, 'macarons') // 方式一：this.$el
      // this.chart = echarts.init(document.getElementById('dynamic-pan-chart'), 'macarons') // 方式二：document.getElementById('dynamic-pan-chart')
      // 延迟渲染，目的是在请求完chartData数据后进行渲染
      // this.setOptions(this.chartData)
    },
    // 后台API无标题用此方法获取默认标题
    title() {
      if (this.chartType === 'user') {
        return '本周用户登录情况'
      } else if (this.chartType === 'click') {
        return '本周功能点击数情况'
      } else if (this.chartType === 'operate') {
        return '本周功能使用率情况'
      } else {
        return ''
      }
    },
    // echart options && show【https://echarts.apache.org/zh/option.html】
    chartOptions(lineData) {
      this.chart.setOption({
        // 标题
        title: {
          show: true,
          text: this.chartTitle || this.title(),
          x: 'center',
          textAlign: 'left',
          textStyle: {
            fontSize: 20,
            color: '#333',
            fontStyle: 'normal' // normal italic oblique
          },
          subtext: this.chartSubTitle || '本周活跃数据',
          subtextStyle: {
            fontSize: 13
          }
        },
        // 直角坐标系 grid 中的 x 轴
        xAxis: {
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          boundaryGap: false
        },
        // 直角坐标系 grid 中的 y 轴
        yAxis: {
          axisTick: {
            show: false
          }
        },
        // 直角坐标系内绘图网格
        grid: {
          left: '3%',
          right: '4%',
          bottom: 15,
          top: 65,
          containLabel: true
        },
        // 提示框组件
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        // 图例组件
        legend: {
          show: true,
          left: 20,
          data: ['数据量']
        },
        // 工具栏
        toolbox: {
          show: true,
          feature: {
            magicType: {
              type: ['line', 'bar']
            },
            saveAsImage: {}
          }
        },
        series: [{
          name: '数据量',
          smooth: true,
          type: 'line',
          data: lineData,
          itemStyle: {
            normal: {
              color: '#FF005A', // #3888fa
              lineStyle: {
                color: '#FF005A',
                width: 1.5
              }
            }
          },
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
          animationDuration: 3200,
          animationEasing: 'cubicInOut' // quadraticOut cubicInOut
        }]
      })
    }
  }
}
</script>
