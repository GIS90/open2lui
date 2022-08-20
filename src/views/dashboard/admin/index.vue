<template>
  <div class="dashboard-container">
    <!-- 快捷面板panel -->
    <el-divider><i class="el-icon-pie-chart">  动态报表</i></el-divider>
    <panel-group @handle-dynamic-pan-chart-type="handleDynamicPanChartType" />
    <!-- 联动pan-chart -->
    <el-row class="dynamic-pan-chart">
      <dynamic-pan-chart :chart-type="chartType" />
    </el-row>
    <!-- 静态chart -->
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
    <!-- 其他内容 -->
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
      chartType: 'user' // dynamic pan chart type: user-用户 click-点击率
    }
  },
  methods: {
    handleDynamicPanChartType(type) {
      if (type) {
        this.chartType = type
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
