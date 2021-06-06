<template>
  <div class="search">
    <div class="row">
      <div
        v-for="show of searchShows"
        :key="show.show.id"
        class="Details col-md-4 col-lg-3 col-sm-6 col-xs-6"
      >
        <img :src="show.show.image.medium" alt="Show Image" @click="routeinfo(show.show.id)"/>
        <h4>{{ show.show.name }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchShowsService } from "@/service/Apiservice";
export default {
  name: "Search",
  data() {
    return {
      searchShows: [],
    };
  },
  computed: {
    searchData() {
      return this.$route.params.enteredValue
    },
  },
  created() {
    this.getSearchShow();
  },
  methods: {
    getSearchShow() {
      getSearchShowsService(this.searchData)
        .then((res) => {
          this.searchShows = res.data;
        })
    },
    routeinfo(getid){
        this.$router.push({
            name:"ShowDetails",
            params:{id:getid}          
        })
    }
  },
  watch: {
    searchData(){
      this.getSearchShow();
    }
  },
};
</script>
<style scoped>
</style>