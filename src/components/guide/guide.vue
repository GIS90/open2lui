<template>
  <div class="app-container" />
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import excelMergeSteps from './steps/excelMergeSteps.js' // import steps js config

export default {
  name: 'Guide',
  emits: ['close-guide'],
  components: {},
  props: {
    guide: {
      type: Boolean,
      require: true,
      default: false,
      validator(value) {
        return [true, false].includes(value)
      }
    },
    content: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      driver: null
    }
  },
  computed: {},
  watch: {
    guide: function() {
      if (this.guide) {
        setTimeout(() => {
          this.startGuide()
        }, 900)
      }
    }
  },
  created() {},
  mounted() {
    // parameter config
    // 官网API：https://www.npmjs.com/package/driver.js
    this.driver = new Driver({
      className: 'scoped-class', // className to wrap driver.js popover
      animate: true, // 是否设置动画
      opacity: 0.7, // 背景不透明度（0表示只有弹出框，没有覆盖）
      padding: 0, // 元素与边缘之间的距离
      allowClose: true, // 单击覆盖是否应关闭
      overlayClickNext: false, // 点击覆盖是否应该下一步移动
      stageBackground: '#ffffff', // default: #ffffff，突出显示元素的背景色
      showButtons: true, // 页脚中是否显示控制按钮
      keyboardControl: true, // 允许通过键盘进行控制（退出关闭，箭头键移动）
      doneBtnText: '完成', // 完成按钮文本
      closeBtnText: '关闭', // 关闭按钮文本
      prevBtnText: '上一步', // 上一步按钮文本
      nextBtnText: '下一步', // 下一步按钮文本
      onHighlightStarted: (Element) => {}, // 当元素即将高亮显示时调用
      onHighlighted: (Element) => {}, // 当元素完全高亮显示时调用
      onDeselected: (Element) => { // 取消选择元素时调用
        this.onDeselected(Element)
      },
      onReset: (Element) => {}, // 将要清除覆盖时调用
      onNext: (Element) => {}, // 在任何步骤上移动到下一步时调用
      onPrevious: (Element) => {} // 在任何步骤上移动到上一步时调用
    })
  },
  methods: {
    startGuide() {
      let data = {}
      if (this.content === 'excelMerge') {
        data = excelMergeSteps
      } else {
        return false
      }
      this.driver.defineSteps(data)
      this.driver.start()
    },
    onDeselected(element) {
      this.$emit('close-guide')
    }
  }
}
</script>

<style scoped>
</style>
