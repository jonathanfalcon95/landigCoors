<template>
  <div class="high-life-now-container" ref="HighLifeNow" id="HighLifeNow">
    <RibbonTitle 
      title="WELCOME TO THE HIGH LIFE" 
      subtitle="QUE HAY DE NUEVO EN EL MUNDO DE HIGH LIFE"></RibbonTitle>
    <div class="content">
      <div class="high-life-now_image-title">
        <!-- <img src="" alt=""> -->
        <h1>the champange of beers</h1>
        <p>
          La favorita entre los bartenders, cerveceros, y amantes de la cerveza 
          en general. Miller High Life fue lanzada como la marca principal de 
          Miller Brewing Company en 1903. Su sabor fácil de beber es el resumen 
          de la categoría de las American lagers. Fiel a su receta original, 
          se elabora con una mezcla de cebada y malta patentada. 
          Lúpulo Galena del noroeste del Pacífico y levadura Miller.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import RibbonTitle from '@/components/RibbonTitle';
import Footer from '@/components/Footer';

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
    return {};
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
</style>
