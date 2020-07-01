<template>
  <div id="fbButton" 
    class="validacion"
    v-bind:class="[isForResponsive]"
    @click="doLogin">
    <!-- <img class="fblogo" :src="fbIconImage" /> -->
    <span>INICIAR SESIÓN CON FACEBOOK</span>
  </div>
</template>

<script>
import fbIcon from "@/assets/facebook-icon.png";

export default {
  name: "FacebookButton",
  data() {
    return {
      fbIconImage: fbIcon,
    }
  },
  props: {
    isForResponsive: null
  },
  methods: {
    doLogin: function() {
      var vm = this;
      window.FB.login(
        function(response) {
          if (response.status === "connected") {
            window.FB.api("/me?fields=email,name,birthday", function(meResponse) {
              const xeerpaNeeded = {...response, birthday: meResponse.birthday};
              meResponse.birthday
                ? vm.$emit("fbLogin", xeerpaNeeded)
                : vm.$emit("noBirthdayInFacebook");
            });
          }
        },
        { scope: "public_profile,email" }
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

#fbButton {
 
    background-color: #ffffff;
    color: transparent;
    font-size: 16px;
    
    border-radius: 100px;
   
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 65px;



  font-family: 'AvenirLTStd-Heavy';
  //border: 1px solid $dark-color;
  margin-top: 8px;
  //margin-left: 5px;
  padding: 5px 5px !important;
  //margin-right: 40px;
  width: 87.5%;
  margin-right: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
 // background: $light-color;
  align-self: center;
  cursor: pointer;
  color: black;
  height: 35px !important;
  img {
    height: 25px;
    width: auto;
    margin-right: 10px;
  }
  &:focus {
    border-color: black;
  }
  &.desktop {
    margin-top: 10px;
    
    img {
      margin-left: 0.8rem;
    }
  }
}

.mobile {
  display: none !important;
}

@media (min-width: 1400px) and (max-width: 3000px) {
  #fbButton {
    width: 85.6%;
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: flex !important;
  }
  #fbButton {
    align-self: flex-end;
    padding: 5px 10px;
    img, span {
      margin-right: 6px;
    }
    &.mobile {
      margin-top: 1rem;
      align-self: flex-start;
      margin-left: 20px;
    }
  }
}

@media (min-width: 320px) and (max-width: 600px) {
  #fbButton {
    
      img, span {
        margin-left: 1rem;
      }
      img {
        margin-right: 5px;
      }
      span {
        margin-right: 2.2rem;
        margin-left: 0.5rem;
      }
      &.mobile {
      margin-top: 1rem;
      align-self: flex-start;
      margin-left: 0rem;
      width: 89%;
      text-align: center;
      margin-left: 18px;
      span {
        font-size: 0.8rem;
        margin: 0px;
      }
    }
  }
}
</style>