<template>
    <div>
      {{msg}}
      template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    </div>
</template>

<script>
export default {
  name: 'simple-child',
  data: function () {
    return {
      msg: 'This is a sample child component',
      count: 0
    }
  }
}
</script>

<style scoped>

</style>
