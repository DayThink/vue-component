import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  // 去除地址栏中#
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/registerComponent.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('@/views/props.vue')
    },
    {
      path: '/emit',
      name: 'emit',
      component: () => import('@/views/emit.vue')
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: () => import('@/views/vModel.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('@/views/vuex.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/views/slot.vue')
    },
    {
      path: '/btn',
      name: 'btn',
      component: () => import('@/views/pageQuiButton.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/pageQuiList.vue')
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('@/views/pageQuiNav.vue')
    },
    {
      path: '/router',
      name: 'vuexCity',
      component: () => import('@/views/vuexCity.vue'),
      children: [
        // 需要在父组件中引入,否则children的页面不会生效<router-view/>
        {
          path: 'list',
          // component: () => import('@/components/city-list.vue')
          component: resolve => {
            require(['@/components/city-list.vue'], resolve)
          }
        },
        {
          path: 'info',
          component: () => import('@/components/city-info.vue')
        }
      ]
    }
    // {
    //   path: '/vuex',
    //   name: 'vuexCity',
    //   components: {
    //     default: () => import('@/views/vuexCity.vue'),
    //     list: () => import('@/components/city-list.vue'),
    //     info: () => import('@/components/city-info.vue')
    //   }
    // }
  ]
})
