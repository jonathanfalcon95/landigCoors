<template>
  <div class="page-container" ref="Home" id="homecontainer">
    <div>
      <h2>test</h2>
    </div>
    <div>
      <parallax>
        <img :src="parallaxerImage" alt="miller high life hero">
      </parallax>
    </div>
    <div style="height: '100vh';">
      data
    </div>
    <div>
      <parallax>
        <img :src="parallaxerImage" alt="miller high life hero">
      </parallax>
    </div>
    <div style="height: '100vh';">
      data
    </div>
    <div>
      <parallax>
        <img :src="parallaxerImage" alt="miller high life hero">
      </parallax>
    </div>
    <div style="height: '100vh';">
      data
    </div>
  </div>
</template>

<script>
import Hamster from "hamsterjs";
import Parallax from 'vue-parallaxy'

import parallaxer from '../assets/parallaxer.jpeg';

import { mapActions } from "vuex";

export default {
  name: "Test",
  components: {
    Parallax
  },
  created() {
    this.help();
  },
  data() {
    return {
      fixedLel: true,
      hamster: undefined,
      parallaxerImage: parallaxer,
    };
  },
  methods: {
    ...mapActions({
    }),
    help() {
      console.log('');
    },
  }
};
</script>

<style scoped lang="scss"></style>
