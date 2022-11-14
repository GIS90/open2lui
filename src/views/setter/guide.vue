<template>
  <div class="app-container">
    <div id="guide-opr-container">
      <el-button icon="el-icon-position" type="primary" :plain="true" @click.prevent.stop="guide">
        开启向导
      </el-button>
    </div>
    <div id="guide-data-container" class="guide-data-container">
      <typewriter v-show="show" ref="typewriter" class="tl" :interval="80">
        <aside>
          <p>系统向导页面是对本系统对初次使用人员的一个引导，方便用户了解系统的基础信息、菜单简介、功能介绍、团队等信息。使用者也可以跳过此引导直接进行使用，每个功能会有相应的功能使用简介。</p>
          <p>更多系统详情请参考下列《{{ title }}系统说明》。</p>
        </aside>
      </typewriter>
    </div>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import typewriter from 'vue-type-writer'
import steps from './guide/steps.js'
import { baseInfo, logoTitle, loginTitle } from '@/settings.js'

export default {
  name: 'Guide',
  components: {
    typewriter
  },
  data() {
    return {
      driver: null,
      show: false,
      info: baseInfo || {
        name: 'OpenTool-Z',
        version: 'V1.2.1',
        author: 'PyGo²',
        furl: 'https://github.com/GIS90',
        burl: 'https://github.com/GIS90/open2lisapi.git'
      },
      title: 'OPENTOOL-Z智行工具箱' || loginTitle,
      motto: '践行践远，智慧前行' || logoTitle
    }
  },
  mounted() {
    // parameter config
    // 官网API：https://www.npmjs.com/package/driver.js
    this.driver = new Driver({
      className: 'scoped-class', // className to wrap driver.js popover
      animate: true, // Whether to animate or not
      opacity: 0.6, // Background opacity (0 means only popovers and without overlay)
      padding: 0, // Distance of element from around the edges
      allowClose: true, // Whether the click on overlay should close or not
      overlayClickNext: false, // Whether the click on overlay should move next
      stageBackground: '#20dfff', // default: #ffffff, Background color for the staged behind highlighted element
      showButtons: true, // Do not show control buttons in footer
      keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
      doneBtnText: '完成', // Text on the final button
      closeBtnText: '关闭', // Text on the close button for this step
      nextBtnText: '下一步', // Next button text for this step
      prevBtnText: '上一步', // Previous button text for this step
      onHighlightStarted: (Element) => {}, // Called when element is about to be highlighted
      onHighlighted: (Element) => {}, // Called when element is fully highlighted
      onDeselected: (Element) => {}, // Called when element has been deselected
      onReset: (Element) => {}, // Called when overlay is about to be cleared
      onNext: (Element) => {}, // Called when moving to next step on any step
      onPrevious: (Element) => {} // Called when moving to previous step on any step
    })
    // 打印效果
    this.$nextTick(() => {
      setTimeout(() => {
        this.print()
      }, 1200)
    })
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    },
    print() {
      this.show = true
      this.$refs.typewriter.$emit('typewrite')
    }
  }
}
</script>

<style scoped>
.guide-data-container {
  margin-top: 20px;
}
</style>
