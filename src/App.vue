<!--
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:29:38
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-27 14:37:58
 * @FilePath: /vueApp/src/App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  font-size: 0.28rem;
}
</style>
