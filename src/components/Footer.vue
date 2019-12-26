<template>
  <div class="footer-container">
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
import Modal from '@/components/Modal'

export default {
  name: "Footer",
  data() {
    return {
      showModal: false,
      wichModal: 'terms'
    };
  },
  methods: {
    popUpModal(modalType) {
      this.showModal = true;
      this.wichModal = modalType;
    },
  },
  components: {
    Modal
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.footer-container {
  background: $dark-color;
}
</style>
