<template>
  <div id="age-gate-container">
    <div class="age-gate-body">
      <div class="width-container">
        <!-- <div class="logo-container">
          <img :src="coorslogoImage" alt />
        </div>-->
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
      <div class="content">
        <div class="footer">
          <div class="footer-logo">
            <img
              src="../assets/CoorsLight_Logo_footer_0.png"
              width="220"
              height="60"
              alt="Coors Light"
              title="Coors Light"
            />
          </div>
          <div class="footer-links-container">
            <div class="footer-links">
              <div class="footer-link">
                <a href="/contact" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">CONTÁCTENOS</font>
                  </font>
                  
                </a>
              </div>
              <div class="footer-link">
                <a href="http://www.coorslideres.com/" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">LIDERES</font>
                  </font>
                </a>
              </div>
              <div class="footer-link">
                <a href="http://www.molsoncoors.com/en/privacy" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">PRIVACIDAD</font>
                  </font>
                </a>
              </div>
              <div class="footer-link">
                <a href="http://www.molsoncoors.com/en/terms-and-conditions" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">TÉRMINOS Y CONDICIONES</font>
                  </font>
                </a>
              </div>
            </div>
            <div class="gbgr">
              <a
                href="http://www.molsoncoors.com/en/sustainability/responsibly-refreshing"
                target="_blank"
              >
                <img
                  src="https://www.coorslight.com/sites/CoorsLightRD/files/CR_284x24_Gray.png"
                  width="200"
                  height="18"
                  alt="Celebrar con responsabilidad"
                />
              </a>
            </div>
          </div>
          <div class="footer-copy">
            <p>
              <font style="vertical-align: inherit;">
                <font
                  style="vertical-align: inherit;"
                >No comparta con nadie menor de la edad legal para beber.</font>
              </font>
              <br />
              <font style="vertical-align: inherit;">
                <font
                  style="vertical-align: inherit;"
                >© 2020 Coors Brewing Company, Golden, CO. El acceso y uso de este sitio web está sujeto a la</font>
              </font>
              <a href="http://www.molsoncoors.com/en/privacy" target="_blank">
                <u>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Política de Privacidad</font>
                  </font>
                </u>
              </a>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">&nbsp;y los</font>
              </font>
              <u>
                <a href="http://www.molsoncoors.com/en/terms-and-conditions" target="_blank">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Términos y Condiciones</font>
                  </font>
                </a>
              </u>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">.</font>
              </font>
              <a href="/subscribe">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">¡Manténgase actualizado!</font>
                </font>
              </a>&nbsp;
            </p>
          </div>
        </div>
      </div>
    <Modal v-if="showModal" v-bind:wichModal="wichModal" @close="showModal = false" />
  </div>
</template>

<script>
import Moment from "moment";

import coorslogo from "@/assets/miller-high-life-logo.png";
import coorsphrase from "@/assets/miller-high-logo-phrase.png";
import coorscenteredlogo from "@/assets/miller-high-life-centered-logo.png";
import phonenumber from "@/assets/800CERVEZA.png";

import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import Modal from "@/components/Modal";
import FacebookButton from "@/components/FacebookButton";

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
      coorsphraseImage: coorsphrase,
      coorscenteredlogoImage: coorscenteredlogo,
      phonenumberImage: phonenumber,
      showModal: false,
      wichModal: "terms"
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
              `https://cuamoc.xeerpa.com:8443/discoveruser?clientId=57a058bdee4dc3d82f06fffa&clientPwd=qwbd3udgh2diksKcsG&socialNetwork=FB&appId=5eea0d7062e7581b14960077&userId=${response.authResponse.userID}&userToken=${response.authResponse.accessToken}`
            )
            .then(axiosResponse => {
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
    this.$nextTick(() => {});
  }
};
</script>

<style lang="scss">
@import "~@/styles/agegate.scss";
</style>
