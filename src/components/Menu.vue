<template>
  <div id="menu-container" 
    class="menu-container" 
    :class="{ open: isMenuOpen }">
    <div class="menu-header">
      <div class="menu_icon-container">
        <img @click="selectMobileOption('home')"
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
    <div class="menu-row">
      <div class="menu-options-container">
        <div @click="selectMobileOption('lacerveza')"
          :class="{ active: getActiveSection === 'lacerveza'}" 
          class="menu-option">
          <h2>LA CERVEZA</h2>
        </div>
        <div @click="selectMobileOption('herencia')"
          :class="{ active: getActiveSection === 'herencia'}"
          class="menu-option">
          <h2>HERENCIA</h2>
        </div>
        <div @click="selectMobileOption('highlifehoy')"
          :class="{ active: getActiveSection === 'highlifehoy'}"
          class="menu-option">
          <h2>HIGH LIFE HOY</h2>
        </div>
      </div>
    </div>
    <div class="menu-social-icons-container">
      <div class="social-icons">
        <a class="social-icon" href=""><img :src="fbIconImage" /></a>
        <a class="social-icon" href=""><img :src="twIconImage" /></a>
        <a class="social-icon" href=""><img :src="ytIconImage" /></a>
        <a class="social-icon" href=""><img :src="inIconImage" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import mhlicon from "@/assets/miller-high-life-icon.png";

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
@import "~@/styles/menu.scss";
</style>
