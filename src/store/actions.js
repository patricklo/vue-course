import { getAppName } from '@/api/app'
const actions = {
  // updateAppName (paramsObj) {
  //  const commit = paramsObj.commit
  // }

  // 方法1； Promise then不太友好
  // updateAppName ({ commit }) {
  // getAppName().then(res =>{
  //   console.log(res)
  //   commit('SET_APP_NAME',res.info.appName)
  // }).catch(err =>{
  //   console.log(err)
  // })
  // },

  // 方法2： async - 处理异步问题
  async updateAppName ({ commit }) {
    try {
      // 使用await函数等待异步函数执行，变成同步
      const res = await getAppName()
      commit('SET_APP_NAME', res.info.appName)
    } catch (err) {
      console.log(err)
    }
  }
}

export default actions
