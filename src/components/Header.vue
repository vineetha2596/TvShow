<template>
  <div class="app-header">
   <b-navbar toggleable="lg" type="dark" variant="dark">
     <div class="container-fluid">
   <b-navbar-brand href="#">MazaTv</b-navbar-brand>
   <b-navbar-nav>
        <b-nav-item to=/>Home</b-nav-item>
   </b-navbar-nav>
   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ms-auto">
          <b-nav-form right>
            <b-input-group>
              <b-form-input
                id="input-sm"
                size="sm"
                class="mr-sm-2"
                placeholder="Search.."
               v-model="search"></b-form-input>
              <b-input-group-append>
                <b-button
                  class="search-button"
                   @click="getsearch">Search</b-button 
                >
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    getsearch() {
      if (this.search) {
        this.$router.push({
          name: "Search",
          params: { enteredValue: this.search },
        });
      }
      this.search = "";
    },
  },
};
</script>