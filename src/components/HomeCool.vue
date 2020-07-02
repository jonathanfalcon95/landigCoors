<template>
  <div class="homeCool-container" ref="homeCool" id="homeCool">
    <div class="homeCool_logo-container">
      <!-- <img :src="coorslogoImage" alt /> -->
      <transition name="bounce"  :duration="{ enter: 500, leave: 2000000 }">
        
       
          <HomeCoolContent v-if="getActiveSection==='homeCool'"/>
            
      </transition>
      <!-- <transition name="bounceE">
      <HomeCoolContent v-if="getActiveSection!=='homeCool' && active"/>
      </transition> -->
     <!-- <HomeCoolContent v-show="active"/> -->
    </div>
  </div>
</template>

<script>
import HomeCoolContent from "./HomeCoolContent";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "homeCool",
  components: {
    // coorslogoImage: coorslogo
    HomeCoolContent
  },
  computed: {
    ...mapGetters(["getActiveSection"]),
      
  },
  data() {
    return {
        active:false
    };
  },
  methods: {
    ...mapActions({}),
  
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/homecool.scss";
</style>
