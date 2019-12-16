<template>
  <div class="the-beer-container" ref="TheBeer" id="TheBeer">
    <RibbonTitle title="la cerveza" subtitle="una lager con un gran sabor en botella transparente"></RibbonTitle>
    <div class="mobile-thebeer_logo-row">
      <div class="thebeer_imagelogo-container">
        <img :src="millerhighlifelogoImage" alt class="thebeer_imagelogo" />
      </div>
      <div class="thebeer_phrase-container">
        <img :src="millerhighlifephraseImage" alt class="thebeer_phrase" />
      </div>
    </div>
    <div class="thebeer_content">
      <div class="thebeer_text-content">
        <div class="thebeer_logo-row">
          <div class="thebeer_imagelogo-container">
            <img :src="millerhighlifelogoImage" alt class="thebeer_imagelogo" />
          </div>
          <div class="thebeer_phrase-container">
            <img :src="millerhighlifephraseImage" alt class="thebeer_phrase" />
          </div>
        </div>
        <p>
          La favorita entre los bartenders, cerveceros, y amantes de la cerveza
          en general. Miller High Life fue lanzada como la marca principal de
          Miller Brewing Company en 1903. Su sabor fácil de beber es el resumen
          de la categoría de las American lagers. Fiel a su receta original,
          se elabora con una mezcla de cebada y malta patentada.
          Lúpulo Galena del noroeste del Pacífico y levadura Miller.
        </p>
        <div class="table-values">
          <table>
            <tbody>
              <tr>
                <th class="abv-val">ABV</th>
                <th class="ibu-val">IBU</th>
                <th class="cal-val">Calorías</th>
              </tr>
              <tr>
                <td class="abv-num">4.6%</td>
                <td class="ibu-num">7</td>
                <td class="cal-num">141</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="the-beer_image-title">
        <img :src="millerhighlifebottleImage" alt />
      </div>
    </div>
    <div class="mobile-table-values">
      <table>
        <tbody>
          <tr>
            <th class="abv-val">ABV</th>
            <th class="ibu-val">IBU</th>
            <th class="cal-val">Calorías</th>
          </tr>
          <tr>
            <td class="abv-num">4.6%</td>
            <td class="ibu-num">7</td>
            <td class="cal-num">141</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import millerhighlifelogo from "@/assets/miller-high-life-centered-logo.png";
import millerhighlifephrase from "@/assets/miller-high-logo-phrase.png";
import millerhighlifebottle from "@/assets/MHL_Bottles_Single.png";

import { mapActions, mapGetters } from "vuex";

import RibbonTitle from "@/components/RibbonTitle";

export default {
  name: "TheBeer",
  components: {
    RibbonTitle
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {
      millerhighlifelogoImage: millerhighlifelogo,
      millerhighlifephraseImage: millerhighlifephrase,
      millerhighlifebottleImage: millerhighlifebottle
    };
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/thebeer.scss";
</style>
