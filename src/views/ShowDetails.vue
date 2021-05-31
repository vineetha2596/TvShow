<template>
    <div class="row" >
        <div class="fcontainer">
          <img :src="tvShowDetail.image.medium" alt="show Image" class="fitem">
          <div class="fitem">
          <h2>{{tvShowDetail.name}}</h2>
          <h4>Language : {{tvShowDetail.language}}</h4>
          <h4>Rating : {{tvShowDetail.rating.average}}</h4>
          <h4>Summary :{{tvShowDetail.summary}}</h4>
        </div>
        </div>
        <h4>Cast</h4>
        <div v-for="show of searchCast" :key="show.person.name" class="Details col-md-4 col-lg-3 col-sm-6 col-xs-6" >
         <img :src="show.person.image.medium" alt="Show Image">
         <h4>{{show.person.name}}</h4>
     </div>   
    </div>
</template>
<script>
import {getShowDetails} from "@/service/Apiservice";
import {getShowCast} from "@/service/Apiservice";
export default {
    name:"showDetails",
    data(){
        return{
            searchCast:[],
            tvShowDetail:{},
        }
    },
    created(){
        this.getShowCastDetails();
        this.getShowDetail();
    },
    methods:{
        getShowDetail(){
            getShowDetails(this.$route.params.id).then((res)=>{
       this.tvShowDetail=res.data;
       console.log(this.tvShowDetail)
            })
        },
        getShowCastDetails(){
            getShowCast(this.$route.params.id).then((res)=>{
       this.searchCast=res.data;
     })
        }
    }
    
}
</script>
<style scoped>
.row{
    padding-top: 60px;
}
.fcontainer{
display:flex;
}
.fitem{
    padding: 10px;
    text-align:justify
}
</style>

