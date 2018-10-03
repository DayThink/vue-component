<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view/>-->
    <global-register></global-register>
    <simple-child></simple-child>
    <simple-child></simple-child>
  </div>
</template>

<script>
import simpleChild from './components/simple-child'
export default {
  name: 'App',

  components: {
    simpleChild
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
