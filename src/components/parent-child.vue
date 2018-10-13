<template>
    <div>
      <p>我是子组件，父组件通过props传递过来的值是</p>
      {{postTitle}}
    </div>
</template>

<script>
export default {
  name: 'parent-child',

  // props: ['postTitle'],
  props: {
    'postTitle': String
  }
}
</script>

<style scoped>
</style>
