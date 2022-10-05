<template>
  <div class="app-container">
    <el-row :gutter="32">
      <!-- tree 1 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <vue-tree-list
          :model="treeData"
          :default-tree-node-name="defaultTreeNodeName"
          :default-leaf-node-name="defaultLeafNodeName"
          :default-expanded="defaultExpand"
          @click="onClick"
          @add-node="onAdd"
          @delete-node="onDelete"
          @change-name="onChangeName"
          @drag="onDrag"
          @drop-before="dropBefore"
          @drop-after="dropAfter"
        >
          <template v-slot:leafNameDisplay="slotProps">
            <span>
              {{ slotProps.model.name }}
            </span>
          </template>
          <template v-slot:addTreeNodeIcon>
            <el-tooltip class="item" effect="dark" content="新增目录" placement="top">
              <svg-icon icon-class="c_folder" class="node-icon margin-left" />
            </el-tooltip>
          </template>
          <template v-slot:addLeafNodeIcon>
            <el-tooltip class="item" effect="dark" content="新增节点" placement="top">
              <svg-icon icon-class="i_add" class="node-icon margin-left" />
            </el-tooltip>
          </template>
          <template v-slot:editNodeIcon>
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <svg-icon icon-class="i_edit" class="node-icon margin-left" />
            </el-tooltip>
          </template>
          <template v-slot:delNodeIcon>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <svg-icon icon-class="i_delete" class="node-icon margin-left" />
            </el-tooltip>
          </template>
          <template v-slot:leafNodeIcon>
            <span class="icon node-icon margin-left">
              🍃
            </span>
          </template>
          <template v-slot:treeNodeIcon="slotProps">
            <span class="icon node-icon margin-left">
              {{ (slotProps.model.children && slotProps.model.children.length > 0 && !slotProps.expanded) ? '🌲' : '' }}
            </span>
          </template>
        </vue-tree-list>
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
// https://github.com/ParadeTo/vue-tree-list
import { VueTreeList, Tree } from 'vue-tree-list'
import JsonViewer from 'vue-json-viewer'
import store from '@/store'
import { InfoDepartList } from '@/api/info'

export default {
  name: 'Department',
  emits: [],
  components: {
    'vue-tree-list': VueTreeList,
    'json-viewer': JsonViewer
  },
  props: {},
  data() {
    return {
      defaultTreeNodeName: '新目录',
      defaultLeafNodeName: '新节点',
      defaultExpand: false,
      treeData: new Tree([]) // 初始化置空
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
            this.treeData = new Tree(data)
          }
          resolve(response)
        }).catch(error => {
          this.loading = false
          reject(error)
        })
      })
    },
    onClick(node) {
      console.log('onClick---------')
      console.log(node)
    },
    onAdd(node) {
      console.log('onAddNode---------')
      console.log(node)
    },
    onDelete(node) {
      console.log('onDel---------')
      console.log(node)
      node.remove()
    },
    onChangeName(node) {
      console.log('onChangeName---------')
      console.log(node)
    },
    onDrag: function({ node, src, target }) {
      // eslint-disable-next-line no-console
      console.log('drop', node, src, target)
    },
    dropBefore: function({ node, src, target }) {
      // eslint-disable-next-line no-console
      console.log('drop-before', node, src, target)
    },
    dropAfter: function({ node, src, target }) {
      // eslint-disable-next-line no-console
      console.log('drop-after', node, src, target)
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
