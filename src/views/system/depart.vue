<template>
  <div class="app-container">
    <!-- 按钮 -->
    <el-row>
      <!-- 左侧按钮 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-input
          v-model.trim="filterText"
          type="text"
          placeholder="输入关键字进行过滤"
          :maxlength="inputAttrs.length"
          :clearable="inputAttrs.clear"
          :show-word-limit="inputAttrs.limit"
          :size="inputAttrs.size"
          :prefix-icon="inputAttrs.prefixIcon"
          :disabled="btnDisabled"
        />
      </el-col>
      <!-- 右侧icon -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <span style="float: right">
          <el-tooltip effect="dark" content="刷新" placement="top">
            <el-button icon="el-icon-refresh" :plain="btnIconAttrs.plain" :size="btnIconAttrs.size" :disabled="btnDisabled" :circle="btnIconAttrs.circle" @click="refreshTree" />
          </el-tooltip>
          <icon-download-excel :source="pageSourceId" :disabled="btnDisabled" />
        </span>
      </el-col>
    </el-row>
    <!-- 树 -->
    <div id="data-container" class="table-sty">
      <el-row :gutter="32">
        <!-- left: tree -->
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-tree
            ref="tree"
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
            :allow-drag="allowDrag"
            :filter-node-method="filterTreeNode"
            @node-click="nodeClick"
            @node-drag-start="dragStart"
            @node-drag-end="dragEnd"
          >
            <span slot-scope="{ node, data }" class="custom-tree-node">
              <!--节点名称-->
              <span>{{ node.label }}</span>
              <!--节点操作-->
              <span>
                <el-button class="handle-icon" type="text" size="mini" :disabled="data.lock" @click="openAdd(node, data)">新增</el-button>
                <el-button v-show="data.id !== 1" class="handle-icon-danger" type="text" size="mini" :disabled="data.lock" @click="nodeRemove(node, data)">删除</el-button>
              </span>
            </span>
          </el-tree>
        </el-col>
        <!-- right: node information -->
        <!-- 初始化内容 -->
        <el-col v-if="!showEdit" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <h3>操作说明</h3>
          <p>1、部门可以进行新增、编辑、删除、调整等操作</p>
          <p>2、节点信息通过点击部门，在详情中进行信息编辑</p>
          <p>3、部门调整通过拖拽的方式进行调整，禁用部门不允许进行调整</p>
          <p>4、树根节点不允许删除</p>
          <p>5、筛选功能可以根据关键字进行节点筛选过滤</p>
        </el-col>
        <!-- 编辑 -->
        <el-col v-else :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <depart-edit :form-data="editNode" :user-list="userList" @edit-after="editAfter" />
        </el-col>
      </el-row>
    </div>

    <!-- 新增 -->
    <depart-add :show="addDialogStatus" :up-node="newNodeUp" @close-add="closeAdd" />

  </div>
</template>

<script>
import store from '@/store'
import DepartAdd from '@/services/system/DepartAdd'
import DepartEdit from '@/services/system/DepartEdit'
import IconDownloadExcel from '@/components/IconDownloadExcel'
import { SystemDepartList, SystemDepartDelete,
  SystemDepartDetail, SystemDepartDrag } from '@/api/system'

