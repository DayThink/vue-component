<!-- 父组件上使用v-model,子组件上使用model -->
<template>
  <div>
    <!-- 在input标签上时 v-model == value + input -->
    <model-input :value="msg"></model-input>
    <model-input :value="msg" @input="(res) => {this.msg = res}"></model-input>
    <model-input v-model="msg"></model-input>
    <span>父组件:{{msg}}</span>

    <p></p>
    <p></p>
    <!-- model选项可以指定当前的事件类型和传入的props 因此可以解决v-model默认只能是value + input -->
    <model-conponent value="type1" :checked="checked"></model-conponent>
    <model-conponent value="type2" :checked="checked" @change="change"></model-conponent>
    <model-conponent value="type3" v-model="checked"></model-conponent>
    <p>父组件中的当前选中状态: {{this.checked}}</p>
  </div>
</template>

<script>
import modelConponent from '@/components/v-model'
import modelInput from '@/components/model-input'
export default {
  name: 'vModel',
  data () {
    return {
      msg: 'byteDance',
      checked: false
    }
  },
  methods: {
    change (value) {
      console.log('父组件事件回调响应函数 ==>', value)
      this.checked = value
    }
  },
  components: {
    modelConponent,
    modelInput
  }
}
</script>

<style scoped>
</style>
