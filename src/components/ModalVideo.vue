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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/AnGnIBlJgbk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
@import "~@/styles/modalvideo.scss";
</style>
