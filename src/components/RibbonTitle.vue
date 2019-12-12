<template>
  <div class="ribbon-title-container">
    <div class="ribbon">
      <h2 class="ribbon-title">{{title}}</h2>
      <p class="ribbon-subtitle">{{subtitle}}</p> 
    </div>
  </div>
</template>

<script>

import ribbon from "@/assets/banner_100.png";

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
.ribbon-title-container {
  width: 100%;
}

.ribbon {
  text-align: center;
  // background-image: url('@/assets/banner_100.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
