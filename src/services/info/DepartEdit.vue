<template>
  <div>
    <el-form ref="formData" :label-position="labelPosition" :model="formData" :rules="formDataRules" label-width="auto" style="width: 100%">
      <!--只读信息-->
      <el-form-item label="ID" prop="id">
        <el-input
          v-model.trim="formData.id"
          type="text"
          :size="inputAttrs.size"
          disabled
        />
      </el-form-item>
      <!--只读信息 end-->
      <el-form-item label="名称" prop="label">
        <el-input
          v-model.trim="formData.label"
          type="text"
          placeholder="请输入部门名称"
          :maxlength="formDataLimit.label"
          :clearable="inputAttrs.clear"
          :show-word-limit="inputAttrs.limit"
          :size="inputAttrs.size"
          :prefix-icon="inputAttrs.prefixIcon"
          :disabled="disabled"
        />
      </el-form-item>
      <el-form-item label="简述" prop="description">
        <el-input
          v-model="formData.description"
          type="textarea"
          placeholder="请输入部门简述"
          :autosize="textAreaAttrs.autoSize"
          :maxlength="formDataLimit.description"
          :clearable="textAreaAttrs.clear"
          :show-word-limit="textAreaAttrs.limit"
          :prefix-icon="inputAttrs.prefixIcon"
          :disabled="disabled"
        />
      </el-form-item>
      <!--只读信息-->
      <el-form-item label="路径" prop="dept_path">
        <el-input
          v-model="formData.dept_path"
          type="text"
          :size="inputAttrs.size"
          disabled
        />
      </el-form-item>
      <!--只读信息 end-->
      <el-form-item label="管理员" prop="manage_rtx">
        <el-select
          v-model="formData.manage_rtx"
          style="width: 100%"
          :size="selectAttrs.size"
          placeholder="请选择部门管理员"
          :disabled="disabled"
          :filterable="selectAttrs.filterable"
          :multiple="selectAttrs.multiple"
          :clearable="selectAttrs.clearable"
          :no-data-text="selectAttrs.noDataText"
          :collapse-tags="selectAttrs.collapseTags"
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
      <el-form-item label="状态" prop="lock">
        <el-radio v-model="formData.lock" :label="radioValue.use">启用</el-radio>
        <el-radio v-model="formData.lock" :label="radioValue.ban">禁用</el-radio>
      </el-form-item>
      <el-form-item label="排序ID" prop="order_id">
        <el-input-number
          v-model="formData.order_id"
          style="width: 100%"
          :controls="numberAttrs.controls"
          :controls-position="numberAttrs.controlsPosition"
          :min="numberAttrs.min"
          :max="numberAttrs.max"
          :step="numberAttrs.step"
          :size="numberAttrs.size"
          :disabled="disabled"
        />
      </el-form-item>
      <el-form-item>
        <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="submit()">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '@/store'
import { InfoDepartUpdate } from '@/api/info'

export default {
  name: 'DepartEdit',
  emits: ['edit-after'],
  components: {},
  props: {
    formData: {
      type: Object,
      require: true,
      default() {
        return {}
      }
    },
    userList: {
      type: Array,
      require: true,
      default: () => []
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      textAreaAttrs: { // textArea attrs
        rows: 8, // 输入框行数
        autoSize: { minRows: 6, maxRows: 8 }, // 自适应内容高度
        clear: true, // 可清空的输入框
        length: '255', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      selectAttrs: { // select attrs
        size: 'medium', // 大小：''/medium/small/mini
        multiple: false, // 多选
        clearable: true, // 清空选择
        filterable: true, // 搜索功能
        collapseTags: false, // 多个合并成一个
        limit: 1, // 多选时用户最多可以选择的项目数，为 0 则不限制
        noDataText: '暂无数据', // 选项为空时显示的文字
        placeholder: '请选择管理员' // 默认显示内容
      },
      numberAttrs: { // input number attrs
        size: '', // 大小：large, small, ''默认
        min: 1, // 最小值
        max: 10000, // 最大值
        step: 1, // 计数器步长
        controls: true, // 是否使用控制按钮
        controlsPosition: '',	// 控制按钮位置: right
        placeholder: '请输入排序ID'
      },
      radioAttrs: { // radio attrs
        border: false, // 边框
        size: 'small' // Radio 的尺寸medium / small / mini
      },
      radioValue: {
        use: false,
        ban: true
      },
      formDataLimit: {
        label: '30',
        description: '300',
        manage_rtx: '25'
      },
      formDataRules: {
        label: [
          { required: true, message: '请输入部门名称', trigger: ['blur', 'change'] },
          { min: 1, max: 30, message: '部门名称最大长度为30', trigger: ['blur', 'change'] }
        ],
        description: [
          { required: true, message: '请输入部门简述', trigger: ['blur', 'change'] },
          { min: 1, max: 300, message: '部门简述最大长度为300', trigger: ['blur', 'change'] }
        ],
        manage_rtx: [
          { required: true, message: '请选择部门管理员', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submit() {
      this.$refs.formData.validate(valid => {
        if (valid) {
          this.disabled = true
          this.loading = true
          const data = {
            'rtx_id': store.getters.rtx_id,
            'md5': this.formData.md5_id,
            // 'pid': this.formData.pid,
            'name': this.formData.label,
            'description': this.formData.description,
            'manage_rtx': this.formData.manage_rtx,
            'lock': this.formData.lock,
            'order_id': this.formData.order_id || 1
          }
          return new Promise((resolve, reject) => {
            InfoDepartUpdate(data).then(response => {
              const { status_id, message } = response
              if (status_id === 100) {
                this.$message({
                  message: '更新成功' || message,
                  type: 'success',
                  duration: 2.0 * 1000
                })
                this.$emit('edit-after', true)
              }
              resolve(response)
            }).catch(error => {
              reject(error)
            }).finally(() => {
              // 重置按钮状态
              this.disabled = false
              this.loading = false
              // 清空表单状态
              this.$refs.formData.clearValidate()
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
