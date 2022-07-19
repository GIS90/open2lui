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
            <li>上传需要合并的Excel子文件，平台目前只支持<span class="info_red">.xls</span>、<span class="info_red">.xlsx</span>格式的Excel文件。</li>
            <li>点击文件列表最后列的设置按钮，配置需要合并的Sheet（单文件可以多选Sheet）。</li>
            <li>平台运行过程中需要等待，如果合并的子文件过多，建议去Github上逛逛（<el-link type="primary" href="https://element.eleme.io" target="_blank">点击我</el-link>）或者喝杯水。</li>
            <li>合并完成后，下载合并文件：
              <router-link :to="{ path: '/office/history' }">
                <a class="history_a">我的历史</a>
              </router-link>
            </li>
          </ol>
        </div>
        <!-- 注意要点 -->
        <div>
          <h3>注意要点</h3>
          <ol>
            <li>.xls格式文件最大支持为<strong>65535</strong>行数，如果超出最大行数请转换为.xlsx格式文件，再进行上传。</li>
            <li>合并的Excel数据默认为文件的第一个Sheet，如需文件设置多个Sheet合并，请点击配置，设置需要合并的Sheet选项。</li>
            <li>平台处理过程中请勿做其他操作，合并完成后的文件请到
              <router-link :to="{ path: '/excel/history' }">
                <a class="history_a">我的历史</a>
              </router-link>
              进行下载。
            </li>
          </ol>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'ExcelMergeTip',
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
