import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
