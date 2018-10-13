<template>
    <div>
      <button v-on:click="btnClickEvent">
        子组件的按钮
      </button>
    </div>
</template>

<script>
export default {
  name: 'child-parent',

  methods: {
    // 在子组件内部通过emit定义btn-click事件,在父组件中去监听btn-click事件并实现对其的响应
    btnClickEvent: function () {
      this.$emit('btn-click')
    }
  }
}
</script>

<style scoped>
</style>
