<template>
  <div id="app">
    <h1>miller high life</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions({
    })
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.actualScrollOffset());
      setTimeout(() => {
      }, 200);
    });
  }
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
