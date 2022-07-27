<template>
  <div>
    <el-drawer
      :visible="show"
      title="操作说明"
      :modal="drawerAttrs.modal"
      :direction="drawerAttrs.arrow"
      :show-close="drawerAttrs.closeButton"
      :close-on-click-modal="drawerAttrs.closeOnModal"
      :close-on-press-escape="drawerAttrs.closeOnEsc"
      @close="close()"
    >
      <div class="app-container tip">
        <!-- 操作流程 -->
        <div>
          <h3>操作流程</h3>
          <ol>
            <li>下载<span class="info_red">.xls</span>格式的Excel文件模板。</li>
            <li>将需要发送钉钉绩效的内容写入模板，写入数据后上传。</li>
            <li>点击Robot配置，设置需要发送消息的机器人，具体钉钉机器人申请参考：http://pygo2.top/articles/32206/。</li>
            <li>点击需要发送消息的文件设置，设置消息Sheet、以及每个Sheet的消息标题以及字段信息。</li>
            <li>点击发送。</li>
          </ol>
        </div>
        <!-- 注意要点 -->
        <div>
          <h3>注意要点</h3>
          <ol>
            <li>.xls格式文件最大支持为<strong>65535</strong>行数，如果超出最大行数请转换为.xlsx格式文件，再进行上传。</li>
            <li>表格中的数据列一定需要包含Dtalk_ID。</li>
          </ol>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'DatlkTip',
  emits: ['close-tip'],
  props: {
    show: {
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
      drawer: true,
      // drawer attributes
      drawerAttrs: {
        arrow: 'rtl', // 方向：rtl / ltr / ttb / btt
        modal: false, // 是否需要遮罩层：true / false
        closeButton: true, // 是否显示关闭按钮：true / false
        closeOnModal: true, // 是否可以通过点击modal关闭Drawer：true / false
        closeOnEsc: true // 是否可以通过按下ESC关闭Drawer：true / false
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    close() {
      this.$emit('close-tip')
    }
  }
}
</script>

<style scoped>
.history_a {
  font-size: 16px;
  color: rgb(32, 160, 255);
}

.history_a:hover {
  font-size: 17px;
  color: red;
  font-style:italic;
}

.tip {
  line-height: 200%;
  letter-spacing: 1px;
}
</style>
