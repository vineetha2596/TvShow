<template>
  <div class="search">
    <div v-if="!searchShows.length">
      <h4 class="text-center">Data not Found</h4>
    </div>
    <div class="row" v-if="searchShows && searchShows.length">
      <div
        v-for="show of searchShows"
        :key="show.show.id"
        class="details col-md-4 col-lg-3 col-sm-6 col-xs-6"
      >
        <div v-if="show.show.image">
          <img
            :src="show.show.image.medium"
            alt="Show Image"
            @click="routeinfo(show.show.id)"
          />
        </div>
        <div v-else>
          <img
            src="@/assets/userimage.png"
            alt="show Image"
            @click="routeinfo(show.show.id)"
            class="image"
          />
        </div>
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
      return this.$route.params.enteredValue;
    },
  },
  created() {
    this.getSearchShow();
  },
  methods: {
    getSearchShow() {
      getSearchShowsService(this.searchData).then((res) => {
        this.searchShows = res.data;
      });
    },
    routeinfo(getid) {
      this.$router.push({
        name: "ShowDetails",
        params: { id: getid },
      });
    },
  },
  watch: {
    searchData() {
      this.getSearchShow();
    },
  },
};
</script>
<style scoped>
.search{
  padding-top: 50px;
}
.image {
  height: 295px;
  width: 210px;
}
.row{
  padding-left:10px;
}
</style>