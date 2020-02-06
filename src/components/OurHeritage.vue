<template>
  <div class="our-heritage-container" ref="OurHeritage" id="OurHeritage">
    <div class="content">
      <div class="responsive ribbon-container">
        <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
      </div>
      <div class="carosuel-content">
        <carousel
          :per-page="1" 
          :loop="true"
          :paginationActiveColor="'#fff'"
          :paginationColor="'#3F3F3E'"
          :paginationPosition="'bottom-overlay'"
          :navigationEnabled="windowWidth > 768"
          :paginationPadding="5"
          :navigationNextLabel="'►'"
          :navigationPrevLabel="'◄'"  
          >
          <!-- slide 1  -->
          <slide>
            <div ref="firstcontainer" class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel1Image" alt />
              </div>
              <div class="text-in-carousel">
                <div class="ribbon-container">
                  <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
                </div>
                <div class="text-row">
                  <h3 class="title-in-carousel desktop">UNA PROMESA GUARDADA DESDE 1903</h3>
                  <h3 class="title-in-carousel responsive no-margin">UNA PROMESA</h3>
                  <h3 class="title-in-carousel responsive">GUARDADA DESDE 1903</h3>
                  <img :src="goldenlineImage" class="golden-line" />
                  <p class="descirption-in-carousel">
                    A inicios de 1900s, la mayoría de los estadounidenses disfrutaban de su cerveza
                    en un bar o la llevaban a su casa en cubetas.
                    Como un mercado desarrollado para la “botella de cerveza”,
                    Miller Brewers creo una cerveza emblemática, con cuerpo, refrescante y
                    efervescente. Por tres años se ganó el apodo de
                    “La Champaña de la <br> 
                    Cerveza Embotellada”.
                  </p>
                </div>
              </div>
            </div>
          </slide>
          <!-- slide 1  -->
          <!-- slide 2  -->
          <slide>
            <div class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel2Image" alt />
              </div>
              <div class="text-in-carousel">
                  <div class="ribbon-container">
                    <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
                  </div>
                <div class="text-row">
                  <h3 class="title-in-carousel">LA CHICA EN LA LUNA</h3>
                  <img :src="goldenlineImage" class="golden-line" />
                  <p class="descirption-in-carousel">
                    Ella se sienta en una luna creciente en medio de un cielo 
                    lleno de estrellas. Aunque no hay registro de como se creó 
                    la famosa “Chica en la luna” se sabe, que fue registrada por 
                    Miller en 1907. Desde entonces ella se ha convertido en 
                    uno de los íconos de la marca más misteriosos  
                    <br> y queridos en América.
                  </p>
                </div>
              </div>
            </div>
          </slide>
          <!-- slide 2  -->
          <!-- slide 3  -->
          <slide>
            <div class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel3Image" alt />
              </div>
              <div class="text-in-carousel">
                <div class="ribbon-container">
                  <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
                </div>
                <div class="text-row">
                  <h3 class="title-in-carousel">POPULARIDAD CRECIENTE</h3>
                  <img :src="goldenlineImage" class="golden-line" />
                  <p class="descirption-in-carousel">
                    En la segunda guerra mundial, la cerveza en botella 
                    era muy común. A medida que los estadounidenses buscaban 
                    una bebida más ligera y refrescante, la misma lager que se 
                    produjo por primera vez como una lujosa cerveza tipo 
                    champaña ahora estaba fácilmente disponible  para todos: 
                    desde ejecutivos hasta obreros – consistente con la 
                    creencia del fundador Frederick Miller de  que las 
                    cosas buenas en la vida deberían estar disponibles para todos.
                  </p>
                </div>
              </div>
            </div>
          </slide>
          <!-- slide 3  -->
          <!-- slide 4  -->
          <slide>
            <div class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel4Image" alt />
              </div>
              <div class="text-in-carousel">
                <div class="ribbon-container">
                  <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
                </div>
                <div class="text-row">
                  <h3 class="title-in-carousel">NUESTROS PROPIOS LÚPULOS</h3>
                  <img :src="goldenlineImage" class="golden-line" />
                  <p class="descirption-in-carousel">
                    A medida de que los cerveceros aprendían acerca de la 
                    susceptibilidad de los aceites del lúpulo a la luz, 
                    Miller dio pasos adicionales para desarrollar lúpulos 
                    Galeana especiales estables a la luz  solo para Miller High Life, 
                    asegurando que la cerveza supiera tan refrescante de 
                    como se ve a través del vidrio de la botella transparente.
                  </p>
                </div>
              </div>
            </div>
          </slide>
          <!-- slide 4  -->
          <!-- slide 5  -->
          <slide>
            <div class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel5Image" alt />
              </div>
              <div class="text-in-carousel">
                <div class="ribbon-container">
                  <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
                </div>
                <div class="text-row">
                  <h3 class="title-in-carousel">SI TU TIENES TIEMPO…</h3>
                  <img :src="goldenlineImage" class="golden-line" />
                  <p class="descirption-in-carousel">
                    Quizá mas que otra cerveza, Miller High Life se ha 
                    asociado con la idea de una recompensa por un 
                    duro día de trabajo. Como el clásico jingle de 
                    Miller High Life “si tu tienes el tiempo, nosotros 
                    tenemos la cerveza”. Esta actitud de respeto 
                    entre cervecero y consumidor es algo que Miller 
                    High Life siempre ha defendido.
                  </p>
                </div>
              </div>
            </div>
          </slide>
          <!-- slide 5  -->
          <!-- slide 6  -->
          <slide>
            <div class="slide-container">
              <div class="image-in-carousel">
                <img :src="carousel6Image" alt />
              </div>
              <div class="text-in-carousel">
                <div class="ribbon-container">
                  <RibbonTitle title="herencia" subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
                </div>
                <div class="text-row">
                  <h3 class="title-in-carousel">“THE MILLER HIGH LIFE” HOY</h3>
                  <img :src="goldenlineImage" class="golden-line" />
                  <p class="descirption-in-carousel">
                    Miller High Life hoy es como siempre ha sido. 
                    Se elabora con la misma receta. 
                    Embotellada en el mismo vidrio transparente.
                    Ampliamente disponible para todos los que la buscan.
                  </p>
                </div>
              </div>
            </div>
          </slide>
          <!-- slide 6  -->
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import RibbonTitle from "@/components/RibbonTitle";
import carousel1 from "@/assets/1160_MILR_Website_Heritage_01.jpg";
import carousel2 from "@/assets/nina-luna-miller-high-life.png";
import carousel3 from "@/assets/1160_MILR_Website_Heritage_03.jpg"
import carousel4 from "@/assets/1160_MILR_Website_Heritage_04_02.jpg";
import carousel5 from "@/assets/Miller-High-Life-Bottle.png";
import carousel6 from "@/assets/Miller-High-Life.png";
import goldenline from "@/assets/1160_MILR_Website_Heritage_Spacer_1.png";
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
      windowWidth: 0,
      goldenlineImage: goldenline,
      carousel1Image: carousel1,
      carousel2Image: carousel2,
      carousel3Image: carousel3,
      carousel4Image: carousel4,
      carousel5Image: carousel5,
      carousel6Image: carousel6
    };
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    setTimeout(() => {
      this.$refs.firstcontainer.click()
    }, 1500)
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";
@import "~@/styles/ourheritage.scss";
</style>

