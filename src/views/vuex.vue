<template>
  <div>
    <!--父组件：<input type="text" v-model="logo"/>-->
    <!--<button @click="update">获取Vuex全局变量值</button>-->
    <vuex-a></vuex-a>
    <vuex-b></vuex-b>
  </div>
</template>

<script>
import vuexA from '@/components/vuex-a'
import vuexB from '@/components/vuex-b'
export default {
  name: 'vuex',
  data () {
    return {
      logo: 'main'
    }
  },
  methods: {
    update () {
      this.logo = this.$store.getters.getLogo
      // this.$store.dispatch('setLogo', this.logo)
    }
  },
  components: {
    vuexA,
    vuexB
  }
}
</script>

<style scoped>
</style>
