<!-- 子组件通过emit注册的事件回调父组件的事件响应函数 -->
<template>
  <div>
    <model-conponent v-model="checked" @change="change"></model-conponent>
    <model-conponent v-model="checked"></model-conponent>
  </div>
</template>

<script>
import modelConponent from '@/components/v-model'
export default {
  name: 'vModel',
  data () {
    return {
      checked: true
    }
  },
  methods: {
    change () {
      alert('父组件，选中状态:' + this.checked)
    }
  },
  components: {
    modelConponent
  }
}
</script>

<style scoped>
</style>
