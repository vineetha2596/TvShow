<template>
  <div class="shows">
    <div v-if="!error">
    <h4>Top Rated Shows</h4>
    <div class="top-shows">
      <div v-for="show of sortedTopShows" :key="show.id" class="image">
        <img
          :src="show.image.medium"
          alt="Show Image"
          @click="routeinfo(show.id)"
        />
        <h6>Name : {{ show.name }}</h6>
        <h6>Rating : {{ show.rating.average }}</h6>
      </div>
    </div>
    <div class="movie-genre">
      <div v-for="genre in genreName" :key="genre">
        <h4>{{genre}} movie</h4>
        <div class="genre">
          <div v-for="movie in genreMovies(genre)" :key="movie.id" class="image" >
            <img
            :src="movie.image.medium"
            alt="Show Image"
            @click="routeinfo(movie.id)"
          />
            <h6> Name : {{ movie.name }}</h6>
            <h6> Rating : {{ movie.rating.average }}</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  <div v-else>
    <h2 class="text-center">An Error found .Please contact the service adminstrator.</h2>
  </div>
  </div>
</template>
<script>
import { getAllTvShows } from "@/service/Apiservice";
export default {
  data() {
    return {
      showList: [],
      topShows: [],
      genreName: [],
      error: false,
    };
  },
  created() {
    this.getAllShows();
  },
  computed:{
    sortedTopShows() {
      if(this.topShows) {
        let shows = this.topShows;
        return shows.sort((a,b)=>{
          return b.rating.average - a.rating.average;
        });
      }
      return null;
    }
  },
  methods: {
    genreMovies(genre){
     return this.showList.filter((show)=> show.genres.includes(genre));
    },
    getAllShows() {
        getAllTvShows().then((res) => {
        this.showList = res.data;
        
        let movieGenres = new Set();
        this.showList.forEach((shows) => {
          if (shows.rating.average > 8.5) {
            this.topShows.push(shows);
          }
          shows.genres.forEach((genre)=>{
            movieGenres.add(genre);
          })
        });
        this.genreName=movieGenres;
      })
      .catch((err)=> {
        this.error = err.message;
      });
    },
    routeinfo(getid) {
      this.$router.push({
        name: "ShowDetails",
        params: { id: getid },
      });
    },
  },
};
</script>
<style scoped>
.shows{
  padding: 10px;
}
.top-shows, .genre {
  display: flex;
  overflow: auto;
  margin: 1px;
}
.image {
  padding: 5px;
}
</style>
