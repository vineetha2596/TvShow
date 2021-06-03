<template>
  <div id="app">
      <app-header />
      <router-view />
      <app-footer />
  </div>
</template>
<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>
<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding-bottom: 50px;
}
</style>