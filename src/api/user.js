import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    // post请求的参数，需要放在data里
    data: {
      userId: userId
    }
  })
}

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export const authorization = () => {
  // 只需要传入 token ，在axios.js里配置
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}
