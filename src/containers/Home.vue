<template>
  <div class="page-container" ref="Home" id="homecontainer">
    <div class="bigscroller">
      <div class="above-all">{{getScrollMotion}} - {{getEdgeScrolling}} </div>
      <transition name="home-fade">
        <section id="hero" 
          v-if="getActiveSection === 'hero'">
          <div class="demo-hero">
            <h1> hero </h1>
          </div>
        </section>
      </transition>
      <transition name="home-fade">
        <section id="herencia"
          v-if="getActiveSection === 'herencia'">
          <div class="demo-hero">
            <h1> herencia </h1>
          </div>
        </section>
      </transition>
      <transition name="home-fade">
        <section id="highlifenow"
          v-if="getActiveSection === 'highlifenow'">
          <div class="demo-hero">
            <h1> highlifenow </h1>
          </div>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import Hamster from "hamsterjs";
import Parallax from 'vue-parallaxy'

import parallaxer from '../assets/parallaxer.jpeg';

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Parallax,
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
  },
  data() {
    return {
      fixedLel: true,
      hamster: undefined,
      parallaxerImage: parallaxer,
      placesDirections: {
        'heroUp': () => { console.log('none') },
        'heroDown': (scrolled) => { 
          this.setActiveSection('herencia');
          document.getElementById('app').scroll(0, scrolled); },
        'herenciaUp': (scrolled) => { 
          this.setActiveSection('hero');
          document.getElementById('app').scroll(0, scrolled); },
        'herenciaDown': (scrolled) => { 
          this.setActiveSection('highlifenow');
          document.getElementById('app').scroll(0, scrolled); },
        'highlifenowUp': (scrolled) => { 
          this.setActiveSection('herencia');
          document.getElementById('app').scroll(0, scrolled); },
        'highlifenowDown': () => { console.log('none'); }
      }
    };
  },
  mounted() {
    this.initHamster();
  },
  methods: {
    ...mapActions({
      setActiveSection: 'setActiveSection',
      resetEdgeScrollingAction: 'resetEdgeScrolling',
      setEdgeScrollingAction: 'setEdgeScrolling'
    }),
    help() {
      console.log('jelp bro');
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
        console.log('will go down', this.getEdgeScrolling);
        this.setEdgeScrollingAction(-1);
        if(this.getEdgeScrolling === -15) {
          this.changeSection('Down');
        }
      }
    },
    onWheel(event, delta, deltaX, deltaY) {
      this.isGoingToReset(deltaY);
    },
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/home.scss";
@import "~@/styles/variables.scss";
</style>
