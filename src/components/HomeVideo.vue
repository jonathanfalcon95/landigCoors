<template>
  <div class="homeVideo-container" ref="homeVideo" id="homeVideo">
    <div class="homeVideo_logo-container">
      <!-- <img :src="coorslogoImage" alt /> -->
     

      <div class="workhorse-arrow modal-open" data-backdrop="false" data-target="#modal-container-qYeF5_KPM_c">
    <img src="https://www.coorslight.com/sites/CoorsLightRD/files/icon-play.png" width="160" height="160" alt="Play" title="Play"></div>
    </div>
  </div>
</template>

<script>
import coorslogo from "@/assets/1x.jpg";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "homeVideo",
  components: {
    coorslogoImage: coorslogo
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {
      coorslogoImage: coorslogo
    };
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/homevideo.scss";
</style>
