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
              high life nació 
              en 1903 y tú?
            </h2>
          </div>
          <div class="form-row">
            <input type="text" maxlength="2" placeholder="DD" v-on:keyup="focusNextSibling($event)"/>
            <input type="text" maxlength="2" placeholder="MM" v-on:keyup="focusNextSibling($event)"/>
            <input type="text" maxlength="4" placeholder="YYYY" v-on:keyup="focusNextSibling($event)"/>
            <input type="submit" text="enviar" class="submit-button" @click="setAgeGateTokenAction(true)">
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
    }),
    focusNextSibling(event) {
      const element = event.target;
      if (
        element &&
        element.value &&
        element.value.length === event.target.maxLength
      ) {
        event.target.nextElementSibling.focus();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<style lang="scss">
@import "~@/styles/agegate.scss";
</style>
