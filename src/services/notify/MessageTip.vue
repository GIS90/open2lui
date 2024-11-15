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
            <li>点击新增按钮，填写需要操作的信息：是否群发、消息标题、消息内容、用户电话列表。</li>
            <li>设置是否立即发送。</li>
            <li>点击确定，提交信息。</li>
          </ol>
        </div>
        <!-- 注意要点 -->
        <div>
          <h3>注意要点</h3>
          <ol>
            <li>是否群发设置否，用户列表只允许填写一个电话号码；设置是，用户列表允许填写2000个字符数据，最多支持150人。</li>
            <li>多个电话请用英文分号；分割。</li>
          </ol>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'MessageTip',
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
