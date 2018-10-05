<template>
  <div>
    <global-register></global-register>
    <simple-child></simple-child>
    <simple-child></simple-child>
  </div>
</template>

<script>
import simpleChild from '@/components/simple-child'
export default {
  name: 'registerComponent.vue',
  components: {
    simpleChild
  }
}
</script>

<style scoped>

</style>
