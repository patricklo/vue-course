import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production' ? false : true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [
    saveInLocal
  ]
})
