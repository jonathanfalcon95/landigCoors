<template>
  <div class="scroll-over-container" ref="ScrollOver" id="scrollover" @scroll="onScroll">
    <!-- v-if="getScrollMotion === 'upStart' ||  getScrollMotion === 'downEnd'"> -->
    <div class="top wavecontainer">
      <!-- <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:red;"></path>
      </svg> -->
      <span  v-if="getEdgeScrolling > 15 && getScrollMotion === 'upStart'">TOP</span>
      <span  v-if="getEdgeScrolling > 10 && getScrollMotion === 'upStart'">TOP</span>
      <span  v-if="getEdgeScrolling > 0 && getScrollMotion === 'upStart'">TOP</span>
    </div>

    <h1>{{getScrollMotion}} - {{getEdgeScrolling}}</h1>

    <div class="bottom wavecontainer">
      <!-- <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:blue;"></path>
      </svg> -->
      <span  v-if="getEdgeScrolling < 0 && getScrollMotion === 'downEnd'">DOWN</span>
      <span  v-if="getEdgeScrolling < -10 && getScrollMotion === 'downEnd'">DOWN</span>
      <span  v-if="getEdgeScrolling < -15 && getScrollMotion === 'downEnd'">DOWN</span>
    </div>
  </div>
</template>

<script>
import Hamster from "hamsterjs";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ScrollOver",
  components: {
  },
  computed: {
    ...mapGetters(
      ['getScrollMotion', 'getEdgeScrolling']
    )
  },
  data() {
    return {
      hamster: undefined,
    };
  },
  mounted() {
    this.initHamster();
  },
  methods: {
    ...mapActions({
      resetEdgeScrollingAction: 'resetEdgeScrolling'
    }),
    initHamster() {
      this.hamster = Hamster(this.$refs.ScrollOver);
      this.hamster.wheel(this.onWheel);
    },
    isGoingToReset(delta) {
      if(this.getScrollMotion === 'upStart' && delta < 0) {
        this.resetEdgeScrollingAction();
      } else if(this.getScrollMotion === 'downEnd' && delta > 0) {
        this.resetEdgeScrollingAction();
      }
      console.log('delta 0>', delta)
    },
    onWheel(event, delta, deltaX, deltaY) {
      event.preventDefault();
      console.log(delta, deltaX, deltaY, this.getScrollMotion, 'jejeje');
      this.isGoingToReset(deltaY)
    },
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      console.log('welp ', scrollTop, clientHeight, scrollHeight);
      
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/scrollover.scss";
</style>
