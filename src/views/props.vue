<!-- 父组件中引入子组件parent-child.vue -->
<template>
  <div>
    <parent-child post-title="byteDance"></parent-child>
    <parent-child :post-title="postTitle"></parent-child>
  </div>
</template>

<script>
import parentChild from '@/components/parent-child'
export default {
  name: 'props',
  data () {
    return {
      postTitle: 'byteDance'
    }
  },
  components: {
    parentChild
  }
}
</script>

<style scoped>
</style>
