<template>
  <el-form :label-position="labelPosition" label-width="auto" style="width: 100%">
    <el-row :gutter="20">
      <!-- 搜索内容 -->
      <el-col :span="24">
        <el-form-item label="搜索内容">
          <el-input
            v-model="searchData.content"
            style="width: 100%;height: 100%"
            type="text"
            :clearable="inputAttrs.clear"
            :maxlength="searchLimit.content"
            :show-word-limit="inputAttrs.limit"
            :size="inputAttrs.size"
            :prefix-icon="inputAttrs.prefixIcon"
            :disabled="disabled"
            placeholder="请输入搜索的关键字"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!-- 创建用户 -->
      <el-col :span="12">
        <el-form-item label="创建用户">
          <el-select
            v-model.trim="searchData.create_rtx"
            style="width: 100%"
            :size="selectAttrs.size"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
            placeholder="请选择创建用户"
          >
            <el-option
              v-for="(item, index) in userList"
              :key="index"
              :label="item.value"
              :value="item.key"
            >
              <span class="select-opt-left">{{ item.value }}</span>
              <span class="select-opt-right">{{ item.key }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <!-- 作者 -->
      <el-col :span="12">
        <el-form-item label="作者">
          <el-select
            v-model.trim="searchData.author"
            style="width: 100%"
            :size="selectAttrs.size"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
            placeholder="请选择作者"
          >
            <el-option
              v-for="(item, index) in userList"
              :key="index"
              :label="item.value"
              :value="item.key"
            >
              <span class="select-opt-left">{{ item.value }}</span>
              <span class="select-opt-right">{{ item.key }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!-- 创建时间 -->
      <el-col :span="12">
        <el-form-item label="创建日期">
          <el-date-picker
            v-model="create_date"
            :disabled="disabled"
            :clearable="pickerAttrs.clearable"
            :size="pickerAttrs.size"
            style="width: 100%"
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
      <!-- 发布时间 -->
      <el-col :span="12">
        <el-form-item label="发布日期">
          <el-date-picker
            v-model="public_date"
            :disabled="disabled"
            :clearable="pickerAttrs.clearable"
            :size="pickerAttrs.size"
            style="width: 100%"
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
    <el-row :gutter="20">
      <!--推荐度-->
      <el-col :span="12">
        <el-form-item label="推荐度">
          <el-select
            v-model.trim="searchData.recommend"
            style="width: 100%"
            :size="selectAttrs.size"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :multiple-limit="selectAttrs.limit"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
            placeholder="请选择推荐度"
          >
            <el-option
              v-for="(item, index) in recommendList"
              :key="index"
              :label="item.value"
              :value="item.key"
            >
              <span class="select-opt-left">{{ item.value }}</span>
              <span class="select-opt-right">{{ item.key }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <!--数据库-->
      <el-col :span="12">
        <el-form-item label="数据库">
          <el-select
            v-model.trim="searchData.database"
            style="width: 95%"
            :size="selectAttrs.size"
            placeholder="请选择数据库类型"
            :disabled="disabled"
            :filterable="selectAttrs.filterable"
            :multiple="selectAttrs.multiple"
            :clearable="selectAttrs.clearable"
            :no-data-text="selectAttrs.noDataText"
            :collapse-tags="selectAttrs.collapseTags"
          >
            <el-option-group v-for="group in dataBaseList" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
            </el-option-group>
          </el-select>
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
  name: 'SqlBaseFilter',
  components: {},
  emits: ['filter-search-result'],
  props: {
    dataBaseList: {
      type: Array,
      require: true,
      default: () => []
    },
    userList: {
      type: Array,
      require: true,
      default: () => []
    },
    disabled: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  inject: {},
  data() {
    return {
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      // search input attrs
      inputAttrs: {
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit' // input前缀icon
      },
      // select attrs
      selectAttrs: {
        size: 'medium', // 大小：''/medium/small/mini
        multiple: true, // 多选
        clearable: true, // 清空选择
        filterable: true, // 搜索功能
        allowCreate: false,	// 是否允许用户创建新条目，需配合filterable使用
        dfo: false, // default-first-option在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用
        collapseTags: false, // 多个合并成一个
        limit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        remote: false, // 是否为远程搜索
        loading: false, // 是否正在从远程获取数据
        loadingText: '正在加载中...',	// 远程加载时显示的文字
        noDataText: '暂无数据' // 选项为空时显示的文字
      },
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
      pickerOptions: this.getPickerOptions(),
      create_date: '', // 创建日期
      public_date: '', // 发布日期
      searchData: {
        create_time_start: '', // 起始创建时间
        create_time_end: '', // 结束创建时间
        create_rtx: [], // 创建用户RTX
        author: [], // 作者（定义数组，支持多选）
        public_time_start: '', // 起始发布时间
        public_time_end: '', // 结束发布时间
        recommend: [], // 推荐度
        database: [], // 数据库类型
        label: [], // 标签
        content: '', // 内容
        count_start: '', // 浏览次数上限
        count_end: '' // 浏览次数下限
      },
      // search input limit
      searchLimit: {
        title: 25,
        summary: 25,
        content: 50
      },
      recommendList: [
        { value: '一般', key: 1 },
        { value: '常用', key: 2 },
        { value: '频繁', key: 3 }
      ]
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
      this.searchData.create_time_start = this.create_date[0] ? this.create_date[0] + ' 00:00:00' : ''
      this.searchData.create_time_end = this.create_date[1] ? this.create_date[1] + ' 23:59:59' : ''
      this.searchData.public_time_start = this.public_date[0] ? this.public_date[0] + ' 00:00:00' : ''
      this.searchData.public_time_end = this.public_date[1] ? this.public_date[1] + ' 23:59:59' : ''
      this.$emit('filter-search-result', this.searchData, true)
    },
    clearQuery() {
      this.create_date = ''
      this.public_date = ''
      this.searchData.create_time_start = ''
      this.searchData.create_time_end = ''
      this.searchData.create_rtx = []
      this.searchData.author = []
      this.searchData.public_time_start = ''
      this.searchData.public_time_end = ''
      this.searchData.recommend = []
      this.searchData.database = []
      this.searchData.label = []
      this.searchData.content = ''
      this.searchData.count_start = ''
      this.searchData.count_end = ''
      this.$notify({
        title: '消息', // 标题
        type: 'success', // 类型：success/warning/info/error
        message: '重置成功', // 消息
        duration: 1200, // 显示时间(毫秒)
        // offset: 300, // 偏移量
        position: 'top-right', // 位置：top-right/top-left/bottom-right/bottom-left
        showClose: false // 是否显示关闭按钮
      })
      this.$emit('filter-search-result', this.searchData, true)
    }
  },
  setup: {}
}
</script>

<style scoped>

</style>
