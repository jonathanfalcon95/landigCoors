<template>
  <div class="hero-container" ref="Hero" id="Hero">
    <div class="menu-container">
      <p class="menu-option">la cerveza</p>
      <p class="menu-option">nuestra herencia</p>
      <p class="menu-option">high life now</p>
    </div>
    <div class="social-container">
      <div class="facebook social-icon"></div>
      <div class="twitter social-icon"></div>
      <div class="instagram social-icon"></div>
    </div>
    <div class="parallax-container">
      <div class="title-text-container">
        <div class="titles">
          <h2 class="red">la cerveza</h2>
          <h2 class="blue">una lager con un</h2>
          <h2 class="blue">gran sabor en botella</h2>
          <h2 class="blue">transparente</h2>
        </div>
        <div class="description">
          <h3 class="beer-description">4.6% ABV / 7 IBU/ 141 CALORíAS (POR CADA 12 OZ.)</h3>
        </div>
      </div>
      <div class="parallax"></div>
    </div>
    <div class="bottom-description">
      <p>La favorita entre los bartenders, cerveceros, y amantes de la cerveza en general. Miller High Life fue</p>
      <p>lanzada como la marca principal de Miller Brewing Company en 1903. Su sabor fácil de beber es el</p>
      <p>resumen de las categorías de las American lagers. Fiel a su receta original, se elabora con una mezcla</p>
      <p>de cebada y malta patentada. Lúpulo Galena del noroeste del Pacífico y levadura Miller.</p>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Hero",
  components: {
  },
  computed: {
    ...mapGetters(
      ['']
    )
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
    }),
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/hero.scss";
</style>
