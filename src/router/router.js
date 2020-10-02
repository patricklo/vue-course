import Home from '@/views/Home.vue'

export default [
  //别名: alias
  {
    path: '/',
    alias: '/home_page',
    name: 'Home',
    component: Home,
    props: route => (
      {
        food: route.query.food
      }
    ),
    //路由独享守卫
    beforeEnter: (to, from, next) => {
        if(from.name==='about_name') alert('from about page')
        else alert('not from about page')
        next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login.vue')
  },

  //命名路由,添加name属性
  //可以在App.vue中用name来跳转，而不是传统的path
  {
    path: '/about',
    name: 'about_name',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    //延迟加载功能，只有访问到这个页面时才跳到这个页面
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于about'
    }
  },
  //高级用法 ： 动态路由匹配
  //:name  动态路由参数
  {
    path: '/argu/:name',
    name:'argu',
    component: () => import('@/views/argu.vue'),
    //将name参数传入组件的props中的name中
    props: true
  },

  //嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  //定义视图 多个组件组成 ,用components
  {
    path: '/named_view',
    components: {
        default: () => import('@/views/Child.vue'),
        email: () => import('@/views/email.vue'),
        tel: () => import('@/views/tel.vue')
    }
  },
  //重定向
  {
    path: '/main',
    redirect: '/'
  },

  {
    path: '/main_console',
    redirect: to => {
      console.log(to);
      return {
        name: 'Home'
      }

    }
  },
  {
    path: '/main2',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/count-to',
    name:'count_to',
    component: ()=> import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name:'split_pane',
    component: ()=> import('@/views/split-pane.vue')
  },
  {
    path: '/menu-page',
    name:'menu_page',
    component: ()=> import('@/views/menu-page.vue')
  },
  {
    path: '/render-page',
    name:'render_page',
    component: ()=> import('@/views/render-page.vue')
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    //针对mode=hository 所有不在不包含在上面的访问路径 都到default页面
    path: '*',
    component: () => import('@/views/default.vue')
  }
]
