<template>
  <el-form :label-position="labelPosition" label-width="auto" style="width: 100%">
    <!-- 文件名称 -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="文件名称">
          <el-input
            v-model="dataFilter.name"
            style="width: 100%"
            placeholder="支持文件名称模糊查询"
            :maxlength="inputAttrs.length"
            :clearable="inputAttrs.clear"
            :show-word-limit="inputAttrs.limit"
            prefix-icon="el-icon-edit"
            :disabled="disabled"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <!-- 操作类型 -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="操作类型">
          <el-select
            v-model="dataFilter.typeList"
            style="width: 100%"
            :placeholder="selectAttrs.placeholder"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option v-for="item in selectTypeData" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <!-- 文件类别 -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="创建日期">
          <el-date-picker
            v-model="dataFilter.date"
            style="width: 100%"
            :disabled="disabled"
            :clearable="pickerAttrs.clearable"
            :size="pickerAttrs.size"
            :type="pickerAttrs.type"
            :align="pickerAttrs.align"
            :unlink-panels="pickerAttrs.link"
            range-separator="至"
            :start-placeholder="pickerAttrs.startPlaceholder"
            :end-placeholder="pickerAttrs.endPlaceholder"
            :prefix-icon="pickerAttrs.prefixIcon"
            :format="pickerAttrs.format"
            :value-format="pickerAttrs.valueFormat"
            :picker-options="pickerOptions"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <!--查询-->
    <el-row>
      <el-button id="btn-q-search" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="disabled" @click.prevent.stop="filterQuery">
        <svg-icon icon-class="search" />  查询
      </el-button>
      <el-button id="btn-q-clear" type="info" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="disabled" @click.prevent.stop="clearQuery">
        <svg-icon icon-class="i-reset" />  重置
      </el-button>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'ExcelHistoryFilter',
  emits: ['filter-result-list'],
  components: {},
  props: {
    disabled: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      dataFilter: { // 高级筛选
        name: '', // 名称
        typeList: [], // 文件类别选择的类型
        date: '' // 日期
      },
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      inputAttrs: { // input attrs
        clear: true, // 可清空的输入框
        length: '55', // 最大输入长度
        limit: true // 展示字数统计
      },
      selectAttrs: { // select attrs
        multiple: true, // 多选
        clearable: true, // 清空选择
        filterable: false, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '请选择类型（不选择为全部查询）' // 默认显示内容
      },
      selectTypeData: [ // 文件类别选择的数据
        { value: '1', label: '合并' },
        { value: '2', label: '拆分' }
      ],
      pickerAttrs: { // picker attrs
        type: 'daterange', // 显示类型 year/month/date/dates/week/datetime/datetimerange/daterange/monthrange
        clearable: true, // 清空选择
        size: 'large', // 输入框尺寸string：large, small, mini
        link: true, // 范围选择器里两个日期面板之间的联动
        startPlaceholder: '开始日期', // 范围选择时开始日期的占位内容
        endPlaceholder: '结束日期', // 范围选择时结束日期的占位内容
        format: 'yyyy 年 MM 月 dd 日', // 显示在输入框中的格式
        valueFormat: 'yyyy-MM-dd', // 绑定值的格式
        defaultTime: "['00:00:00', '23:59:59']", // 日期默认时间
        align: 'center', // 对齐方式string：left, center, right
        prefixIcon: 'el-icon-date' // 自定义头部图标的类名
      },
      pickerOptions: this.getPickerOptions()
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getPickerOptions() {
      return {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    },
    filterQuery() { // 回调给history进行高级搜索
      const data = {
        'name': this.dataFilter.name || '',
        'startTime': this.dataFilter.date[0] ? this.dataFilter.date[0] + ' 00:00:00' : '',
        'endTime': this.dataFilter.date[1] ? this.dataFilter.date[1] + ' 23:59:59' : '',
        'typeList': this.dataFilter.typeList || []
      }
      this.$emit('filter-result-list', data, true)
    },
    clearQuery() {
      this.dataFilter.name = ''
      this.dataFilter.date = ''
      this.dataFilter.typeList = []
      this.$notify({
        title: '消息', // 标题
        type: 'success', // 类型：success/warning/info/error
        message: '重置成功', // 消息
        duration: 1200, // 显示时间(毫秒)
        // offset: 300, // 偏移量
        position: 'top-right', // 位置：top-right/top-left/bottom-right/bottom-left
        showClose: false // 是否显示关闭按钮
      })
      const data = {
        'name': '',
        'startTime': '',
        'endTime': '',
        'typeList': []
      }
      this.$emit('filter-result-list', data, true)
    }
  }
}
</script>

<style scoped>

.icon-sx {
  margin-left: 10px;
  color: red;
}

.filter-container-cus {
  font-size: 16px;
}

.filter-title {
  background-color: red !important;
}

.filter-desc {
  color: red;
  margin-top: 20px;
  font-size: 15px !important;
}

.filter-if {
  margin-top: 20px;
}
</style>
