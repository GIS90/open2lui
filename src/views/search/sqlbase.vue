<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <el-button id="btn-upload" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="openAddDialog">
        <svg-icon icon-class="i_add" />  新增
      </el-button>
      <el-button id="btn-select" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled">
        <svg-icon icon-class="i_select" />  {{ selBtnText }}
      </el-button>
      <el-button id="btn-delete" class="btn-margin" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :size="btnBaseAttrs.size" :disabled="btnDisabled">
        <svg-icon icon-class="i_delete" />  删除
      </el-button>
    </el-row>

    <!-- 新增 -->
    <sql-base-add-editor :show="addDialogStatus" @close-add-dg="closeAddDialog" />
  </div>
</template>

<script>
import SqlBaseAddEditor from '@/services/search/SqlBaseAddEditor'

export default {
  name: 'SqlBase',
  components: {
    'sql-base-add-editor': SqlBaseAddEditor
  },
  emits: [],
  props: {},
  inject: {},
  data() {
    return {
      selBtnText: '全选', // 选择按钮内容
      btnDisabled: false, // 按钮禁用状态
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      addDialogStatus: false // 新增
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    openAddDialog() { // 打开新增
      this.addDialogStatus = true
    },
    closeAddDialog(isRefresh) { // 关闭新增
      this.addDialogStatus = false
      if (isRefresh) {
        this.getTableList()
      }
    }
  }
}
</script>
