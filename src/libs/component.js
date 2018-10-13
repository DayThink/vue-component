import Vue from 'vue'

import globalRegister from '@/components/global-register'

// 法一:全局注册子组件
// Vue.component('Child', {
//   template: '<div>A custom global register component!</div>'
// })

// 法二:全局注册子组件
// Vue.component('global-register', globalRegister)
Vue.component('global-register', globalRegister)
