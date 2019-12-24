<template>
  <!-- <transition name="modal" > -->
  <div id="modal-template">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-close-button" @click="$emit('close')">X</button>
          <!-- <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>-->

          <div class="modal-body-body">
            <slot name="body">
              <Terms v-if="wichModal === 'terms'" name="millerlite" />
              <Politics v-if="wichModal === 'politics'" name="millerlite" />
            </slot>
          </div>

          <!-- <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>-->
        </div>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
import Terms from "@/components/Terms";
import Politics from "@/components/Politics";

export default {
  name: "Modal",
  components: {
    Terms,
    Politics
  },
  props: {
    wichModal: {
      type: String,
      default: "none"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/modal.scss";
</style>
