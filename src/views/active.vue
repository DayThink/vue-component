<!-- 动态组件: 父组件中引入三个子组件com-a/b/c.vue,动态切换进行展示 -->
<template>
  <div>
    <h2>动态组件</h2>
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab" :class="['tab-button', { active: currentTab === tab }]">
      {{tab}}
    </button>
    <br/>
    <!-- keep-alive的缓存功能 -->
    <!--<component :is="currentTabComponent" class="tab"></component>-->
    <keep-alive><component :is="currentTabComponent" class="tab"></component></keep-alive>
  </div>
</template>

<script>
import comA from '@/components/active/com-a'
import comB from '@/components/active/com-b'
import comC from '@/components/active/com-c'
export default {
  name: 'active',
  data () {
    return {
      currentTab: 'A',
      tabs: ['A', 'B', 'C']
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'com-' + this.currentTab.toLowerCase()
    }
  },
  components: {
    comA,
    comB,
    comC
  }
}
</script>

<style scoped>
  .tab-button {
    padding: 10px 20px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    /*margin-bottom: -1px;*/
    /*margin-right: -1px;*/
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 100px;
  }
  .posts-tab {
    display: flex;
  }
  .posts-sidebar {
    max-width: 40vw;
    margin: 0;
    padding: 0 10px 0 0;
    list-style-type: none;
    border-right: 1px solid #ccc;
  }
  .posts-sidebar li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  }
  .posts-sidebar li:hover {
    background: #eee;
  }
  .posts-sidebar li.selected {
    background: lightblue;
  }
  .selected-post-container {
    padding-left: 10px;
  }
  .selected-post > :first-child {
    margin-top: 0;
    padding-top: 0;
  }
</style>
