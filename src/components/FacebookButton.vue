<template>
  <div id="fbButton" class="validacion" @click="doLogin">
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
  margin-top: 15px;
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $light-color;
  align-self: flex-end;
  cursor: pointer;
  color: $dark-color;
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
}

@media (min-width: 320px) and (max-width: 768px) {
  #fbButton {
    align-self: flex-end;
    padding: 5px 10px;
    img, span {
      margin-right: 6px;
    }
  }
}
</style>