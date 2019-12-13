<template>
  <div id="app">
    <transition name="slide-fade">
      <div v-if="getAgeGateToken">
        <router-view></router-view>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="!getAgeGateToken">
        <AgeGate />
      </div>
    </transition>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import AgeGate from '@/containers/AgeGate'

export default {
  name: "app",
  components: {
    AgeGate
  },
  data() {
    return {
      toggler: false  
    };
  },
  computed: {
    ...mapGetters([
      'getAgeGateToken'
    ])
  },
  methods: {
    ...mapActions({
      setScrollMotionAction: 'setScrollMotion',
      setEdgeScrollingAction: 'setEdgeScrolling',
      resetEdgeScrollingAction: 'resetEdgeScrolling'
    }),
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= (scrollHeight - 5)) {
        this.setScrollMotionAction('downEnd');
      } else if (scrollTop + clientHeight <= (clientHeight + 5)) {
        this.setScrollMotionAction('upStart');
      } else {
        this.setScrollMotionAction('scrolling');
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
    });
  }
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
