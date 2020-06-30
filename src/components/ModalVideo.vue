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
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AnGnIBlJgbk?enablejsapi=1&amp;autoplay=1" frameborder="0"  allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <!-- <iframe id="video-container-qYeF5_KPM_c" data-videoid="qYeF5_KPM_c" class="modal-content ytplayer" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/qYeF5_KPM_c?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.coorslight.com&amp;widgetid=1&amp;mute=1&amp;autoplay=1"></iframe> -->
           <!-- -webkit-tap-highlight-color: rgba(0,0,0,0);
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 14px;
line-height: 1.42857143;
color: #ffffff;
width: 100%;
height: 100%;
box-sizing: border-box;
position: relative;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0,0,0,.2);
border-radius: 6px;
outline: 0;
box-shadow: 0 5px 15px rgba(0,0,0,.5);
border-top: none; -->
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



export default {
  name: "Modal",
  components: {
  
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
