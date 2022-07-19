<template>
  <div class="slider-check-box">
    <div class="slider-check" :class="rangeStatus ? 'success' : ''">
      <i :class="rangeStatus ? successIcon : startIcon" @mousedown="rangeMove" />
      {{ rangeStatus ? successText : startText }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'SliderCheck',
  props: {
    // 成功之后的函数
    successFun: {
      type: Function,
      default: () => {}
    },
    // 失败之后的函数
    errorFun: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      disX: 0,
      rangeStatus: false,
      startIcon: 'el-icon-right',
      startText: '请拖住滑块，拖动到最右边',
      successIcon: 'el-icon-success',
      successText: '验证通过'
    }
  },
  methods: {
    // 滑块移动
    rangeMove(e) {
      const ele = e.target
      const startX = e.clientX
      const eleWidth = ele.offsetWidth
      const parentWidth = ele.parentElement.offsetWidth
      const MaxX = parentWidth - eleWidth
      if (this.rangeStatus) {
        // 不运行
        return false
      }
      document.onmousemove = e => {
        const endX = e.clientX
        this.disX = endX - startX
        if (this.disX <= 0) {
          this.disX = 0
        }
        if (this.disX >= MaxX - eleWidth) {
          // 减去滑块的宽度,体验效果更好
          this.disX = MaxX
        }
        ele.style.transition = '.1s all'
        ele.style.transform = 'translateX(' + this.disX + 'px)'
        e.preventDefault()
      }
      document.onmouseup = () => {
        if (this.disX !== MaxX) {
          ele.style.transition = '.5s all'
          ele.style.transform = 'translateX(0)'
          // 执行失败的函数
          this.errorFun && this.errorFun()
        } else {
          this.rangeStatus = true
          if (this.status) {
            this.$parent[this.status] = true
          }
          // 执行成功的函数
          this.successFun && this.successFun()
        }
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: #42B984;
@mixin jc-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-check-box {
  .slider-check {
    font-size: 14px !important;
    background-color: #e9e9e9;
    position: relative;
    transition: 1s all;
    user-select: none;
    color: #585858;
    @include jc-flex;
    height: 40px;
    &.success {
      background-color: $blue;
      color: #fff;
      i {
        color: $blue;
      }
    }
    i {
      position: absolute;
      left: 0;
      width: 50px;
      height: 100%;
      color: $blue;
      background-color: #fff;
      border: 1px solid #d8d8d8;
      cursor: pointer;
      font-size: 20px;
      @include jc-flex;
    }
  }
}
</style>
