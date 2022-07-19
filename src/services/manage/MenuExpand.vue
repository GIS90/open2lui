<template>
  <el-switch
    v-model="status"
    style="margin-left: 20px;"
    :disabled="switchAttrs.disabled"
    :width="switchAttrs.width"
    :active-text="switchAttrs.activeText"
    :inactive-text="switchAttrs.inactiveText"
    :active-color="switchAttrs.activeColor"
    :inactive-color="switchAttrs.inactiveColor"
    :active-value="switchAttrs.activeValue"
    :inactive-value="switchAttrs.inactiveValue"
    @change="changeStatus($event)"
  />
</template>

<script>
export default {
  name: 'MenuExpand',
  emits: [
    'menu-expand-status'
  ],
  components: {},
  props: {
    expand: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    }
  },
  data() {
    return {
      status: this.expand,
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 40, // 宽度（像素），默认40
        activeText: '展开', // 打开时的文字描述
        inactiveText: '关闭', // 关闭时的文字描述
        activeValue: true, // 打开时的value
        inactiveValue: false, // 打开时的value
        activeColor: '#ff4949', // 打开时的背景色
        inactiveColor: '#13ce66' // 关闭时的背景色
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeStatus(value) { // change status
      this.$emit('menu-expand-status', value)
    }
  }
}
</script>

<style scoped>

</style>
