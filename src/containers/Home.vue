<template>
  <div class="page-container" ref="Home" id="homecontainer">
    <div class="bigscroller">
      <Menu />
      <MobileMenu />
      <section id="home">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
        <Hero />
        <span class="bottom watcher" v-observe-visibility="visibilityChanged"></span>
      </section>
      <section id="homeCool">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
        <HomeCool />
        <span class="bottom watcher" v-observe-visibility="visibilityChanged"></span>
      </section>
       <section id="homeVideo">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
        <HomeVideo />
        <span class="bottom watcher" v-observe-visibility="visibilityChanged"></span>
      </section>
     <section id="ourBeer">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
        <OurBeer />
        <span class="bottom watcher" v-observe-visibility="visibilityChanged"></span>
      </section>
       <section id="ourbeer2">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
       <OurBeer2 />
      </section>
       <section id="ourbeer3">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
       <OurBeer3 />
      </section>
     
<!-- commet to footer  -->
      <div class="footer-container">
        <div class="age-gate-footer">
          <div class="logo-in-footer">
            <img :src="mhlcenteredlogoImage" alt class="footer-logo" />
          </div>
          <div class="footer-titles">
            <div class="privacy-container">
              <h4 class="privacy" @click="popUpModal('terms')">términos y condiciones</h4>
              <h4 class="privacy bar">|</h4>
              <h4 class="privacy" @click="popUpModal('politics')">políticas de privacidad</h4>
              <h4 class="privacy bar">|</h4>
              <h4 class="privacy desktop nohover">evita el exceso - producto para mayores de 18 años</h4>
              <h4 class="privacy mobile nohover">
                evita el exceso
                <br />producto para mayores de 18 años
              </h4>
            </div>

            <div class="footer-subtitle">
              <p>© 2020 Coors Brewing Co. Y ™/® Propiedad de Coors Brewing Company, Denver, CO USA.</p>
            </div>
          </div>
          <!-- <div class="number-in-footer">
          <img :src="phonenumberImage" alt class="footer-logo" /> 
          </div> -->
        </div>
        <Modal v-if="showModal" v-bind:wichModal="wichModal" @close="showModal = false" />
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import Hero from "@/components/Hero";
import HomeCool from "@/components/HomeCool";
import HomeVideo from "@/components/HomeVideo";
import OurBeer from "@/components/OurBeer";
import OurBeer2 from "@/components/OurBeer2";
import OurBeer3 from "@/components/OurBeer3";
import Menu from "@/components/Menu";
import MobileMenu from "@/components/MobileMenu";
import Modal from "@/components/Modal";

import parallaxer from "../assets/parallaxer.jpeg";

import mhlcenteredlogo from "@/assets/CoorsLight_Logo_footer_0.png";
import phonenumber from "@/assets/800CERVEZA.png";

import VueScrollTo from "vue-scrollto";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  props: ["id"],
  components: {
    Hero,
    Parallax,
    HomeCool,
     HomeVideo,
    OurBeer,
    OurBeer2,
    OurBeer3,
    Menu,
    MobileMenu,
    Modal
  },
  computed: {
    ...mapGetters([
      "getActiveSection",
      "getTriggerSpring",
      "getEdgeScrolling",
      "getScrollMotion"
    ])
  },
  created() {},
  data() {
    return {
      showModal: false,
      wichModal: "terms",
      fixedLel: true,
      parallaxerImage: parallaxer,
      mhlcenteredlogoImage: mhlcenteredlogo,
      phonenumberImage: phonenumber,
      placesDirections: {
        heroUp: () => {
          this.setActiveSection("homeCool");
        },
        heroDown: scrolled => {
          this.setActiveSection("homeCool");
          document.getElementById("app").scroll(0, scrolled);
        },
        homeCoolUp: scrolled => {
          this.setActiveSection("hero");
          document.getElementById("app").scroll(0, scrolled);
        },
        homeCoolDown: scrolled => {
          this.setActiveSection("ourBeer");
          document.getElementById("app").scroll(0, scrolled);
        },
        ourBeerUp: scrolled => {
          this.setActiveSection("homeCool");
          document.getElementById("app").scroll(0, scrolled);
        },
        ourBeerDown: scrolled => {
          this.setActiveSection("ourbeer2");
          document.getElementById("app").scroll(0, scrolled);
        },
        ourbeer2Up: scrolled => {
          this.setActiveSection("ourBeer");
          document.getElementById("app").scroll(0, scrolled);
        },
        ourbeer2Down: () => {
          console.log("");
        }
      }
    };
  },
  mounted() {
    this.checkRouteForInitialScroll();
  },
  methods: {
    ...mapActions({
      goToSection: "goToSection",
      setActiveSection: "setActiveSection",
      resetEdgeScrollingAction: "resetEdgeScrolling",
      setEdgeScrollingAction: "setEdgeScrolling"
    }),
    popUpModal(modalType) {
      this.showModal = true;
      this.wichModal = modalType;
    },
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.$router.push({ path: entry.target.offsetParent.id });
        this.setActiveSection({
          willSroll: false,
          section: entry.target.offsetParent.id
        });
      }
    },
    checkRouteForInitialScroll() {
      let route = this.$route.path.replace("/", "");
      if (route != "") {
        VueScrollTo.scrollTo(`#${route}`, 1, {
          container: "#app",
          easing: "linear",
          offset: 0,
          force: true,
          cancelable: true,
          onStart: function(element) {},
          onDone: function(element) {},
          onCancel: function() {},
          x: false,
          y: true
        });
      }
    },
    scrollToSection(section) {
      VueScrollTo.scrollTo(`#${section}`, 200, {
        container: "#app",
        easing: "ease-in",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: function(element) {
          // scrolling started
        },
        onDone: function(element) {
          // scrolling is done
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/home.scss";
@import "~@/styles/variables.scss";
</style>
