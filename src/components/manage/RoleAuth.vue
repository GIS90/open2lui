<template>
  <div>
    <el-dialog
      :visible="show"
      :title="dialogAttrs.title"
      :width="dialogAttrs.width"
      :fullscreen="dialogAttrs.fullScreen"
      :top="dialogAttrs.top"
      :modal="dialogAttrs.modal"
      :lock-scroll="dialogAttrs.lockScroll"
      :open-delay="dialogAttrs.openDelay"
      :close-delay="dialogAttrs.closeDelay"
      :close-on-click-modal="dialogAttrs.closeOnClickModal"
      :close-on-press-escape="dialogAttrs.closeOnPressEscape"
      :show-close="dialogAttrs.showClose"
      :draggable="dialogAttrs.draggable"
      :center="dialogAttrs.center"
      @open="openDialog()"
      @close="closeDialog()"
    >
      <el-tree
        ref="menuTree"
        :data="menuTree"
        :show-checkbox="treeAttrs.checkbox"
        :node-key="treeAttrs.nodeKey"
        :lazy="treeAttrs.load"
        :highlight-current="treeAttrs.hln"
        :expand-on-click-node="treeAttrs.encn"
        :check-on-click-node="treeAttrs.cncn"
        :auto-expand-parent="treeAttrs.aep"
        :check-strictly="treeAttrs.es"
        :accordion="treeAttrs.accordion"
        :indent="treeAttrs.indent"
        :icon-class="treeAttrs.icon"
        :draggable="treeAttrs.drag"
        :default-expanded-keys="defaultExpandedKeys"
        :default-checked-keys="defaultCheckedKeys"
        :props="treeAttrs.defaultProps"
      />

      <!--footer-->
      <template #footer>
        <span class="dialog-footer">
          <el-button :disabled="disabled" @click="closeDialog()">取消</el-button>
          <el-button :disabled="disabled" :loading="loading" type="primary" @click.native.prevent="saveAuthRole()">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { getAuthTree, submitAuthTree } from '@/api/role'

export default {
  name: 'RoleAuth',
  emits: ['close-auth-role'],
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
    tableRow: {
      type: Object,
      require: true,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      loading: false, // 组件loading，主要用于button
      disabled: false, // 禁用组件
      labelPosition: 'left', // label-position 属性可以改变表单域标签的位置，可选值为 top、left、right
      dialogAttrs: {
        title: '权限设置',
        width: '40%', // Dialog 的宽度
        fullScreen: false, // 是否为全屏 Dialog
        top: '10%', // Dialog CSS 中的 margin-top 值
        modal: true, // 遮罩层
        lockScroll: true, // 是否在 Dialog 出现时将 body 滚动锁定
        openDelay: 0, // Dialog 打开的延时时间，单位毫秒
        closeDelay: 0, // Dialog 关闭的延时时间，单位毫秒
        closeOnClickModal: true, // 是否可以通过点击 modal 关闭 Dialog
        closeOnPressEscape: true, // 是否可以通过按下 ESC 关闭 Dialog
        showClose: true, // 是否显示关闭按钮
        draggable: false, // 为 Dialog 启用可拖拽功能
        center: false // 是否让 Dialog 的 header 和 footer 部分居中排列
      },
      treeAttrs: { // tree组件attrs
        nodeKey: 'id', // 树节点用来作为唯一标识的属性
        checkbox: true, // show-checkbox	节点是否可被选择
        load: false, // 懒加载
        es: false, // check-strictly	在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
        hln: true, // highlight-current是否高亮当前选中节点，false or true
        encn: true, // expand-on-click-node	是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点
        cncn: false, // check-on-click-node	是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点
        aep: true, // auto-expand-parent	展开子节点的时候是否自动展开父节点
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        accordion: false, // 是否每次只打开一个同级树节点展开，false or true
        indent: 16, // 相邻级节点间的水平缩进，单位为像素
        icon: '', // 自定义树节点的图标
        drag: false, // 是否开启拖拽节点功能
        emptyText: '暂无数据' // 内容为空的时候展示的文本
      },
      defaultExpandedKeys: [], // 默认展开的keys
      defaultCheckedKeys: [], // 默认选择的keys
      menuTree: [] // menu tree
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    openDialog() { // 初始化操作
      this.initAuthTree()
    },
    closeDialog() { // 关闭dialog
      this.$emit('close-auth-role', false)
    },
    saveAuthRole() { // 提交权限
      const halfChecked = this.$refs.menuTree.getHalfCheckedKeys() // 半选状态，主要是有子节点的
      const checked = this.$refs.menuTree.getCheckedKeys() // 选择
      const data = {
        'rtx_id': store.getters.rtx_id,
        'md5': this.tableRow.md5_id,
        'keys': checked.concat(halfChecked)
      }
      console.log(data)
      return new Promise((resolve, reject) => {
        submitAuthTree(data).then(response => {
          this.disabled = false
          this.loading = false
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '权限保存成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
            this.$emit('close-auth-role', false)
          }
          resolve(response)
        }).catch(error => {
          this.disabled = false
          this.loading = false
          reject(error)
        })
      })
    },
    initAuthTree() { // 获取权限tree
      const params = {
        'md5': this.tableRow.md5_id
      }
      return new Promise((resolve, reject) => {
        getAuthTree(params).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.menuTree = data.menus
            this.defaultCheckedKeys = data.auths
            this.defaultExpandedKeys = data.expand
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    checkNode(node, nodeStatus) { // 选择节点事件
    },
    checkNodeChange(node, nodeStatus, subNodeStatus) { // 节点状态改变事件
    }
  }
}
</script>

<style scoped>

</style>
