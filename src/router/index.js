import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

//因为vue-router作为一个插件，需要使用Vue.use引入
Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',//默认是hash模式，也就是在访问链接中带#号 http://localhost:8080/#/
  routes
})

//导航全局守卫，控制页面跳转间的一些操作：如权限控制
//to 和 from 均为路由对象， next为函数
const HAS_LOGIN = true
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if(to.name!='login'){
    if(HAS_LOGIN) next()
    else next({name: 'login'})
  }else{
    if(HAS_LOGIN) next({name: 'home'})
    else next()
  }
})

//router.beforeResolve  // 在导航被确认前 -》指所有导航的Hook都结束（包括所有组件内守卫等），即导航被确认

//后置hook
router.afterEach((to, from) => {
  //login == false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件(即将离开的页面组件)，里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpadate
 * 5. 调用路由独享的守卫 beforeEnter - router.js
 * 6. 解析异步路由组件
 * 7. 在被激活的组件(即将进入的页面组件)里调用  beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新  - 页面渲染
 * 12. 用创建好的实例调用beforeRounterEnter守卫里传给next的回调函数
 */

export default router
