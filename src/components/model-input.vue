<template>
    <div>
      <input ref="input" type="text" :value="value" @input="input"/>
    </div>
</template>

<script>
export default {
  name: 'modelInput',

  props: {
    value: String
  },
  methods: {
    input () {
      console.log('子组件 == ', event.target.value)
      // 为什么这里把 'input' 作为触发事件的事件名？`input` 在哪定义的
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>
