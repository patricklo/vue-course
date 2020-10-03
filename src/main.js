import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

// _c 是快捷路径 代表src/components目录
import CountTo from '_c/count-to'

//import './plugins/iview.js'
// if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iview)
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
