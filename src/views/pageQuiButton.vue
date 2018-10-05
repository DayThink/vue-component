//index.vue
<template>
  <div id="pageQuiButton">
    <div class="mod-module mod-btn">
      <p class="btn-bar text-r">
        <qui-btn msg="确定" class="small"></qui-btn>
      </p>
      <p class="btn-bar text-r">
        <qui-btn class="small bor"></qui-btn>
      </p>
      <p class="btn-bar text-r">
        <qui-btn msg="下载" class="small icon">
          <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
        </qui-btn>
      </p>
      <p class="btn-bar">
        <qui-btn msg="按钮可以改文案" class="large bor"></qui-btn>
      </p>
      <p class="btn-bar">
        <qui-btn msg="大的按钮" class="large icon bg">
          <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
        </qui-btn>
      </p>
      <p class="btn-bar bar-flex">
        <qui-btn msg="取消" class="middle icon bor"></qui-btn>
        <qui-btn msg="确定" class="middle icon bg"></qui-btn>
      </p>
      <p class="btn-bar bar-flex">
        <qui-btn class="middle icon"></qui-btn>
        <qui-btn class="middle" msg="原生点击" v-on:click.native="doTheClick"><!--原生的click而不是子组件的-->
          <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
        </qui-btn>
        <qui-btn v-on:btnClickEvent="btnClickEvent" msg="我可以点击" class="middle bg"></qui-btn>
      </p>
    </div>
  </div>
</template>

<script>
import quiBtn from '../components/quiButton.vue'
export default {
  name: 'pageQuiButton',
  components: {
    'qui-btn': quiBtn
  },
  methods: {
    btnClickEvent: function () {
      alert('你点击了组件的click:btnClickEvent')
    },
    doTheClick: function () {
      alert('我是原生的click')
    }
  }
}
</script>

<style scoped>
  /*.mod-module.mod-btn .bar-flex{*/
    /*display: -webkit-flex; !* Safari *!*/
    /*display: flex;*/
  /*}*/
  /*.mod-module.mod-btn .btn-bar{*/
    /*padding:5px 12px;*/
    /*font-size: 0;*/
    /*text-align: center;*/
  /*}*/
  /*.mod-module.mod-btn .text-r{*/
    /*text-align: right;*/
  /*}*/
</style>
