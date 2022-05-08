<template>
  <el-dialog title="删除提示" :visible.sync="show" width="30%" :show-close="false">
    <span>确认删除选择的数据吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button :disabled="btnDisabled" @click="cancelDelete">取 消</el-button>
      <el-button :disabled="btnDisabled" :loading="btnLoading" type="primary" @click="confirmDelete">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import store from '@/store'
import { deleteResultFiles } from '@/api/excel'

export default {
  name: 'ExcelHistoryDelete',
  emits: ['close-delete-dialog'],
  components: {},
  props: {
    show: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    list: {
      type: Array,
      require: true,
      default: function() {}
    }
  },
  data() {
    return {
      btnDisabled: false,
      btnLoading: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    cancelDelete() {
      this.$emit('close-delete-dialog', false)
    },
    confirmDelete() {
      if (this.list.length === 0) {
        this.$message({
          message: '请选择删除的文件',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'list': this.list
      }
      this.btnDisabled = true
      this.btnLoading = true
      return new Promise((resolve, reject) => {
        deleteResultFiles(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          this.btnDisabled = false
          this.btnLoading = false
          this.$emit('close-delete-dialog', true)
          resolve(response)
        }).catch(error => {
          this.btnDisabled = false
          this.btnLoading = false
          this.$emit('close-delete-dialog', true)
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
