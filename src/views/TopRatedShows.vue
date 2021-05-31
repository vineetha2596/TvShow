<template>
  <div>
    <div class="shows">
      <div v-for="show of topShows" :key="show.id">
        <img
          :src="show.image.medium"
          alt="Show Image"
          @click="showAllDetails(show.id)"
        />
        <h4>{{ show.name }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
import {getAllTvShows} from "@/service/Apiservice";
export default {
    name: "TopRatedShows",
    data(){
     return{
         tvShows:[],
         topShows:[]
     }  
    },
    created(){
        this.getAllTvShow();       
    },
methods:{
    getAllTvShow(){
        getAllTvShows().then((result)=>{
            this.tvShows=result.data;
            this.tvShows.forEach((tvshow) =>{
                if(tvshow.rating.average>8.5){
this.topShows.push(tvshow)
                }
            })
        })
    },
    showAllDetails(getid){
this.$router.push({
    name:"ShowDetails",
    params:{
        id:getid,
    }
});
}
},
}

</script>
<style scoped>
.shows {
  display: flex;
  overflow: auto;
}
</style>
