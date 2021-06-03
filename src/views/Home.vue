<template>
   <div class="topnav">
        <shows/>
   </div>
</template>
<script>
import Shows from "./Shows.vue";
export default {
  components: {
    shows: Shows,
  },
};
</script>
<style scoped>
#homepage {
  padding-top: 60px;
}
</style>
