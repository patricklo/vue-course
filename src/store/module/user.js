import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'
const state = {
  userName: 'Lison'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {
  updateUserName ({ commit, state, rootState }) {
    // rootState.appName =
    dispatch('xxx', '')
  },
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        console.log(res)
        if (res.data.code === 200 && res.data.data.token) {
          setToken(res.data.data.token, 'token')
          resolve()
        } else {
          //
          reject(new Error('error'))
        }
      }).catch(error => { // 服务端返回status为401，会走到catch这里
        reject(error)
      })
    })
  },
  authorization ({ commit }, token) {
    console.log('authrorization : ' + token)
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        console.log('authorization res:' + res)
        if (res.code === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.data.token, 'token')
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  // 方法3：启用namespace
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
