// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./libs/component')

/* eslint-disable no-new */
// 初始化Vue根实例
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