<style lang="scss">
@import "~@/styles/variables.scss";

.VueCarousel-navigation {
  z-index: 100;
  button.VueCarousel-navigation-prev {
    left: 50px !important;
    font-weight: bold;
    &:focus {
      outline: 0;
    }
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 30px 15px 0;
    border-color: transparent $dark-color transparent transparent;
    padding: 0px !important;
    color: transparent;
    // font-size: 3rem;
  }
  button.VueCarousel-navigation-next {
    right: 50px !important;
    font-weight: bold;
    &:focus {
      outline: 0;
    }
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 15px 30px;
    border-color: transparent transparent transparent $dark-color;
    color: transparent;
    padding: 0px !important;
  }
}
.VueCarousel-dot-container {
  margin-left: 50vw !important;
  margin-bottom: 10px !important;
}

.VueCarousel-dot {
  background: transparent !important;
  border: 1px solid $white-color !important;
  padding: 0px !important;
  margin: 15px 5px !important;
  &:focus, &:active {
    outline: none;
  }
  &.VueCarousel-dot--active {
    background: $white-color !important;
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .VueCarousel-dot-container {
    margin-left: 0px !important;
    margin-bottom: 10px !important;
  }

  button.VueCarousel-navigation-prev, button.VueCarousel-navigation-next {
    border: 0px !important;
  }
}
</style>