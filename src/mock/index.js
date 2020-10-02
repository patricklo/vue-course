import { get } from 'core-js/fn/dict'
import Mock  from 'mockjs'
import { getUserInfo } from './response/user'

//在开发环境下，使用Mockjs对请求进行拦截，并返回 Mock数据
Mock.mock('http://localhost:3000/getUserInfo', 'post', getUserInfo)

Mock.setup({
  timeout: 500 //设置延时
})



export default Mock
