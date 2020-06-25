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
     <section id="ourBeer">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
        <OurBeer />
        <span class="bottom watcher" v-observe-visibility="visibilityChanged"></span>
      </section>
       <section id="highlifehoy">
        <span class="top watcher" v-observe-visibility="visibilityChanged"></span>
        <HighLifeNow />
      </section>
      <div class="content">
        <div class="footer">
          <div class="footer-logo">
            <img
              src="../assets/CoorsLight_Logo_footer_0.png"
              width="220"
              height="60"
              alt="Coors Light"
              title="Coors Light"
            />
          </div>
          <div class="footer-links-container">
            <div class="footer-links">
              <div class="footer-link">
                <a href="/contact" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">CONTÁCTENOS</font>
                  </font>
                  
                </a>
              </div>
              <div class="footer-link">
                <a href="http://www.coorslideres.com/" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">LIDERES</font>
                  </font>
                </a>
              </div>
              <div class="footer-link">
                <a href="http://www.molsoncoors.com/en/privacy" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">PRIVACIDAD</font>
                  </font>
                </a>
              </div>
              <div class="footer-link">
                <a href="http://www.molsoncoors.com/en/terms-and-conditions" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">TÉRMINOS Y CONDICIONES</font>
                  </font>
                </a>
              </div>
            </div>
            <div class="gbgr">
              <a
                href="http://www.molsoncoors.com/en/sustainability/responsibly-refreshing"
                target="_blank"
              >
                <img
                  src="https://www.coorslight.com/sites/CoorsLightRD/files/CR_284x24_Gray.png"
                  width="200"
                  height="18"
                  alt="Celebrar con responsabilidad"
                />
              </a>
            </div>
          </div>
          <div class="footer-copy">
            <p>
              <font style="vertical-align: inherit;">
                <font
                  style="vertical-align: inherit;"
                >No comparta con nadie menor de la edad legal para beber.</font>
              </font>
              <br />
              <font style="vertical-align: inherit;">
                <font
                  style="vertical-align: inherit;"
                >© 2020 Coors Brewing Company, Golden, CO. El acceso y uso de este sitio web está sujeto a la</font>
              </font>
              <a href="http://www.molsoncoors.com/en/privacy" target="_blank">
                <u>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Política de Privacidad</font>
                  </font>
                </u>
              </a>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">&nbsp;y los</font>
              </font>
              <u>
                <a href="http://www.molsoncoors.com/en/terms-and-conditions" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Términos y Condiciones</font>
                  </font>
                </a>
              </u>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">.</font>
              </font>
              <a href="/subscribe">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">¡Manténgase actualizado!</font>
                </font>
              </a>&nbsp;
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="footer-container">
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
          <div class="number-in-footer">
            <img :src="phonenumberImage" alt class="footer-logo" />
          </div>
        </div>
        <Modal v-if="showModal" v-bind:wichModal="wichModal" @close="showModal = false" />
      </div>-->
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import Hero from "@/components/Hero";
import HomeCool from "@/components/HomeCool";
import OurBeer from "@/components/OurBeer";
import HighLifeNow from "@/components/HighLifeNow";

import Menu from "@/components/Menu";
import MobileMenu from "@/components/MobileMenu";
import Modal from "@/components/Modal";

import parallaxer from "../assets/parallaxer.jpeg";

import mhlcenteredlogo from "@/assets/miller-high-life-centered-logo.png";
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
    OurBeer,
    HighLifeNow,
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
          this.setActiveSection("highlifehoy");
          document.getElementById("app").scroll(0, scrolled);
        },
        highlifehoyUp: scrolled => {
          this.setActiveSection("ourBeer");
          document.getElementById("app").scroll(0, scrolled);
        },
        highlifehoyDown: () => {
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
