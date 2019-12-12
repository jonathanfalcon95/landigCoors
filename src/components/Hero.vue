<template>
  <div class="hero-container" ref="Hero" id="Hero">
    <div class="hero_logo-container">
      <img :src="mhllogoImage" alt="">
    </div>
  </div>
</template>

<script>
import mhllogo from "@/assets/miller-high-life-logo.png";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Hero",
  components: {
    mhllogoImage: mhllogo,
  },
  computed: {
    ...mapGetters(
      ['']
    )
  },
  data() {
    return {
      mhllogoImage: mhllogo
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
