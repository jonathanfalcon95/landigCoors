<template>
  <div id="menu-container" 
    class="menu-container" 
    :class="{ open: isMenuOpen }">
    <div class="menu-header">
      <div class="menu_icon-container">
        <img @click="selectMobileOption('home')"
          :src="coorsiconImage" alt />
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
    <div class="menu-row">
      <div class="menu-options-container">
        <div @click="selectMobileOption('home')"
          :class="{ active: getActiveSection === 'home'}" 
          class="menu-option">
          <h2 class="stratum">Home</h2>
        </div>
        <div @click="selectMobileOption('ourBeer')"
          :class="{ active: getActiveSection === 'ourBeer'}"
          class="menu-option">
          <h2 class="stratum">Nuestra Cerveza</h2>
        </div>
        <!-- <div @click="selectMobileOption('highlifehoy')"
          :class="{ active: getActiveSection === 'highlifehoy'}"
          class="menu-option">
          <h2 class="stratum">MILLER HIGH LIFE HOY</h2>
        </div> -->
      </div>
    </div>
    <div class="menu-social-icons-container">
      <div class="social-icons">
        <a class="social-icon" target="_blank" href="https://www.instagram.com/coorslight_mx/?hl=es-la"><img :src="inIconImage" /></a>
        <a class="social-icon facebook-icon" target="_blank" href="https://www.facebook.com/coorslightmx/"><img :src="fbIconImage" /></a>
      
        <a class="social-icon" target="_blank" href="https://www.youtube.com/user/coorslightmx"><img :src="ytIconImage" /></a>
        
      </div>
    </div>
  </div>
</template>

<script>
import coorsicon from "@/assets/CoorsLight_Logo_nav_3.png";

import fbIcon from "@/assets/public_facebook.png";
import twIcon from "@/assets/public_twitter.png";
import ytIcon from "@/assets/public_youtube.png";
import inIcon from "@/assets/public_instagram.png";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Menu",
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
      coorsiconImage: coorsicon,
      fbIconImage: fbIcon,
      twIconImage: twIcon,
      ytIconImage: ytIcon,
      inIconImage: inIcon,
    };
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/menu.scss";
</style>
