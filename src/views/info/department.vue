<template>
  <div class="app-container">
    <el-row :gutter="32">
      <!-- tree 1 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-button @click="submit">提交</el-button>
        <el-tree
          ref="menuTree"
          :data="treeData"
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
      </el-col>
      <!-- json 2 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div>
          <json-viewer
            :value="treeData"
            :expand-depth="5"
            copyable
            :boxed="false"
            sort
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer'
import store from '@/store'
import { InfoDepartList, InfoDepartUpdate } from '@/api/info'

export default {
  name: 'Department',
  emits: [],
  components: {
    'json-viewer': JsonViewer
  },
  props: {},
  data() {
    return {
      defaultTreeNodeName: '新目录',
      defaultLeafNodeName: '新节点',
      defaultExpand: false,
      treeData: [], // 初始化置空
      defaultExpandedKeys: [], // 默认展开的keys
      defaultCheckedKeys: [], // 默认选择的keys
      treeAttrs: { // tree组件attrs
        nodeKey: 'id', // 树节点用来作为唯一标识的属性
        checkbox: false, // show-checkbox	节点是否可被选择
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
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getData()
    })
  },
  methods: {
    getData() {
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        InfoDepartList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.treeData = data
          }
          resolve(response)
        }).catch(error => {
          this.loading = false
          reject(error)
        })
      })
    },
    submit() {
      if (!this.treeData) {
        return false
      }
      const data = {
        'rtx_id': store.getters.rtx_id,
        'data': JSON.stringify(this.treeData)
      }
      return new Promise((resolve, reject) => {
        InfoDepartUpdate(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          resolve(response)
        }).catch(error => {
          this.loading = false
          reject(error)
        })
      })
    }
  }
}
</script>

<style scoped>
.node-icon:hover {
  cursor: pointer;
}

.margin-left {
  margin-left: 20px;
}

.muted {
  color: gray;
  font-size: 80%;
}
</style>
