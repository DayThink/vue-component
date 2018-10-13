<template>
    <div>
      <span>{{value}}:</span>
      <input ref="checkbox" type="checkbox" :value="value" :checked="checked" @change="click_change"/>
    </div>
</template>

<script>
export default {
  name: 'modelConponent',

  // 用model改变v-model默认的value属性和input事件
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    value: String
  },
  methods: {
    click_change () {
      console.log('子组件 == ', event.target.checked)
      // 这里就不用input，而是change
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

<style scoped>
</style>
