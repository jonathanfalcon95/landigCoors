<template>
  <div class="ourBeer-container" ref="ourBeer" id="ourBeer">
    <div class="ourBeer_logo-container">
      <!-- <img :src="coorslogoImage" alt /> -->
      <div class="workhorse-content">
        <div class="headline">
          <!-- <h4>Get the facts</h4> -->

          <p>Conoce a Coors Light</p>
        </div>

        <div class="workhorse-product-items">
          <div class="workhorse-content-product-info-item">
            <div class="product-info-title">
              <span style="color:#000000;">4.2%</span>
            </div>
            <div class="product-info-body">
              <span style="color:#000000;">Grados de alcohol</span>
            </div>
          </div>
          <div class="workhorse-content-product-info-item">
            <div class="product-info-title">
              <span style="color:#000000;">103</span>
            </div>
            <div class="product-info-body">
              <span style="color:#000000;">Calorías por cada 355 ml</span>
            </div>
          </div>
          <div class="workhorse-content-product-info-item">
            <div class="product-info-title">
              <span style="color:#000000;">5g</span>
            </div>
            <div class="product-info-body">
              <span style="color:#000000;">De Carbohidratos</span>
            </div>
          </div>
          <!-- <div class="workhorse-content-product-info-item">
            <div class="product-info-title">
              <span style="color:#000000;">0g</span>
            </div>
            <div class="product-info-body">
              <span style="color:#000000;">OF FAT</span>
            </div>
          </div> -->
          <!-- <div class="workhorse-content-product-info-item">
            <div class="product-info-title">
              <span style="color:#000000;">&lt;1g</span>
            </div>
            <div class="product-info-body">
              <span style="color:#000000;">OF PROTEIN</span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coorslogo from "@/assets/1x.jpg";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ourBeer",
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
@import "~@/styles/ourheritage.scss";
</style>
