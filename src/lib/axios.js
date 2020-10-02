import axios from 'axios'
import {baseURL} from '@/config'
class HttpRequest{
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    //请求队列
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  //拦截器
  //instance : axios实例
  interceptors (instance, url) {
    //请求拦截器
    instance.interceptors.request.use(config => {
      //添加全局的loading...
      //spinning
      //spin.show()
      if (Object.keys(this.queue).length) {
        //Spin.show()
      }
      this.queue[url] = true
      console.log('instance.interceptros.request.use => ' + config)
      return config
    }, error => {
      return Promise.reject(error)
    })
    //响应拦截器 -
    instance.interceptors.response.use(res => {
      console.log('instance.interceptros.response.use => '+res)
      delete this.queue[url]
      return res
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  //创建请求
  //options:请求参数，如{ url: '/getUserInfo',  method: 'post' }
  request (options) {
    const instance = axios.create()
    //合并全局配置和给定配置
    //合并2个对象为一个对象，如果有相同属性，会用后面给定的配置去覆盖全局默认配置
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

}

export default HttpRequest
