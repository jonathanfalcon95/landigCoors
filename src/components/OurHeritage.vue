<template>
  <div class="our-heritage-container" ref="OurHeritage" id="OurHeritage">
    <div class="content">
      <!-- <div class="ribbon-container">
        <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
      </div> -->
      <div class="carosuel-content">
        <carousel 
          :per-page="1" 
          :mouse-drag="true"
          :loop="true"
          :paginationActiveColor="'#fff'"
          :paginationColor="'#3F3F3E'"
          :paginationPosition="'bottom-overlay'"
          :navigationEnabled="true"
          >
          <slide>
            <div class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel1Image" alt />
              </div>
              <div class="text-in-carousel">
                <div class="text-row">
                  <h3 class="title-in-carousel">UNA PROMESA GUARDADA DESDE 1903</h3>
                  <img src alt class="golden-line" />
                  <p class="descirption-in-carousel">
                    A inicios de 1900s, la mayoría de los estadounidenses disfrutaban de su cerveza
                    en un bar o la llevaban a su casa en cubetas.
                    Como un mercado desarrollado para la “botella de cerveza”,
                    Miller Brewers creo una cerveza emblemática, con cuerpo, refrescante y
                    efervescente. En tres años ganó el apodo de
                    “La Champaña de la Cerveza Embotellada”.
                  </p>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel2Image" alt />
              </div>
              <div class="text-in-carousel">
                <div class="text-row">
                  <h3 class="title-in-carousel">LA CHICA EN LA LUNA</h3>
                  <img src alt class="golden-line" />
                  <p class="descirption-in-carousel">
                    Ella se sienta en una luna creciente en medio de un cielo 
                    lleno de estrellas. Aunque no hay registro de como se creo 
                    la famosa “Chica en la luna” se sabe fue registrada por 
                    Miller en 1907. Desde entonces ella se ha convertido en 
                    uno de los íconos de la marca más misteriosos y queridos 
                    en América.
                  </p>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import RibbonTitle from "@/components/RibbonTitle";
import carousel1 from "@/assets/1160_MILR_Website_Heritage_01.jpg";
import carousel2 from "@/assets/girl-in-moon-logo_0.jpg";

export default {
  name: "OurHeritage",
  components: {
    RibbonTitle
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {
      carousel1Image: carousel1,
      carousel2Image: carousel2
    };
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.content {
  width: 100%;
  display: flex;
  height: fit-content;
  background: $blue-color;
  justify-content: flex-end;
  .ribbon-container {
    width: 50%;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 10;
    margin-top: 2rem;
  }
  position: relative;
}

.slide-container {
  display: flex;
  flex-direction: row;
  background: yellow;
  .image-in-carousel {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .text-in-carousel {
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    .text-row {
      width: 80%;
      display: inline-block;
      text-align: center;
      margin-top: 40%;
    }
  }
}

.VueCarousel-navigation {
  z-index: 100;
  button.VueCarousel-navigation-prev {
    left: 30px !important;
  }
  button.VueCarousel-navigation-next {
    right: 30px !important;
  }
}

</style>
