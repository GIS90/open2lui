<template>
  <div id="dynamic-pan-chart" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import store from '@/store'
import { DashboardPanChart } from '@/api/dashboard'

export default {
  name: 'DynamicPanChart',
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
      default: '370px'
    },
    autoResize: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      chartData: [] // chart data
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
    // this.updateChartData()
  },
  mounted() {
    // 1.初始化echart对象 2.获取echart data 3.setOptions渲染echart
    this.$nextTick(() => {
      this.initChart()
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
              this.chartData = data
              this.setOptions(this.chartData)
            }
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      }
    },
    // echart对象
    initChart() {
      // 实例化echart对象
      this.chart = echarts.init(this.$el, 'macarons') // 方式一：this.$el
      // this.chart = echarts.init(document.getElementById('dynamic-pan-chart'), 'macarons') // 方式二：document.getElementById('dynamic-pan-chart')
      // 延迟渲染，目的是在请求完chartData数据后进行渲染
      // this.setOptions(this.chartData)
    },
    // chart 标题
    getChartTitle() {
      if (this.chartType === 'user') {
        return '本周用户登录情况'
      } else if (this.chartType === 'click') {
        return '本周功能点击数情况'
      } else if (this.chartType === 'purchases') {
        return 'purchases'
      } else if (this.chartType === 'shoppings') {
        return 'shoppings'
      } else {
        return ''
      }
    },
    // echart options && show【https://echarts.apache.org/zh/option.html】
    setOptions(data) {
      this.chart.setOption({
        // 标题
        title: {
          show: true,
          text: this.getChartTitle(),
          x: 'center',
          textAlign: 'left',
          textStyle: {
            fontSize: 20,
            color: '#333',
            fontStyle: 'normal' // normal italic oblique
          }
        },
        // 直角坐标系 grid 中的 x 轴
        xAxis: {
          data: ['星期一1', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
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
          left: 25,
          right: 25,
          bottom: 10,
          top: 50,
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
        series: [{
          name: '数据量',
          itemStyle: {
            normal: {
              color: '#FF005A', // #3888fa
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: data,
          animationDuration: 3200,
          animationEasing: 'cubicInOut' // quadraticOut cubicInOut
        }]
      })
    }
  }
}
</script>
