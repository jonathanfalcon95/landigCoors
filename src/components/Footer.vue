<template>
  <div class="footer-container">
    <p>privacy policy</p>
    <p>términos y condiciones</p>
    <p>subscribe</p>
    <p>©2019 MILLER BREWING CO., MILWAUKEE WI</p>
    <p>icon</p>
  </div>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.footer-container {
  background: $dark-color;
}
</style>
