<template>
  <div class="high-life-now-container" ref="HighLifeNow" id="HighLifeNow">
    <RibbonTitle
      title="WELCOME TO THE HIGH LIFE"
      subtitle="QUE HAY DE NUEVO EN EL MUNDO DE HIGH LIFE"
    ></RibbonTitle>
    <div class="content">
      <div class="flex-row">
        <div class="flex-content">
          <img :src="highlifesubtitleImage" alt class="mobile-title mhlimage centeredtitle" />
          <img :src="goldenlineImage" alt class="mhlimage centeredtitle" />
          <p
            class="centered"
          >Para obtener mas información de nuestra cerveza y otras cosas creada a nombre de High Life, visítenos en Facebook.</p>
          <p class="red-button">
            <a href="https://www.facebook.com/MillerHLMx/" target="_blank" class="visit-facebo">VISITAR PáGINA</a>
          </p>
        </div>
        <div
          class="flex-image-container"
          v-bind:style="{ backgroundImage: 'url(' + milr1160_5Image + ')'}"
        ></div>
      </div>
      <div class="flex-row reverse">
        <div class="flex-content">
          <h2 class="mobile-title centeredtitle">NO ES SOLO OTRO CERVEZA</h2>
          <img :src="goldenlineImage" alt class="mhlimage centeredtitle" />
          <p class="centered">Vea nuestros últimos comerciales sobre lo que hace a Miller High Life.</p>
          <img :src="thechampagneImage" alt class="mhlimage centeredtitle mobile-subtitle" />
          <p class="red-button">
            <a href="https://www.youtube.com/millerhighlife" target="_blank" class="visit-facebo">VER</a>
          </p>
        </div>
        <div
          class="flex-image-container"
          v-bind:style="{ backgroundImage: 'url(' + milr1160_6Image + ')'}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import milr1160_5 from "@/assets/1160_MILR_Website_HighLife_05_0.jpg";
import milr1160_6 from "@/assets/1160_MILR_Website_HighLife_06.jpg";
import highlifesubtitle from "@/assets/1160_MILR_Website_HighLife_02_0.png";
import goldenline from "@/assets/1160_MILR_Website_Heritage_Spacer_1.png";
import thechampagne from '@/assets/1160_MILR_Website_NJAB_8.png';

import { mapActions, mapGetters } from "vuex";

import RibbonTitle from "@/components/RibbonTitle";
import Footer from "@/components/Footer";

export default {
  name: "HighLifeNow",
  components: {
    RibbonTitle,
    Footer
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {
      milr1160_5Image: milr1160_5,
      milr1160_6Image: milr1160_6,
      highlifesubtitleImage: highlifesubtitle,
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
