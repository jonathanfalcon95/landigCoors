<template>
  <div id="age-gate-container">
    <div class="age-gate-body">
      <div class="width-container">
        <div class="logo-container">
          <img :src="mhllogoImage" alt />
        </div>
        <div class="form-container">
          <div class="title-container">
            <img :src="mhlphraseImage" alt />
          </div>
          <div class="subtitle">
            <h2>
              High Life nació
              en 1903 y tú?
            </h2>
          </div>
          <div class="form-row" :class="showWarning ? 'hasError' : '' ">
            <input
              ref="day"
              type="text"
              maxlength="2"
              placeholder="DD"
              v-on:keyup="focusNextSibling($event)"
              v-model="day"
            />
            <input
              ref="month"
              type="text"
              maxlength="2"
              placeholder="MM"
              v-on:keyup="focusNextSibling($event)"
              v-model="month"
            />
            <input
              ref="year"
              type="text"
              maxlength="4"
              placeholder="YYYY"
              v-on:keyup="focusNextSibling($event)"
              v-model="year"
            />
            <input type="submit" text="enviar" class="submit-button" @click="normalLogin($event)" />
          </div>
          <div class="AgeGate-warning" v-if="showWarning">
            <div class="AgeGate-warning-wrapper">
              <p class="AgeGate-warning-message">Debes ser mayor de edad para navegar este sitio</p>
            </div>
          </div>
          <div class="AgeGate-warning" v-if="false">
            <div class="AgeGate-warning-wrapper">
              <p
                class="AgeGate-warning-message"
              >Debes ser mayor de edad para navegar y tu edad es privada en facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="age-gate-footer">
      <div class="privacy-container">
        <h4 class="privacy"
        @click="popUpModal('terms')">terminos y condiciones</h4>
        <h4 class="privacy bar">|</h4>
        <h4 class="privacy"
        @click="popUpModal('politics')">politicas de privacidad</h4>
        <h4 class="privacy bar">|</h4>
        <h4 class="privacy">evita el exceso</h4>
      </div>
    </div>
    <Modal 
      v-if="showModal"
      v-bind:wichModal="wichModal"
      @close="showModal = false"/>
  </div>
</template>

<script>
import Moment from "moment";

import mhllogo from "@/assets/miller-high-life-logo.png";
import mhlphrase from "@/assets/miller-high-logo-phrase.png";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import Modal from '@/components/Modal'

export default {
  name: "AgeGate",
  components: {
    Modal
  },
  data() {
    return {
      day: undefined,
      month: undefined,
      year: undefined,
      showWarning: false,
      mhllogoImage: mhllogo,
      mhlphraseImage: mhlphrase,
      showModal: false,
      wichModal: 'terms'
    };
  },
  computed: {
    ...mapGetters([""])
  },
  methods: {
    ...mapActions({
      setAgeGateTokenAction: "setAgeGateToken"
    }),
    popUpModal(modalType) {
      this.showModal = true;
      this.wichModal = modalType;
    },
    hideWarning() {
      this.showWarning = false;
    },
    normalLogin(event) {
      const { day, month, year } = this;
      if (day && day !== "" && month && month !== "" && year && year !== "") {
        const bDay = Moment(`${day}/${month}/${year}`, "DD/MM/YYYY");
        const today = Moment();
        const age = today.diff(bDay, "years");
        if (isNaN(age) || age < 18) {
          this.showWarning = true;
        } else {
          setTimeout(() => {
            this.setAgeGateTokenAction(true);
          }, 100);
        }
      }
    },
    focusNextSibling(event) {
      const element = event.target;
      if (
        element &&
        element.value &&
        element.value.length === event.target.maxLength
      ) {
        event.target.nextElementSibling.focus();
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
@import "~@/styles/agegate.scss";
</style>
