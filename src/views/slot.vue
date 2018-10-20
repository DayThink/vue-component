<!-- 父组件中引入子组件slot-child.vue -->
<template>
  <div>
    <slot-child :btn-name="btnName" @update="p_update">
      <span>我是从父组件传递到子组件的数据</span>
    </slot-child>
    <br/>
    <span>我是父组件自己的数据</span>
  </div>
</template>

<script>
import slotChild from '@/components/slot-child'
export default {
  name: 'slot',
  data () {
    return {
      btnName: 'byteDance'
    }
  },
  methods: {
    p_update (val) {
      alert(val)
    }
  },
  components: {
    slotChild
  }
}
</script>

<style scoped>
</style>
