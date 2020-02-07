<template>
  <div id="age-gate-container">
    <div class="age-gate-body">
      <div class="width-container">
        <div class="logo-container">
          <img :src="mhllogoImage" alt />
        </div>
        <div class="form-container">
          <div class="subtitle">
            <h2>
              Miller High Life nació
              <br> en 1903 y tú?
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
          <FacebookButton
            v-if="!showWarning"
            v-on:fbLogin="fbLogin"
            v-on:noBirthdayInFacebook="noBirthdayInFacebook"
            isForResponsive="desktop"
          />
          <FacebookButton
            v-if="!showWarning"
            v-on:fbLogin="fbLogin"
            v-on:noBirthdayInFacebook="noBirthdayInFacebook"
            isForResponsive="mobile"
          />
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
      <div class="logo-in-footer">
        <img :src="mhlcenteredlogoImage" alt="" class="footer-logo">
      </div>
      <div class="footer-titles">
        <div class="privacy-container">
          <h4 class="privacy"
            @click="popUpModal('terms')">terminos y condiciones</h4>
          <h4 class="privacy bar">|</h4>
          <h4 class="privacy"
            @click="popUpModal('politics')">politicas de privacidad</h4>
          <h4 class="privacy bar">|</h4>
          <h4 class="privacy desktop nohover">evita el exceso - producto para mayores de 18 años</h4>
          <h4 class="privacy mobile nohover">
            evita el exceso
            <br>producto para mayores de 18 años
          </h4>
        </div>

        <div class="footer-subtitle">
          <p>© 2020 Coors Brewing Co. Y ™/® Propiedad de Coors Brewing Company, Denver, CO USA.</p>
        </div>
      </div>
      <div class="number-in-footer">
        <img :src="phonenumberImage" alt="" class="footer-logo">
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
import mhlcenteredlogo from "@/assets/miller-high-life-centered-logo.png";
import phonenumber from "@/assets/800CERVEZA.png";


import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import Modal from '@/components/Modal'
import FacebookButton from '@/components/FacebookButton'

export default {
  name: "AgeGate",
  components: {
    FacebookButton,
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
      mhlcenteredlogoImage: mhlcenteredlogo,
      phonenumberImage: phonenumber,
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
    noBirthdayInFacebook() {
      this.showWarning = true;
    },
    fbLogin(response) {
      const bDay = Moment(`${response.birthday}`, "MM/DD/YYYY");
      const today = Moment();
      const age = today.diff(bDay, "years");
      if (isNaN(age) || age < 18) {
        this.showWarning = true;
      } else {
        setTimeout(() => {
          axios
              .get(
                `https://cuamoc.xeerpa.com:8443/discoveruser?clientId=5655fcb391d7c89416d0ad0d&clientPwd=Mg39l7R6Ne&appId=CUAMOC-MILLER-NACIONAL&socialNetwork=FB&userId=${response.authResponse.userID}&userToken=${response.authResponse.accessToken}&robinson=TRUE-O-FALSE`
              )
              .then(axiosResponse => {
                setTimeout(() => {
                  this.setAgeGateTokenAction(true);
                }, 200)
              })
              .catch(e => {
                this.errors.push(e);
              });
        }, 100);
      }
    },
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
