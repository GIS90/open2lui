<template>
  <el-row :gutter="40" class="panel-group">
    <!-- 用户 -->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetPanChartType('user')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            用户
          </div>
          <count-to :start-val="0" :end-val="panCounts.user" :duration="countToDurs.user" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <!-- 点击率 -->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetPanChartType('click')">
        <div class="card-panel-icon-wrapper icon-click">
          <svg-icon icon-class="click" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            点击数
          </div>
          <count-to :start-val="0" :end-val="panCounts.click" :duration="countToDurs.click" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <!--
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetPanChartType('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Purchases
          </div>
          <count-to :start-val="0" :end-val="panCounts.d2" :duration="countToDurs.d2" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetPanChartType('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Shoppings
          </div>
          <count-to :start-val="0" :end-val="panCounts.d3" :duration="countToDurs.d3" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    -->
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import store from '@/store'
import { DashboardPan } from '@/api/dashboard'

export default {
  name: 'PanelGroup',
  emits: [
    'handle-dynamic-pan-chart-type'
  ],
  components: {
    'count-to': CountTo
  },
  props: {},
  data() {
    return {
      panChartType: 'user', // pan类型：user-用户【默认为user】click-点击数
      // 计数器持续时间
      countToDurs: {
        user: 2500,
        click: 3000,
        d2: 4000,
        d3: 4500
      },
      // pan数据，默认为0
      panCounts: {
        user: 0,
        click: 0,
        d2: 84000,
        d3: 13600
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.initData()
  },
  mounted() {},
  methods: {
    // initialize dashboard pan data
    initData() {
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        DashboardPan(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.panCounts.user = data.user // 用户
            this.panCounts.click = data.click // 点击率
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // change dynamic chart type
    handleSetPanChartType(type) {
      this.panChartType = type || this.panChartType
      this.$emit('handle-dynamic-pan-chart-type', this.panChartType)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 5px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #34bfa3;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-click {
        background: #FD5532
      }
    }

    .icon-people {
      color: #34bfa3;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-click {
      color: #FD5532
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px 26px 26px 26px;
      //margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
