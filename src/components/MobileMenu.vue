<template>
  <div id="mobile-menu-container" 
    class="mobile-menu-container" 
    :class="{ open: isMenuOpen }">
    <div class="mobile-menu-header">
      <div class="mobile-menu-icon-container">
        <img @click="selectHomeOption('home')"
          :src="mhliconImage" alt />
      </div>
      <div class="hamburguer-container">
        <div id="nav-icon3" :class="{ open: isMenuOpen }"
          @click="openMenu()">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="mobile-menu-row">
      <div class="mobile-menu-options-container">
        <div @click="selectMobileOption('home')"
          :class="{ active: getActiveSection === 'home'}" 
          class="mobile-menu-option">
          <h2 class="stratum">Home</h2>
        </div>
        <div @click="selectMobileOption('ourBeer')"
          :class="{ active: getActiveSection === 'ourBeer'}"
          class="mobile-menu-option">
          <h2 class="stratum">Nuestra Cerveza</h2>
        </div>
       
      </div>
    </div>
    <div class="mobile-menu-social-icons-container">
      <div class="social-icons">
        <a class="social-icon" target="_blank" href="http://www.instagram.com/coorslight"><img :src="inIconImage" /></a>
        <a class="social-icon facebook-icon" target="_blank" href="http://www.facebook.com/coorslight"><img :src="fbIconImage" /></a>
      
        <a class="social-icon" target="_blank" href="http://www.youtube.com/coorslight"><img :src="ytIconImage" /></a>
       
      </div>
    </div>
  </div>
</template>

<script>
import mhlicon from "@/assets/CoorsLight_Logo_nav_3.png";;
import fbIcon from "@/assets/public_facebook.png";
import twIcon from "@/assets/public_twitter.png";
import ytIcon from "@/assets/public_youtube.png";
import inIcon from "@/assets/public_instagram.png";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "MobileMenu",
  computed: {
    ...mapGetters(
      [
        'getActiveSection'
      ]
    )
  },
  methods: {
    ...mapActions({
      setActiveSection: 'setActiveSection',
    }),
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    selectHomeOption(option) {
      this.setActiveSection({
          willScroll: true,
          section: option
        });
    },
    selectMobileOption(option) {
      this.setActiveSection({
          willScroll: true,
          section: option
        });
      this.$router.push({path: option});
      this.openMenu();
    }
  },
  data() {
    return {
      isMenuOpen: false,
      mhliconImage: mhlicon,
      fbIconImage: fbIcon,
      twIconImage: twIcon,
      ytIconImage: ytIcon,
      inIconImage: inIcon,
    };
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/mobilemenu.scss";
</style>
