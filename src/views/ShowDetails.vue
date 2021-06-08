<template>
  <div class="show-details">
    <div v-if="!error">
    <div class="row">
      <div class="fcontainer" v-if="tvShowDetail">
        <img :src="tvShowDetail.image.medium" alt="show Image" class="fitem" />
        <div class="fitem">
          <h2>{{ tvShowDetail.name }}</h2>
          <h5>Genre : {{ tvShowDetail.genres.toString() }}</h5>
          <h5>Language : {{ tvShowDetail.language }}</h5>
          <h5>Rating : {{ tvShowDetail.rating.average }}</h5>
          <h5>Summary :</h5>
          <h6 v-html="tvShowDetail.summary"></h6>
        </div>
      </div>
      <h4>Cast</h4>
      <div
        v-for="(show, index) of searchCast"
        :key="index"
        class="details col-md-4 col-lg-3 col-sm-6 col-xs-6"
      >
        <img :src="show.person.image.medium" alt="Show Image" class="img" />
        <h6>{{ show.person.name }}</h6>
      </div>
    </div>
    </div>
    <div v-else>
       <h2>Error found .Please contact the adminstrator.</h2>
      </div>
  </div>
</template>
<script>
import { getShowDetails, getShowCast } from "@/service/Apiservice";
export default {
  name: "showDetails",
  data() {
    return {
      searchCast: [],
      tvShowDetail: null,
      error:false,
    };
  },
  created() {
    this.getShowCastDetails();
    this.getShowDetail();
  },
  methods: {
    getShowDetail() {
      getShowDetails(this.$route.params.id).then((res) => {
        this.tvShowDetail = res.data;
      })
      .catch((err)=> {
        this.error = err.message;
      });
    },
    getShowCastDetails() {
      getShowCast(this.$route.params.id).then((res) => {
        this.searchCast = res.data;
      })
      .catch((err)=> {
        this.error = err.message;
      });
    },
  },
};
</script>
<style scoped>
.fcontainer {
  display: flex;
}
.fitem {
  padding: 35px;
  padding-top: 10px;
  text-align: justify;
}
.img {
  height: 100px;
  width: 100px;
}
</style>

