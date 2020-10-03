<template>
  <div class="email">
    <button @click="handleClick">click me </button>
    email: patric@com
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'Hello bus')
    }
  }
}
</script>
<style>
.email{

  border: 1px solid green;
}
</style>