export default {
  name: 'InfoDepart',
  emits: [],
  components: {
    'depart-add': DepartAdd,
    'depart-edit': DepartEdit,
    'icon-download-excel': IconDownloadExcel
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
      // button icon attributes
      btnIconAttrs: {
        size: 'medium', // 大小 medium / small / mini / ''
        type: 'primary', // 类型 primary / success / warning / danger / info / text
        plain: true, // 是否为朴素按钮
        round: false, // 是否为圆角按钮
        circle: true // 是否为圆形按钮
      },
      inputAttrs: { // input attrs
        size: 'medium', // 大小：medium / small / mini / ''
        clear: true, // 可清空的输入框
        length: '25', // 最大输入长度
        limit: true, // 展示字数统计
        prefixIcon: 'el-icon-edit', // input前缀icon
        suffixIcon: '' // input后缀icon
      },
      newNodeUp: {}, // 当前新增节点的父节点
      addDialogStatus: false, // 新增dialog状态
      userList: [], // 用户列表
      showEdit: false, // 是否显示编辑
      editNode: {}, // 编辑的节点信息
      filterText: '', // 过滤内容
      pageSourceId: 'system-depart' // page source id
    }
  },
  computed: {},
  watch: {
    editNode(newVal, oldVal) {
      // 默认editNode具有order_id默认值，依据md5_id判断
      newVal.md5_id ? this.showEdit = true : false
    },
    filterText(newVal, oldVal) {
      this.$refs.tree.filter(newVal)
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getData()
    })
  },
  methods: {
    // 数据初始化
    getData(type) {
      // type: 1-初始化，2-手动刷新，3-高级查询
      const data = {
        'rtx_id': store.getters.rtx_id
      }
      return new Promise((resolve, reject) => {
        SystemDepartList(data).then(response => {
          const { status_id, data } = response
          if (status_id === 100) {
            this.treeData = data.tree // tree数据
          }
          // 手动刷新提示
          if ([2, 3].includes(type) && status_id === 100) {
            this.$notify({
              title: '消息', // 标题
              type: 'success', // 类型：success/warning/info/error
              message: '刷新成功', // 消息
              duration: 1200, // 显示时间(毫秒)
              // offset: 300, // 偏移量
              position: 'top-right', // 位置：top-right/top-left/bottom-right/bottom-left
              showClose: false // 是否显示关闭按钮
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 手工刷新树
    refreshTree() {
      this.getData(2)
    },
    // 节点新增
    openAdd(node, nodeData) {
      if (!node || !nodeData) {
        return false
      }
      this.addDialogStatus = true
      this.newNodeUp = { id: nodeData.id, name: nodeData.label, path: nodeData.dept_path }
    },
    // 关闭节点新增
    closeAdd(isRefresh) {
      this.addDialogStatus = false
      if (isRefresh) {
        this.getData()
      }
    },
    // 节点删除
    nodeRemove(node, nodeData) {
      if (!node || !nodeData) {
        return false
      }
      if (nodeData.id === 1) {
        this.$message({
          message: '根节点不允许删除',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      this.btnDisabled = true
      const data = {
        rtx_id: store.getters.rtx_id,
        md5: nodeData.md5_id
      }
      return new Promise((resolve, reject) => {
        SystemDepartDelete(data).then(response => {
          // 后台软删除
          const { status_id, message } = response
          if (status_id === 100) {
            // 前端tree删除
            const parent = node.parent
            const children = parent.data.children || parent.data
            const index = children.findIndex(d => d.id === nodeData.id)
            children.splice(index, 1)

            this.$message({
              message: '删除成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
        })
      })
    },
    // 点击节点事件
    nodeClick(nodeData, node, event) {
      if (!node || !nodeData) {
        return false
      }

      // 获取最新数据
      const data = {
        rtx_id: store.getters.rtx_id,
        md5: nodeData.md5_id
      }
      return new Promise((resolve, reject) => {
        SystemDepartDetail(data).then(response => {
          const { status_id } = response
          if (status_id === 100) {
            this.editNode = response.data.depart // 部门详情
            this.userList = response.data.user // 用户列表
          } else {
            this.editNode = nodeData
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 编辑节点后的动作
    editAfter(isRefresh) {
      if (isRefresh) {
        this.getData()
      }
    },
    // 判断节点能否被拖拽
    allowDrag(draggingNode) {
      if (!draggingNode || !draggingNode.data) {
        return
      }
      return !draggingNode.data.lock
    },
    // 拖拽前：节点拖拽前判断是否可操作
    dragStart(dropNode, event) {
      if (!dropNode || !dropNode.data) {
        return
      }
      if (dropNode.data.lock) {
        this.$message({
          message: '节点被禁用，不允许调整',
          type: 'warning',
          duration: 2.0 * 1000
        })
      }
    },
    // 拖拽后：调整节点顺序
    dragEnd(draggingNode, dropNode, dropType, event) {
      if (!draggingNode || !draggingNode.data) {
        return
      }
      if (!dropNode || !dropNode.data) {
        return
      }

      // 根据dropType类型判断父节点，
      // before、after：dropNode用pid
      // inner：dropNode用id
      // none：return
      if (dropType === 'none') {
        return false
      }
      if (!['before', 'after', 'inner'].includes(dropType)) {
        this.$message({
          message: '节点拖拽类型错误',
          type: 'warning',
          duration: 2.0 * 1000
        })
        return false
      }

      this.btnDisabled = true
      const data = {
        rtx_id: store.getters.rtx_id,
        md5: draggingNode.data.md5_id,
        pid: ['before', 'after'].includes(dropType) ? dropNode.data.pid : dropNode.data.id
      }

      return new Promise((resolve, reject) => {
        SystemDepartDrag(data).then(response => {
          const { status_id, message } = response
          if (status_id === 100) {
            this.$message({
              message: '调整成功' || message,
              type: 'success',
              duration: 2.0 * 1000
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        }).finally(() => {
          // 重置按钮状态
          this.btnDisabled = false
        })
      })
    },
    filterTreeNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
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
