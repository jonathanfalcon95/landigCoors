<template>
  <div id="fbButton" class="validacion" @click="doLogin">
    <img class="fblogo" :src="fbIconImage" />
    <span>Facebook</span>
  </div>
</template>

<script>
import fbIcon from "@/assets/public_facebook.png";

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
  border: 4px solid $darker-color;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $light-color;
  align-self: flex-end;
  cursor: pointer;
  color: $darker-color;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
    filter: invert(1) grayscale(1);
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  #fbButton {
    align-self: flex-start;
  }
}
</style>