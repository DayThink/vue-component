<template>
    <div>
      <input type="checkbox" :checked="checked" @change="click_change"/>
      <p>子组件中的当前选中状态: {{this.checked}}</p>
    </div>
</template>

<script>
export default {
  name: 'modelConponent',

  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    click_change () {
      console.log('子组件 == ', event.target.checked)
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

<style scoped>
</style>
