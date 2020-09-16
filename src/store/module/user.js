const state = {
  userName: 'Lison'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0,1)
  }
}

const mutations = {
  SET_USER_NAME (state, params){
    state.userName = params
  }
}

const actions = {
    updateUserName ({commit, state, rootState}){
       // rootState.appName =
    dispatch('xxx', '')
    }
}

export default {
  //方法3：启用namespace
  namespaced:true,
  getters,
  state,
  mutations,
  actions
}
