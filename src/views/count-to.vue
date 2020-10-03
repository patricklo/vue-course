<template>
  <div>
    <count-to :end-val="endVal"></count-to>
  <button @click="updateNumber">update</button>
  </div>

</template>
<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',
  data () {
    return {
      endVal: 100
    }
  },
  components: {
    CountTo
  },
  methods: {
    updateNumber () {
      this.endVal += Math.random() * 100
    }
  },
  handleEnd (endVal) {
    console.log('endval=' + endVal)
  }
}
</script>
