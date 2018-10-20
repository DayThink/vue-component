<template>
  <div>
    <!--父组件：<input type="text" v-model="logo"/>-->
    <!--<button @click="update">获取Vuex全局变量值</button>-->
    <vuex-a></vuex-a>
    <vuex-b></vuex-b>

    <h5>{{ city }}</h5>
    <button @click="setCity">局部this</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    },
    setCity () {
      // 模拟请求2s,演示局部this坑
      // setTimeout(function (resp) {
      //   console.log(this)
      //   this.$store.dispatch('setCityName', resp.cityName)
      // }, 1000, {cityName: 'beijing'})
      // let that = this
      // setTimeout(function (resp) {
      //   console.log(this)
      //   that.$store.dispatch('setCityName', resp.cityName)
      // }, 1000, {cityName: 'beijing'})
      setTimeout((resp) => {
        this.$store.dispatch('setCityName', resp.cityName)
      }, 1000, {cityName: 'beijing'})
    }
  },
  computed: {
    ...mapGetters({
      city: 'getCityFn'
    })
  },
  components: {
    vuexA,
    vuexB
  }
}
</script>

<style scoped>
</style>
