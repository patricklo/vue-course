import vue from 'vue'
//用于同步操作，异步操作(ajax)放在action
const mutations = {
  SET_APP_NAME (state, params){
    state.appName =params
  },
  SET_APP_VERSION (state){
    vue.set(state,'appVersion', 'Version:v2.0')
  },
  SET_STATE_INPUTVALUE(state,value){
    state.stateInputValue=value
  }

}

export default mutations
