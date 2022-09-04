<template>
  <div id="dashboard-container" class="dashboard-container">
    <!-- 快捷入口 -->
    <div v-if="shortCut" id="dashboard-container-short-cut-group">
      <el-divider><i class="el-icon-menu">  快捷入口</i></el-divider>
      <short-cut-group />
    </div>
    <!-- 动态报表 -->
    <div id="dashboard-container-dynamic-pan">
      <el-divider><i class="el-icon-pie-chart">  动态面板</i></el-divider>
      <!-- pan -->
      <panel-group @handle-dynamic-pan-chart-type="handleDynamicPanChartType" />
      <!-- 联动pan-chart -->
      <el-row class="dynamic-pan-chart">
        <panel-group-chart :chart-type="panChartType" :width="panChartWidth" :height="panChartHeight" />
      </el-row>
    </div>
    <!-- 实时指标 -->
    <div id="dashboard-container-real-time-index">
      <el-divider><i class="el-icon-time">  实时指标</i></el-divider>
      <el-row :gutter="32">
        <!-- chart-one 1/3 -->
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <div class="chart-wrapper">
            <real-time-index-one width="100%" height="350px" />
          </div>
        </el-col>
        <!-- chart-two 2/3 -->
        <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
          <div class="chart-wrapper">
            <real-time-index-two width="100%" height="350px" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ShortCutGroup from './components/ShortCutGroup'
import PanelGroup from './components/PanelGroup'
import PanelGroupChart from './components/PanelGroupChart'
import RealTimeIndexOne from './components/RealTimeIndexOne'
import RealTimeIndexTwo from './components/RealTimeIndexTwo'

export default {
  name: 'DashboardAdmin',
  components: {
    'short-cut-group': ShortCutGroup,
    'panel-group': PanelGroup,
    'panel-group-chart': PanelGroupChart,
    'real-time-index-one': RealTimeIndexOne,
    'real-time-index-two': RealTimeIndexTwo
  },
  data() {
    return {
      shortCut: true, // 是否显示shortcut【快捷入口】
      panChartType: 'user', // dynamic pan chart type: user-用户 click-点击率
      panChartWidth: '100%', // dynamic pan chart width
      panChartHeight: '400px' // dynamic pan chart height
    }
  },
  methods: {
    handleDynamicPanChartType(type) {
      if (type) {
        this.panChartType = type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 5px 32px 32px 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 10px;
  }
}

.dynamic-pan-chart {
  background: #fff;
  width: 100%;
  padding: 20px 20px 20px 20px;
  margin-bottom: 32px;
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
