<template>
  <div id="dashboard-container" class="dashboard-container">
    <!-- 动态报表 -->
    <div id="dashboard-container-dynamic-pan">
      <el-divider><i class="el-icon-pie-chart">  动态面板</i></el-divider>
      <!-- pan -->
      <panel-group @handle-dynamic-pan-chart-type="handleDynamicPanChartType" />
      <!-- 联动pan-chart -->
      <el-row class="dynamic-pan-chart">
        <dynamic-pan-chart :chart-type="panChartType" :width="panChartWidth" :height="panChartHeight" />
      </el-row>
    </div>
    <!-- 实时数据 -->
    <div id="dashboard-container-real-time-data">
      <el-divider><i class="el-icon-time">  实时数据</i></el-divider>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <raddar-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 其他内容 -->
    <div id="dashboard-container-other">
      <el-row :gutter="8">
        <!-- table -->
        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
          <transaction-table />
        </el-col>
        <!-- todo-list -->
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <todo-list />
        </el-col>
        <!-- box-card -->
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <box-card />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import DynamicPanChart from './components/DynamicPanChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

export default {
  name: 'DashboardAdmin',
  components: {
    'panel-group': PanelGroup,
    'dynamic-pan-chart': DynamicPanChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
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
    margin-bottom: 32px;
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
