<template>
  <div class="ribbon-title-container">
    <div class="ribbon">
      <h1 class="ribbon-title">{{title}}</h1>
      <img :src="ribbonImage" alt="" class="star-line">
      <p class="ribbon-subtitle">{{subtitle}}</p> 
    </div>
  </div>
</template>

<script>

import ribbon from "@/assets/lineaestrella-3.png";

export default {
  name: "RibbonTitle",
  props: ['title', 'subtitle'],
  components: {
  },
  computed: {
  },
  data() {
    return {
      ribbonImage: ribbon

    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.ribbon-title-container {
  width: 100%;
  background: $dark-color;
  padding: 8px 0px;
  color: $white-color;
}

.ribbon {
  border-top: 5px solid $white-color;
  border-bottom: 5px solid $white-color;
  text-align: center;
  // background-image: url('@/assets/banner_100.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.ribbon-title {
  text-transform: uppercase;
  font-size: 2rem;
  margin: 1rem 0rem;
  font-family: $font-stratum;
  font-weight: normal;
}

.star-line {
  width: 30%;
}

.ribbon-subtitle {
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 1rem 0rem;
  font-family: $font-dinbold;
}
</style>
