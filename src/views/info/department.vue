<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-button id="btn-add" :size="btnBaseAttrs.size" :plain="btnBaseAttrs.plain" :round="btnBaseAttrs.round" :disabled="btnDisabled" @click="submit">
        <svg-icon icon-class="i_main" />  更新树
      </el-button>
    </el-row>
    <!-- 树 -->
    <div id="data-container" class="table-sty">
      <el-row :gutter="32">
        <!-- tree 1 -->
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
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
            :default-expand-all="treeAttrs.defaultExpand"
            :default-expanded-keys="defaultExpandedKeys"
            :default-checked-keys="defaultCheckedKeys"
            :props="treeAttrs.defaultProps"
          >
            <span slot-scope="{ node, data }" class="custom-tree-node">
              <!--节点名称-->
              <span>{{ node.label }}</span>
              <!--节点操作-->
              <span>
                <el-button class="handle-icon" type="text" size="mini" @click="openAdd(node)">新增</el-button>
                <el-button class="handle-icon" type="text" size="mini" @click="openEdit(node)">编辑</el-button>
                <el-button class="handle-icon-danger" type="text" size="mini" @click="openRemove(node, data)">删除</el-button>
              </span>
            </span>
          </el-tree>
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

    <!-- 新增 -->
    <depart-add :show="addDialogStatus" :up-node="oprNode" @close-add="closeAdd" />

  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer'
import store from '@/store'
import DepartAdd from '@/services/info/DepartAdd'
import { InfoDepartList, InfoDepartUpdateTree } from '@/api/info'

export default {
  name: 'Department',
  emits: [],
  components: {
    'json-viewer': JsonViewer,
    'depart-add': DepartAdd
  },
  props: {},
  data() {
    return {
      btnDisabled: false, // 按钮禁用状态
      defaultTreeNodeName: '新目录', // 新建默认目录名称
      defaultLeafNodeName: '新节点', // 新建默认节点名称
      defaultExpandedKeys: [], // 默认展开的keys
      defaultCheckedKeys: [], // 默认选择的keys
      treeData: [], // 初始化置空
      treeAttrs: { // tree组件attrs
        nodeKey: 'id', // 树节点用来作为唯一标识的属性
        checkbox: false, // show-checkbox	节点是否可被选择
        load: false, // 懒加载
        es: false, // check-strictly 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
        hln: true, // highlight-current是否高亮当前选中节点，false or true
        encn: false, // expand-on-click-node 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点
        cncn: false, // check-on-click-node 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点
        aep: true, // auto-expand-parent 展开子节点的时候是否自动展开父节点
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        accordion: false, // 是否每次只打开一个同级树节点展开，false or true
        indent: 16, // 相邻级节点间的水平缩进，单位为像素
        icon: '', // 自定义树节点的图标
        drag: true, // 是否开启拖拽节点功能
        defaultExpand: true, // 是否默认展开
        emptyText: '暂无数据' // 内容为空的时候展示的文本
      },
      // button attributes
      btnBaseAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: false // 是否为圆形按钮
      },
      oprNode: {}, // 当前选择操作的节点
      addDialogStatus: false, // 新增dialog状态
      editDialogStatus: false, // 编辑dialog状态
      removeDialogStatus: false // 删除dialog状态
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
    // 数据初始化
    getData() {
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        InfoDepartList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.treeData = data.tree // tree数据
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 节点新增
    openAdd(node) {
      if (!node || !node.data) {
        return false
      }
      this.addDialogStatus = true
      this.oprNode = { id: node.data.id, name: node.data.label, 'path': node.data.dept_path }
    },
    // 关闭节点新增
    closeAdd(isRefresh) {
      this.addDialogStatus = false
      if (isRefresh) {
        this.getData()
      }
    },
    // 节点编辑
    openEdit(node) {
      if (!node || !node.data) {
        return false
      }
      this.editDialogStatus = true
      this.oprNode = { id: node.data.id, name: node.data.label, 'path': node.data.dept_path }
    },
    // 关闭节点编辑
    closeEdit(isRefresh) {
      this.editDialogStatus = false
      if (isRefresh) {
        this.getData()
      }
    },
    // 节点删除
    openRemove(node, tree) {
      if (!node) {
        return false
      }
      this.removeDialogStatus = true

      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === tree.id)
      children.splice(index, 1)
    },
    // 关闭节点删除
    closeRemove(isRefresh) {
      this.removeDialogStatus = false
      if (isRefresh) {
        this.getData()
      }
    },
    // 提交节点
    submit() {
      if (!this.treeData) {
        return false
      }
      this.btnDisabled = true
      const data = {
        'rtx_id': store.getters.rtx_id,
        'data': this.treeData // string: JSON.stringify(this.treeData)
      }
      return new Promise((resolve, reject) => {
        InfoDepartUpdateTree(data).then(response => {
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
          reject(error)
        }).finally(() => {
          this.btnDisabled = false
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

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.handle-icon:hover{
  color: #42B984;
  /*font-size: 16px;*/
  font-weight: 800;
}

.handle-icon-danger:hover{
  color: red;
  /*font-size: 16px;*/
  font-weight: 800;
}
</style>
