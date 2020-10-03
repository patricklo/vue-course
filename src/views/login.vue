<template>
  <div>
    <input v-model="userName"/>
    <input type="password" v-model="password"/>
    <button @click="handleSubmit">Login</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'login_page',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', [
      'login'
    ]),
    handleSubmit () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        console.log('pushing to home')
        this.$router.push({ name: 'home' })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
