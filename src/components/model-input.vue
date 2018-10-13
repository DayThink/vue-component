<template>
    <div>
      <input ref="input" type="text" :value="value" @input="input"/>
    </div>
</template>

<script>
export default {
  name: 'modelInput',

  // 利用model强制修改默认input事件为input-fn事件
  // model: {
  //   prop: 'value',
  //   event: 'input-fn'
  // },
  props: {
    value: String
  },
  methods: {
    input () {
      console.log('子组件 == ', event.target.value)
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>
