<template>
<div>
  <a-input v-model="inputValue"></a-input>
  <!-- <a-input :value="stateInputValue" @input="handleStateInputValue"> </a-input> -->
  <a-input v-model="stateInputValue" > </a-input>
  <p>{{ stateInputValue }} -> last letter is {{ inputValueLastLetter }}</p>
  <a-show :content="stateInputValue"/>

  <p>{{ appName }}, version:  {{ appNameWithVersion }}</p>
  <p>{{ userName }}, first letter {{ firstLetter}}</p>

  <button @click="handleChangeAppName">修改appname</button>

  <p>{{ appVersion }}</p>

  <button @click="changeUserName">修改UserNAme</button>

    <button @click="registerModule">动态注册模块</button>
  <p v-for="(li,index) in todoList" :key='index'>{{ li }}</p>

</div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// 方法2
// import { mapState } from 'vuex'

// 方法3
import { createNamespacedHelpers } from 'vuex'

// getters 方法2
import { mapGetters } from 'vuex'

// mutations 方法2
import { mapMutations, mapActions } from 'vuex'
const { mapState } = createNamespacedHelpers('user')

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    // mutations 方法2
    ...mapMutations([
      'SET_APP_NAME',
      'SET_STATE_INPUTVALUE'
    ]
    ),
    ...mapActions([
      'updateAppName'
    ]),
    ...mapMutations('user', [
      'SET_USER_NAME'
    ]
    ),

    handleChangeAppName () {
      // mutations 方法1
      // this.appName='new Appname'//报错 不能用
      // this.$store.commit('SET_APP_NAME','New App name')
      // this.$store.commit('SET_APP_VERSION')

      // mutations 方法2
      // this.SET_APP_NAME('new app: method2')

      // actions get AppName
      this.updateAppName()
    },
    changeUserName () {
      this.$store.dispatch('updateAppName', 'appFromDispatch')
      this.SET_USER_NAME('NEW USER NAME - LASDFL')

      // strict模式下会报错
      this.$store.state.user.userName = 'haha'
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    handleStateInputValue (val) {
      this.SET_STATE_INPUTVALUE(val)
    }
  },
  computed: {
    // 方法1
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }

    // 方法2：
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })

    // 方法3 - start：当 user.js启用命名空间 namespace
    ...mapState({
      userName: state => state.userName,
      appVersion: state => state.appVersion,
      // todoList: state => state.user.todo ? state.user.todo.todoList : []  -> 当有//方法3 namespace helper时，不需要加.user.
      todoList: state => state.todo ? state.todo.todoList : []
      // 当使用 :value="stateInputValue" @input="handleStateInputValue"> 时
      // stateInputValue: state => state.stateInputValue
    }),
    // 当使用<a-input v-model="stateInputValue" > </a-input> 时候
    stateInputValue: {
      get () {
        return this.$store.state.stateInputValue
      },
      set (value) {
        this.SET_STATE_INPUTVALUE = value
      }

    },
    appName () {
      return this.$store.state.appName
    },
    // 方法3 - end

    // getters 方法1
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // getter 方法2
    ...mapGetters([
      'appNameWithVersion'
    ]),
    ...mapGetters('user', [
      'firstLetter'
    ]),

    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  }
}
</script>
