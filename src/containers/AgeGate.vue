<template>
  <div id="age-gate-container">
     
    <div class="age-gate-body">
      <div class="width-container">
        <!-- <div class="logo-container">
          <img :src="coorslogoImage" alt />
        </div>-->
        <div v-if="window.width<700" >
        <img height="90"
          :src="coorsiconImage" alt />
      </div>
        <div class="form-container">
          <div class="subtitle">
            <h2>
              ¿Cuando Naciste?
              <br />
            </h2>
          </div>
          <div class="form-row" :class="showWarning ? 'hasError' : '' ">
            <input
              ref="day"
              type="tel"
              maxlength="2"
              placeholder="DD"
              v-on:keyup="focusNextSibling($event)"
              v-model="day"
            />
            <input
              ref="month"
              type="tel"
              maxlength="2"
              placeholder="MM"
              v-on:keyup="focusNextSibling($event)"
              v-model="month"
            />
            <input
              ref="year"
              type="tel"
              maxlength="2"
              placeholder="YY"
              v-on:keyup="focusNextSibling($event)"
              v-model="year"
            />
            <br />
            <!-- <input type="submit" text="enviar" class="submit-button" @click="normalLogin($event)" /> -->
          </div>
          <p>Destinado únicamente a consumidores legales en edad de beber.</p>

          <input type="submit" text="enviar" class="submit-button" @click="normalLogin($event)" />
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
       <div class="footer-container">
        <div class="age-gate-footer">
          <div class="logo-in-footer">
            <img :src="mhlcenteredlogoImage" alt class="footer-logo" />
            
          </div>
          <div class="footer-titles">
            <div class="privacy-container">
             
              <h4 class="privacy" @click="popUpModal('terms')">términos y condiciones</h4>
              <h4 class="privacy bar">|</h4>
              <h4 class="privacy" @click="popUpModal('politics')">políticas de privacidad</h4>
              <h4 class="privacy bar">|</h4>
              <h4 class="privacy desktop nohover">evita el exceso - producto para mayores de 18 años</h4>
              <h4 class="privacy mobile nohover">
                evita el exceso
                <br />producto para mayores de 18 años
              </h4>
            </div>

            <div class="footer-subtitle">
              <p>© 2020 Coors Brewing Co. Y ™/® Propiedad de Coors Brewing Company, Denver, CO USA.</p>
            </div>
          </div>
          <div class="number-in-footer">
          <img :src="phonenumberImage" alt class="footer-logo" /> 
          </div>
        </div>
        
      </div>
    <Modal v-if="showModal" v-bind:wichModal="wichModal" @close="showModal = false" />
  </div>
</template>

<script>
import Moment from "moment";
import coorsicon from "@/assets/CoorsLight_Logo_nav_3.png";
import coorslogo from "@/assets/miller-high-life-logo.png";
import coorsphrase from "@/assets/miller-high-logo-phrase.png";
import coorscenteredlogo from "@/assets/miller-high-life-centered-logo.png";
import phonenumber from "@/assets/Llamanossincosto-04.png";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import axios from "axios";
import Modal from "@/components/Modal";
import FacebookButton from "@/components/FacebookButton";
import mhlcenteredlogo from "@/assets/CoorsLight_Logo_footer_0.png";
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
      coorslogoImage: coorslogo,
       coorsiconImage: coorsicon,
      coorsphraseImage: coorsphrase,
      coorscenteredlogoImage: coorscenteredlogo,
      phonenumberImage: phonenumber,
      showModal: false,
      wichModal: "terms",
      response: undefined,
       mhlcenteredlogoImage: mhlcenteredlogo,
       window: {
            width: 0,
            height: 0
        }
    };
  },
       created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
  computed: {
    ...mapGetters([""])
  },
  methods: {
    ...mapActions({
      setAgeGateTokenAction: "setAgeGateToken"
    }),

     handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
    noBirthdayInFacebook() {
      this.showWarning = true;
    },
    fbLogin(response) {
      console.log(response);
      const bDay = Moment(`${response.birthday}`, "MM/DD/YYYY");
      const today = Moment();
      const age = today.diff(bDay, "years");
      if (isNaN(age) || age < 18) {
        this.showWarning = true;
      } else {
        setTimeout(() => {
          axios
            .get(
              `https://cuamoc.xeerpa.com:8443/discoveruser?clientId=57a058bdee4dc3d82f06fffa&clientPwd=qwbd3udgh2diksKcsG&socialNetwork=FB&appId=5eea0d7062e7581b14960077&userId=${response.authResponse.userID}&userToken=${response.authResponse.accessToken}`
            )
            .then(axiosResponse => {
             this.response=axiosResponse;
              setTimeout(() => {
                this.setAgeGateTokenAction(true);
              }, 200);
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
    normalLogin() {
      
      const { day, month, year } = this;
      if (day && day !== "" && month && month !== "" && year && year !== "") {
        const bDay = Moment(`${day}/${month}/${year}`, "DD/MM/YY");
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
    this.$nextTick(() => {});
  }
};
</script>

<style lang="scss">
@import "~@/styles/agegate.scss";
</style>
