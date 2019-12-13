<template>
  <div class="page-container" ref="Home" id="homecontainer">
    <div class="bigscroller">
      <Menu />
      <div class="above-all">{{getScrollMotion}} - {{getEdgeScrolling}} </div>
        <section id="hero">
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
import Hamster from "hamsterjs";
import Parallax from 'vue-parallaxy'
import Hero from '@/components/Hero'
import TheBeer from '@/components/TheBeer'
import OurHeritage from '@/components/OurHeritage'
import HighLifeNow from '@/components/HighLifeNow'

import Menu from '@/components/Menu'

import parallaxer from '../assets/parallaxer.jpeg';

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
    Menu
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
    this.help();
    this.ye = 'yeh';
  },
  data() {
    return {
      ye: '',
      fixedLel: true,
      hamster: undefined,
      parallaxerImage: parallaxer,
      placesDirections: {
        'heroUp': () => { console.log('') },
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
    this.initHamster();
  },
  methods: {
    ...mapActions({
      goToSection: 'goToSection', 
      setActiveSection: 'setActiveSection',
      resetEdgeScrollingAction: 'resetEdgeScrolling',
      setEdgeScrollingAction: 'setEdgeScrolling'
    }),
    scrollToSection(section) {
      console.log('section');
    },
    help() {
      console.log('');
    },
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
    },
    changeSection(direction) {
      let scrollOffset = document.getElementById('app').scrollHeight;
      let scrolled = direction === 'Up' ? scrollOffset : 0;
      this.placesDirections[`${this.getActiveSection}${direction}`](scrolled);
      this.resetEdgeScrollingAction(direction);
    },
    initHamster() {
      this.hamster = Hamster(this.$refs.Home);
      this.hamster.wheel(this.onWheel);
    },
    isGoingToReset(delta) {
      if(this.getScrollMotion === 'upStart' && delta > 0) {
        this.setEdgeScrollingAction(1);
        if(this.getEdgeScrolling === 15) {
          this.changeSection('Up');
        }
      } else if(this.getScrollMotion === 'downEnd' && delta < 0) {
        this.setEdgeScrollingAction(-1);
        if(this.getEdgeScrolling === -15) {
          this.changeSection('Down');
        }
      }
    },
    onWheel(event, delta, deltaX, deltaY) {
      // this.isGoingToReset(deltaY);
    },
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/home.scss";
@import "~@/styles/variables.scss";
</style>
