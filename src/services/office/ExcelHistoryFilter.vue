<template>
  <el-collapse>
    <el-collapse-item name="1" class="filter-container-cus">
      <template slot="title" class="filter-title">
        高级筛选（点我）<i class="header-icon el-icon-info icon-sx" />
      </template>
      <div class="filter-desc">数据的高级筛选功能，支持模糊查询</div>
      <div class="filter-if">
        <el-form :label-position="labelPosition" label-width="auto" style="width: 100%">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="文件名称">
                <el-input
                  v-model="dataFilter.name"
                  placeholder="支持文件名称模糊查询"
                  style="width: 80%"
                  :maxlength="inputAttrs.length"
                  :clearable="inputAttrs.clear"
                  :show-word-limit="inputAttrs.limit"
                  prefix-icon="el-icon-edit"
                  :disabled="disabled"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="文件类别">
                <el-select
                  v-model="dataFilter.typeList"
                  :placeholder="selectAttrs.placeholder"
                  :disabled="disabled"
                  :filterable="selectAttrs.filterable"
                  :multiple="selectAttrs.multiple"
                  :multiple-limit="selectAttrs.limit"
                  :clearable="selectAttrs.clearable"
                  :no-data-text="selectAttrs.noDataText"
                  :collapse-tags="selectAttrs.collapseTags"
                  style="width: 80%"
                >
                  <el-option v-for="item in selectTypeData" :key="item.value" :label="item.label" :value="item.value">
                    <span style="float: left">
                      {{ item.label }}
                    </span>
                    <span style="float: right; color: #8492a6;">
                      {{ item.value }}
                    </span>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="创建日期">
                <el-date-picker
                  v-model="dataFilter.date"
                  :disabled="disabled"
                  :clearable="pickerAttrs.clearable"
                  :size="pickerAttrs.size"
                  style="width: 80%"
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
          <el-row style="text-align: center">
            <el-button
              icon="el-icon-search"
              @click.prevent.stop="filterQuery"
            >
              查询
            </el-button>
          </el-row>
        </el-form>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'ExcelHistoryFilter',
  emits: ['filter-result-list'],
  components: {},
  props: {},
  data() {
    return {
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      disabled: false, // disabled状态
      loading: false, // loading状态
      dataFilter: { // 高级筛选
        name: '', // 名称
        typeList: [], // 文件类别选择的类型
        date: '' // 日期
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
        placeholder: '请选择（不选择为全部查询）' // 默认显示内容
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
        'startTime': this.dataFilter.date[0] || '',
        'endTime': this.dataFilter.date[1] || '',
        'typeList': this.dataFilter.typeList || []
      }
      this.$emit('filter-result-list', data)
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
