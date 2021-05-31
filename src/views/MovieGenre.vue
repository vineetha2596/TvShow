<template>
<div>
    <h4>Drama Genre</h4>
        <div class="genre">
            <div v-for="show of dramaShow" :key="show.genre">
                <img :src="show.image.medium" alt="Show Image"  @click="showAllDetails(show.id)" >
                <h4>{{show.name}}</h4>
            </div>   
        </div>
        <h4>scienceFiction Genre</h4>
        <div class="genre">
            <div v-for="show of scienceFictionShow" :key="show.genre">
                <img :src="show.image.medium" alt="Show Image" @click="showAllDetails(show.id)">
                <h4>{{show.name}}</h4>
            </div>
        </div>
        <h4>Thriller Genre</h4>
        <div class="genre">
            <div v-for="show of thrillerShow" :key="show.genre">
                <img :src="show.image.medium" alt="Show Image" @click="showAllDetails(show.id)">
                <h4>{{show.name}}</h4>
            </div>
        </div>
        <h4>Action Genre</h4>
        <div class="genre">
            <div v-for="show of actionShow" :key="show.genre">
                <img :src="show.image.medium" alt="Show Image" @click="showAllDetails(show.id)">
                <h4>{{show.name}}</h4>
            </div>
        </div>
        <h4>Crime Genre</h4>
        <div class="genre">
            <div v-for="show of crimeShow" :key="show.genre">
                <img :src="show.image.medium" alt="Show Image" @click="showAllDetails(show.id)">
                <h4>{{show.name}}</h4>
            </div>   
        </div>
</div> 
</template>
<script>
import {getAllTvShows} from "@/service/Apiservice";
export default {
    name: "MovieGenre",
    data(){
        return{
         tvShows:[],
         dramaShow:[],
         scienceFictionShow:[],
         thrillerShow:[],
         actionShow:[],
         crimeShow:[],
        }
    },
    created(){
    this.getAllTvShow();
    },
    methods:{
    getAllTvShow(){
        getAllTvShows().then((result)=>{
            this.tvShows=result.data;
            this.tvShows.forEach((tvShow) =>{
                if(tvShow.genres.includes("Drama")){
                 this.dramaShow.push(tvShow);
                }
                if(tvShow.genres.includes("Science-Fiction")){
                 this.scienceFictionShow.push(tvShow);
                }
                if(tvShow.genres.includes("Thriller")){
                 this.thrillerShow.push(tvShow);
                }
                if(tvShow.genres.includes("Action")){
                 this.actionShow.push(tvShow);
                }
                if(tvShow.genres.includes("Crime")){
                 this.crimeShow.push(tvShow);
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
    }   
}
</script>
<style scoped>
.genre{
    display : flex;
    overflow : auto;
}
.name{
    text-align: center;
}
</style>