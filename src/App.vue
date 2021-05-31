<template>
  <div id="app">
    <div id="nav">
    <app-header/>
    </div>
    <router-view/>
    <app-footer/>
  </div>
</template>
<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer' :Footer,
  },
};
</script>

<style >
#app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding-bottom: 50px;
}
</style>