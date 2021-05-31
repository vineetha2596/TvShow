<template>
  <div class="appHeader">
    <nav class="navbar navbar-dark bg-dark">
      <b-button to='/'>Maza VueTV</b-button>
    </nav>
  </div>
</template>
<script>
export default {
    data(){  
        return{
         searchedData:'',
        }
    }
}
</script>
<style scoped>
.appHeader{
   position: fixed;
   width:100vw;
}


</style>
