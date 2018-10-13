<!-- 子组件通过emit注册的事件回调父组件的事件响应函数 -->
<template>
  <div>
    <!-- 监听子组件预定义的btn-click事件 -->
    <child-parent @btn-click="callback_fn"></child-parent>
  </div>
</template>

<script>
import childParent from '@/components/child-parent'
export default {
  name: 'emit',
  methods: {
    callback_fn () {
      alert('父组件预定义的供子组件回调的函数 ==> (由子组件触发)')
    }
  },
  components: {
    childParent
  }
}
</script>

<style scoped>
</style>
