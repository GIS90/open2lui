<template>
  <v-code
    :show="show"
    type="inside"
    :imgs="images"
    :canvas-width="canvasWidth"
    :canvas-height="canvasHeight"
    :puzzle-scale="puzzleScale"
    :slider-size="sliderSize"
    :range="range"
    :success-text="successText"
    :fail-text="failText"
    :slider-text="sliderText"
    @success="onSuccess"
    @close="onClose"
  />
</template>
<script>
import Vcode from 'vue-puzzle-vcode'

export default {
  name: 'PintuCheck',
  components: {
    'v-code': Vcode
  },
  emits: ['close-pintu-check'],
  props: {
    // 是否显示
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
      images: [], // 图片列表
      canvasWidth: 320, // Number	310	主图区域的宽度，单位 px
      canvasHeight: 170, // Number	160	主图区域的高度，单位 px
      puzzleScale: 1.1, // Number	1	拼图块(小的拼图)的大小比例，0.2 ～ 2 ，数字越大，拼图越大
      sliderSize: 45, // Number	50	左下角用户拖动的那个滑块的尺寸，单位 px
      range: 10, //	Number	10	判断成功的误差范围，单位 px, 滑动的距离和拼图的距离小于等于此值时，会判定重合
      successText: '验证通过', // String	"验证通过！"	验证成功时的提示文字
      failText: '验证失败', // String	"验证失败，请重试"	验证失败时的提示文字
      sliderText: '请拖动滑块完成拼图' // String	"拖动滑块完成拼图"
    }
  },
  methods: {
    onSuccess() {
      this.$emit('close-pintu-check', true)
    },
    onClose() {
      this.$emit('close-pintu-check', false)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
