// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'
require('./libs/component') // 注册组件

/* eslint-disable no-new */
// 初始化Vue根实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
