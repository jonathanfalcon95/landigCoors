<template>
  <div id="fbButton" 
    class="validacion"
    v-bind:class="[isForResponsive]"
    @click="doLogin">
    <img class="fblogo" :src="fbIconImage" />
    <span>FACEBOOK</span>
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
    isForResponsive: ''
  },
  methods: {
    doLogin: function() {
      var vm = this;
      FB.login(
        function(response) {
          if (response.status === "connected") {
            FB.api("/me?fields=email,name,birthday", function(meResponse) {
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
  font-family: $font-dinbold;
  border: 4px solid $dark-color;
  margin-top: 8px;
  margin-left: 4px;
  padding: 5px 5px !important;

  display: flex;
  justify-content: center;
  align-items: center;
  background: $light-color;
  align-self: flex-start;
  cursor: pointer;
  color: $dark-color;
  height: 35px !important;
  img {
    height: 25px;
    width: auto;
    margin-right: 10px;
  }
  span {
    margin-right: 10px;
  }
  &:focus {
    border-color: $darker-color;
  }
  &.desktop {
    margin-top: 20px;
    img {
      margin-left: 0.8rem;
    }
  }
}

.mobile {
  display: none !important;
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
      // margin-left: 3rem;
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
      margin-left: 0.7rem;
    }
  }
}
</style>