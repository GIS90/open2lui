<template>
  <el-switch
    v-model="row.is_del"
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
import { changeUserStatus } from '@/api/manage'

export default {
  name: 'UserStatus',
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
        activeText: '注销', // 打开时的文字描述
        inactiveText: '启用', // 关闭时的文字描述
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
    changeStatus(value) { // change status 启用 && 注销
      if (!this.row || !this.row?.rtx_id) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'c_rtx_id': this.row.rtx_id,
        'status': value
      }
      return new Promise((resolve, reject) => {
        changeUserStatus(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: message,
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
