<template>
  <el-switch
    v-model="row.status"
    style="display: block"
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
import store from '@/store'
import { SystemDictStatus } from '@/api/system'

export default {
  name: 'DictStatus',
  emits: [],
  components: {},
  props: {
    row: {
      type: Object,
      require: true,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      switchAttrs: { // switch attrs
        disabled: false, // 是否禁用
        width: 35, // 宽度（像素），默认40
        activeText: '禁用', // 打开时的文字描述
        inactiveText: '启用', // 关闭时的文字描述
        activeValue: false, // 打开时的value
        inactiveValue: true, // 打开时的value
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
    changeStatus(value) { // change status 启用 && 注销
      if (!this.row || !this.row?.md5_id) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.row.md5_id,
        'status': value
      }
      return new Promise((resolve, reject) => {
        SystemDictStatus(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '设置成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
