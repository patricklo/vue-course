import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
//ICON第2种 ： symbol svg-
import '@/assets/font/iconfont.js'

//ICON第3种 ： font class - iview 使用的方式
import '@/assets/font/iconfont.css'

//封装自定义ICON, 全局注册
import IconFont from '_c/icon-font'
import IconSvg from '_c/icon-svg'

// _c 是快捷路径 代表src/components目录
import CountTo from '_c/count-to'

//import './plugins/iview.js'
//mockjs
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iview)
Vue.component('icon-font',IconFont)
Vue.component('icon-svg',IconSvg)
new Vue({
  router,
  store,
  // render-page.vue : render函数 : 渲染元素 可以只渲染div render: h => h('div’)
  // render: h => h(CountTo, {
  //   props: {
  //     endVal: 100
  //   }
  // })
  render: h => h(App)
}).$mount('#app')
