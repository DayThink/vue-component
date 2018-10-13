<template>
    <div>
      子组件Vuex-A:
      <input type="text" v-model="logo" @input="set_value"/>
      <button @click="update">获取Vuex全局变量值</button>
    </div>
</template>

<script>
export default {
  name: 'vuex-a',
  data () {
    return {
      logo: 'a'
    }
  },

  // computed: {
  //   logo: function () {
  //     console.log('vuex-a')
  //     // 通过vuex的getters方法来获取state里面的数据
  //     return this.$store.getters.getLogo
  //   }
  // },
  methods: {
    set_value () {
      this.$store.dispatch('setLogo', this.logo)
    },
    update () {
      this.logo = this.$store.getters.getLogo
      // this.$store.dispatch('setLogo', this.logo)
    }
  }
}
</script>

<style scoped>
</style>
