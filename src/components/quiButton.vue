<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '下载'
    }
  },
  methods: {
    btnClickEvent: function () {
      console.log('==> child quiButton', this.msg)
      this.$emit('btnClickEvent')
    }
  }
}
</script>

<style scoped>
  /*@import './css/reset.import.css';*/
  /*@import './css/qui-btn.import.css';*/
</style>
