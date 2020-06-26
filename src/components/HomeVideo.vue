<template>
  <div class="homeVideo-container" ref="homeVideo" id="homeVideo">
    <div class="homeVideo_logo-container">
      <!-- <img :src="coorslogoImage" alt /> -->
     

      <div class="workhorse-arrow modal-open" data-backdrop="false" data-target="#modal-container-qYeF5_KPM_c">
    <img @click="popUpModal()" src="https://www.coorslight.com/sites/CoorsLightRD/files/icon-play.png" width="160" height="160" alt="Play" title="Play">
    </div>
     <ModalVideo v-if="showModal" v-bind:wichModal="wichModal" @close="showModal = false" />
    </div>
  </div>
</template>

<script>
import coorslogo from "@/assets/1x.jpg";
import ModalVideo from "@/components/ModalVideo";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "homeVideo",
  components: {
    coorslogoImage: coorslogo,
    ModalVideo
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {
      coorslogoImage: coorslogo,
      showModal: false,
    };
  },
  methods: {
    ...mapActions({}),

     popUpModal() {
      this.showModal = true;
     // this.wichModal = modalType;
    },
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/homevideo.scss";
</style>
