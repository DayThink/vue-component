<template>
  <div>
    <h3>vuex全局数据的数据传递</h3>
    <!--<city-info></city-info>-->
    <router-link tag='a' to="/router/info">查看城市信息</router-link>
    <!-- 注意,该页面下面有二级菜单页面 -->
    <router-view/>
  </div>
</template>

<script>
import cityInfo from '@/components/city-info'
export default {
  name: 'vuexCity',
  components: {
    cityInfo
  }
}
</script>

<style scoped>
</style>
