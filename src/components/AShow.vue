<template>
<div>
<p>AShow: {{ content }}</p>
</div>
</template>
<script>
export default {
  name: 'AInput',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input',value)
    }
  }
}
</script>
