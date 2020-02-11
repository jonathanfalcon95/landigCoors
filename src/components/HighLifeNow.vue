<template>
  <div class="high-life-now-container" ref="HighLifeNow" id="HighLifeNow">
    <RibbonTitle
      title="WELCOME TO MILLER HIGH LIFE"
      subtitle="QUE HAY DE NUEVO EN EL MUNDO DE MILLER HIGH LIFE"
    ></RibbonTitle>
    <div class="content">
      <div class="flex-row">
        <div class="flex-content">
          <img :src="highlifesubtitleLogo" alt class="mhllogorow mhlimage centeredtitle" />
          <img :src="goldenlineImage" alt class="mhlimage centeredtitle" />
          <p
            class="centered"
          >Para más información de nuestra cerveza y más cosas sobre Miller High Life, visítenos en Facebook.</p>
          <p class="red-button">
            <a href="https://www.facebook.com/MillerHLMx/" target="_blank" class="visit-facebook">VISITAR PáGINA</a>
          </p>
        </div>
        <div
          class="flex-image-container"
          v-bind:style="{ backgroundImage: 'url(' + milr1160_5Image + ')'}"
        ></div>
      </div>
      <div class="flex-row reverse">
        <div class="flex-content">
          <h2 class="mobile-title centeredtitle">NO ES SOLO OTRA CERVEZA...</h2>
          <img :src="goldenlineImage" alt class="mhlimage centeredtitle" />
          <p class="centered">Vea nuestros últimos comerciales sobre lo que hace a Miller High Life.</p>
          <p class="red-button">
            <a href="https://www.youtube.com/channel/UCFvWOfeL9kHGiUjgu665yQg" target="_blank" class="visit-youtube">VER</a>
          </p>
        </div>
        <div
          class="flex-image-container mobileexception"
          v-bind:style="{ backgroundImage: 'url(' + milr1160_6Image + ')'}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import milr1160_5 from "@/assets/1160_MILR_Website_HighLife_05_2.png";
import milr1160_6 from "@/assets/1160_MILR_Website_HighLife_062.jpg";
import highlifesubtitle from "@/assets/miller-high-life-centered-logo.png";
import goldenline from "@/assets/1160_MILR_Website_Heritage_Spacer_1.png";
import thechampagne from '@/assets/1160_MILR_Website_NJAB_8.png';

import { mapActions, mapGetters } from "vuex";

import RibbonTitle from "@/components/RibbonTitle";

export default {
  name: "HighLifeNow",
  components: {
    RibbonTitle,
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {
      milr1160_5Image: milr1160_5,
      milr1160_6Image: milr1160_6,
      highlifesubtitleLogo: highlifesubtitle,
      goldenlineImage: goldenline,
      thechampagneImage: thechampagne
    };
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/highlifenow.scss";
</style>
