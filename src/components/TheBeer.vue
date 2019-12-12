<template>
  <div class="the-beer-container" ref="TheBeer" id="TheBeer">
    <RibbonTitle 
      title="la cerveza" 
      subtitle="una lager con un gran sabor en botella transparente"></RibbonTitle>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import RibbonTitle from '@/components/RibbonTitle';

export default {
  name: "TheBeer",
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
// @import "~@/styles/thebeer.scss";
</style>
