<template>
<div>
   <div class="topnav">
        <input type="text" placeholder="Search.." v-model="searchedData">
        <div class="search float-right">
        <b-button :to='{name:"Search",params:{enteredValue:searchedData}}'>enter</b-button>
      </div>
   </div>
        <div id="homepage"> 
   <h3>Top Rated Shows </h3>
  <TopRatedShows/>
  <MovieGenre/>
   </div>
   </div>
</template>

<script>
import TopRatedShows from './TopRatedShows.vue'
import MovieGenre  from './MovieGenre.vue';
  export default {
    components: {
      TopRatedShows: TopRatedShows,
      MovieGenre: MovieGenre,
    },
    data(){
      return {
        searchedData: '',
      }
    },
  }
  
</script>
<style scoped>

#homepage{
  padding-top: 60px;
}
h3{
  text-align: left;
}
.topnav input[type=text] {
  margin-right: 10px;
  border: none;
  margin-top: 10px;
  font-size: 20px;
  padding-right: 50px;
  position: fixed;
  right: 70px;
}
.search{
  padding-top: 10px;
  position:fixed;
  right: 10px
}

</style>
