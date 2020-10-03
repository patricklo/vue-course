<template>
  <div class="home">
    <button @click="handleClick('back')">return </button>

    <button @click="handleClick('push')">跳转到parent</button>

    <button @click="handleClick('replace')">replace到parent</button>

    <div>{{ food }}</div>

    <button @click="getInfo">request data</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 组件内守卫：beforeRouteEnter,beforeRouteLeave,beforeRouteUpdate
  // 页面刚进入，未确认未渲染前调用
  beforeRouteEnter (to, from, next) {
    console.log('Home.vue beforeRouteEnter')
    console.log(from.name)
    console.log(to.name)
    // 无法使用this方法，但如果真要使用可以在next中使用vm,即为当前页面的实例
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // 在组件离开前调用 ，用处：当前页面有编辑时，可以提示用户是否保存
    console.log('before route leaving')
    const leave_confirm = confirm('confirm to leave?')
    if (leave_confirm) next()
    else next(false)
  },

  methods: {
    getInfo () {
      getUserInfo({ userId: 21 }).then(res => {
        console.log(res)
      })
    },
    handleClick (type) {
      if (type === 'back') {
        this.$router.go(-1)
      } else if (type === 'push') {
        // this.$router.push('/parent')
        // 历史记录中会有前一页的记录
        // this.$router.push({
        //   name: 'parent',
        //   query: {
        //     name: 'lison'
        //   }
        // })
        this.$router.push({
          name: 'argu',
          params: {
            name: 'lison'
          }
        })
      } else if (type === 'replace') {
        // 历史记录中没有前一页的记录
        // 如果在这回退，只能回退到parent页面
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
