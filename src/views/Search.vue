<template>
    <div class="search" >
     <div v-for="show of searchShows" :key="show.show.name" >
         <img :src="show.show.image.medium" alt="Show Image">
         <h4>{{show.show.name}}</h4>
     </div>
    </div>
</template>
<script>
import {getSearchShowsService} from '@/service/Apiservice';
export default {
    name:"Search",
    data(){
        return{
            searchShows:[],
        }
    },
    created(){
        this.getSearchShow();
    },
    methods:{
    getSearchShow(){
      getSearchShowsService(this.$route.params.enteredValue).then((res)=>{
       this.searchShows=res.data;
    });
     },
    }
}
</script>
<style scoped>
.search{
    display: flex;
    overflow: auto;
}
</style>