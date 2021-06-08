<template>
  <div class="show-details">
    <div v-if="!error">
      <div v-if="tvShowDetail">
        <div class="row">
          <div class="col-md-3 text-center">
            <img
              :src="tvShowDetail.image.medium"
              alt="show Image"
              class="image"
            />
          </div>
          <div class="info col-md-8">
            <h2>{{ tvShowDetail.name }}</h2>
            <h5>Genre : {{ tvShowDetail.genres.toString() }}</h5>
            <h5>Language : {{ tvShowDetail.language }}</h5>
            <h5>Rating : {{ tvShowDetail.rating.average }}</h5>
            <h5>Summary</h5>
            <div class="summary-desc" v-html="tvShowDetail.summary"></div>
          </div>
        </div>

        <h4 class="border-bottom">Cast</h4>
        <div class="row">
          <div
            v-for="(show, index) of searchCast"
            :key="index"
            class="details col-md-3 col-sm-4 col-xs-3 text-center"
          >
            <img :src="show.person.image.medium" alt="Show Image" class="img" />
            <h6>{{ show.person.name }}</h6>
          </div>
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
      error: false,
    };
  },
  created() {
    this.getShowCastDetails();
    this.getShowDetail();
  },
  methods: {
    getShowDetail() {
      getShowDetails(this.$route.params.id)
        .then((res) => {
          this.tvShowDetail = res.data;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    getShowCastDetails() {
      getShowCast(this.$route.params.id)
        .then((res) => {
          this.searchCast = res.data;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
<style scoped>
.show-details {
  padding: 5px;
}
.summary-desc {
  text-align: justify;
  padding: 10px;
}
.img {
  height: 150px;
  width: 150px;
}
.border-bottom {
  padding: 10px;
}
.image {
  padding-right: 25%;
}
.info{
  padding-left: 50px;
}
</style>

