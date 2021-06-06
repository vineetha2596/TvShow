<template>
  <div class="ShowDetails">
      <div class="row">
        <div class="fcontainer" v-if="tvShowDetail">
          <img
            :src="tvShowDetail.image.medium"
            alt="show Image"
            class="fitem"
          />
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
          v-for="(show,index) of searchCast"
          :key="index"
          class="Details col-md-4 col-lg-3 col-sm-6 col-xs-6"
        >
          <img :src="show.person.image.medium" alt="Show Image" class="img"/>
          <h6>{{ show.person.name }}</h6>
        </div>
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
    },
    getShowCastDetails() {
      getShowCast(this.$route.params.id)
        .then((res) => {
          this.searchCast = res.data;
        })
    },
  },
};
</script>
<style scoped>
.fcontainer {
  display: flex;
  padding-top: 10px;
}
.fitem {
  padding: 10px;
  text-align: justify;
}
.img{
  height: 100px;
  width: 40%;
}
</style>

