<template>
  <div class="page-container" ref="Home" id="homecontainer">
    <div class="bigscroller">
      <Menu />
      <MobileMenu />
        <section id="home">
          <Hero />
        </section>
        <section id="lacerveza">
            <TheBeer />
        </section>
        <section id="herencia">
          <OurHeritage />
        </section>
        <section id="highlifehoy">
          <HighLifeNow />
        </section>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import Hero from '@/components/Hero'
import TheBeer from '@/components/TheBeer'
import OurHeritage from '@/components/OurHeritage'
import HighLifeNow from '@/components/HighLifeNow'

import Menu from '@/components/Menu'
import MobileMenu from '@/components/MobileMenu'

import parallaxer from '../assets/parallaxer.jpeg';

import VueScrollTo from 'vue-scrollto'

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  props: ['id'],
  watch: { 
    getActiveSection: function(newVal, oldVal) {
      this.scrollToSection(newVal);
    }
  },
  components: {
    Hero,
    Parallax,
    TheBeer,
    OurHeritage,
    HighLifeNow,
    Menu,
    MobileMenu
  },
  computed: {
    ...mapGetters(
      [
        'getActiveSection', 
        'getTriggerSpring', 
        'getEdgeScrolling',
        'getScrollMotion'
      ]
    )
  },
  created() {
  },
  data() {
    return {
      fixedLel: true,
      parallaxerImage: parallaxer,
      placesDirections: {
        'heroUp': () => { 
          this.setActiveSection('lacerveza');
         },
        'heroDown': (scrolled) => { 
          this.setActiveSection('lacerveza');
          document.getElementById('app').scroll(0, scrolled); },
        'lacervezaUp': (scrolled) => { 
          this.setActiveSection('hero');
          document.getElementById('app').scroll(0, scrolled); },
        'lacervezaDown': (scrolled) => { 
          this.setActiveSection('herencia');
          document.getElementById('app').scroll(0, scrolled); },
        'herenciaUp': (scrolled) => { 
          this.setActiveSection('lacerveza');
          document.getElementById('app').scroll(0, scrolled); },
        'herenciaDown': (scrolled) => { 
          this.setActiveSection('highlifehoy');
          document.getElementById('app').scroll(0, scrolled); },
        'highlifehoyUp': (scrolled) => { 
          this.setActiveSection('herencia');
          document.getElementById('app').scroll(0, scrolled); },
        'highlifehoyDown': () => { console.log(''); }
      }
    };
  },
  mounted() {
    this.checkRouteForInitialScroll();
  },
  methods: {
    ...mapActions({
      goToSection: 'goToSection', 
      setActiveSection: 'setActiveSection',
      resetEdgeScrollingAction: 'resetEdgeScrolling',
      setEdgeScrollingAction: 'setEdgeScrolling'
    }),
    checkRouteForInitialScroll() {
      let route = this.$route.path.replace('/', '')
      if(route != '') {
        VueScrollTo.scrollTo(`#${route}`, 1, {
            container: '#app',
            easing: 'linear',
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
        container: '#app',
        easing: 'ease-in',
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
