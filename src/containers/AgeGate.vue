<template>
  <div id="age-gate-container">
    <div class="age-gate-body">
      <div class="width-container">
        <div class="logo-container">
          <img :src="mhllogoImage" alt />
        </div>
        <div class="form-container">
          <div class="title-container">
            <img :src="mhlphraseImage" alt="">
          </div>
          <div class="subtitle">
            <h2>
              high life was born in 1903
              <br />
              how about you?
            </h2>
          </div>
          <div class="form-row">
            <input type="text" placeholder="DD" />
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YY" />
            <button @click="setAgeGateTokenAction(true)">submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="age-gate-footer">
      <h1></h1>
    </div>
  </div>
</template>

<script>
import mhllogo from "@/assets/miller-high-life-logo.png";
import mhlphrase from "@/assets/miller-high-logo-phrase.png";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "AgeGate",
  components: {},
  data() {
    return {
      mhllogoImage: mhllogo,
      mhlphraseImage: mhlphrase
    };
  },
  computed: {
    ...mapGetters([""])
  },
  methods: {
    ...mapActions({
      setAgeGateTokenAction: "setAgeGateToken"
    })
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<style lang="scss">
@import "~@/styles/agegate.scss";
</style>
