<template>
  <div class="hero-container" ref="Hero" id="Hero">
    <div class="hero_logo-container">
      <img :src="coorslogoImage" alt="">
    </div>
  </div>
</template>

<script>
import coorslogo from "@/assets/20-MO-003-0001-V3_1920x900_7.jpg";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Hero",
  components: {
    coorslogoImage: coorslogo,
  },
  computed: {
    ...mapGetters(
      ['']
    )
  },
  data() {
    return {
      coorslogoImage: coorslogo
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
