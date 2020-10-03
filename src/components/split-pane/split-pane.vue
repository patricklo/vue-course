<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: leftOffsetPercent}"></div>
    <div class="pane-trigger-con" @mousedown="handleMouseDown" :style="{left: triggerLeft, width: `${triggerWidth}px`}"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent}"></div>
  </div>
</template>
<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    }
  },
  data () {
    return {
      // leftOffset: 0.3,
      canMove: false
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMouseDown (event) {
      // 给整个页面加上mouse move 事件
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.canMove = true
    },
    handleMouseUp (event) {
      this.canMove = false
    },
    handleMouseMove (event) {
      if (!this.canMove) return
      // event.pageX //鼠标距离容器左侧的距离
      // left: 获取最外面容器的距离左侧的距离
      const outerRect = this.$refs.outer.getBoundingClientRect()
      console.log(event.pageX - outerRect.left)
      const offset = event.pageX - outerRect.left
      const offsetPercent = offset / outerRect.width
      // this.value = offset / outerRect.width
      console.log('parent comp handleMouseMove: ' + offsetPercent)
      // this.$emit 子组件与父组件通信
      this.$emit('input', offsetPercent)
    }
  }

}
</script>
<style lang="less">
.split-pane-wrapper{
  position: relative;
  height: 100%;
  width: 100%;
  .pane{
    // float: left; //左右pane显示到一行上
    // width: 50%;
    position: absolute;
    top: 0;
    height: 100%;
    //& 指的是父级样式名 即 pane
    //&-left  -> pane-left
    &-left{
      //width: 30%;
      background: palevioletred;
    }
    &-right{
      right: 0;
      bottom: 0;
      //left: 30%;
      background:paleturquoise ;
    }
    &-trigger-con{
      width: 8px;
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10; //设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
      user-select: none;
      cursor: col-resize;
    }
  }
}

</style>
