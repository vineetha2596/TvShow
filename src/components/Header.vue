<template>
  <div class="appHeader">
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-button to='/'>Maza VueTV</b-button>
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
                  @click="getsearch">enter</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search:'',
    };
  },
  methods:{
    getsearch(){
      if (this.search) {
        this.$router.push({ name: 'Search', params: { enteredValue: this.search } })
      }
      this.search = ''
    }
  }
};
</script>