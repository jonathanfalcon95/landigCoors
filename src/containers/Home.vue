<template>
  <div class="page-container" ref="Home" id="homecontainer">
    <h2>home</h2>
  </div>
</template>

<script>
import Hamster from "hamsterjs";

import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      hamster: undefined,
    };
  },
  methods: {
    ...mapActions({
    }),
  }
};
</script>

<style scoped lang="scss"></style>
