<template>
<div class="split-pane-con">
  <split-pane :value="offset" @input="handleInput">

  </split-pane>
</div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
  data () {
    return {
      offset: 0.8
    }
  },
  components: {
    SplitPane
  },
  methods: {
    handleInput (value) {
      console.log('child comp handleInput:' + value)
      this.offset = value
    }
  }

}
</script>
<style lang="less">
.split-pane-con{
  width: 400px;
  height: 200px;
  background:papayawhip;
}

</style>
