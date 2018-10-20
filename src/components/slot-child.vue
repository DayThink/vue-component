<template>
    <div>
      子组件Slot-Child:
      <br/>
      <button @click="update"> {{btnName}} </button>
      <br/>
      <!-- 如果注释掉下面的slot标签，则无法接受父组件内容 -->
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'slot-child',
  props: {
    btnName: String,
    default: '子组件按钮'
  },
  methods: {
    update () {
      this.$emit('update', '子组件回调函数的入参')
    }
  }
}
</script>

<style scoped>
</style>
