import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    //post请求的参数，需要放在data里
    data: {
        userId: userId
    }
  })
}

