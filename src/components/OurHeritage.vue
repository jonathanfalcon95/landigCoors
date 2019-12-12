<template>
  <div class="our-heritage-container" ref="OurHeritage" id="OurHeritage">
    <RibbonTitle 
      title="herencia" 
      subtitle="MAS DE UN SIGLO DE HISTORIA ENRIQUECEDORA"></RibbonTitle>
    <div class="content">
      <div class="our-heritage_image-title">
        <!-- <img src="" alt=""> -->
        <h1>UNA PROMESA GUARDADA DESDE 1903</h1>
        <p>
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import RibbonTitle from '@/components/RibbonTitle';

export default {
  name: "OurHeritage",
  components: {
    RibbonTitle
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
</style>
