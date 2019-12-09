<template>
  <div id="age-gate-container">
    <button @click="setAgeGateTokenAction">Login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";


export default {
  name: "AgeGate",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      ''
    ])
  },
  methods: {
    ...mapActions({
      setAgeGateTokenAction: 'setAgeGateToken'
    }),
  },
  mounted() {
    this.$nextTick(() => {
    });
  }
};
</script>

<style lang="scss">
@import "~@/styles/agegate.scss";
</style>
