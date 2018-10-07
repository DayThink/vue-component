<template>
  <div class="city">
    <ul>
      <li v-for="(item, index) in cityArr" :key=item @click="backFn(index)">
        <h2>{{item}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'city-list',
  data () {
    return {
      cityArr: ['临沂', '北京', '上海', '广州', '深圳']
    }
  },
  methods: {
    backFn: function (index) {
      // 调用vuex的ations设置城市的值
      this.$store.dispatch('setCityName', this.cityArr[index])
      // 返回到首页
      this.$router.push('/vuex/info')
    }
  },
  mounted () {
    console.log('cityList')
  }
}
</script>

<style scoped>
  .city ul {
    list-style:none;
    margin: 0px;
  }
</style>
