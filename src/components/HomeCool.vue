<template>
  <div class="homeCool-container" ref="homeCool" id="homeCool">
    <div class="homeCool_logo-container">
      <!-- <img :src="coorslogoImage" alt /> -->
      <div class="workhorse-content">
        <div class="headline">
          <h3>Nada más frío que esto</h3>

          <p>Cuando las montañas se pintan azul, está fría para refrescarte y disfrutarse.</p>
        </div>

        <div class="workhorse-icons">
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
            <img
                src="../assets/icon-Cold-Filtered.png"
                width="60"
                height="60"
                alt="Cold Filtered"
                title="Cold Filtered"
              />


            </div>
            <div class="workhorse-content-item-copy">
              <h4>Elaborada en frío</h4>

              <p>
                A punto de congelación para brindar 
                <br />ese sabor refrescante. 
              </p>
            </div>
          </div>
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
              
                <img
                src="../assets/icon-Cold-Lagered.png"
                width="60"
                height="60"
                alt="Cold Lagered"
                title="Cold Lagered"
              />
            </div>
            <div class="workhorse-content-item-copy">
              <h4>Filtrada en frío</h4>

              <p>Para una apariencia brillante.
</p>
            </div>
          </div>
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
              <img
                src="../assets/icon-Cold-Packaged.png"
                width="60"
                height="60"
                alt="Cold Packaged"
                title="Cold Packaged"
              />
            </div>
            <div class="workhorse-content-item-copy">
              <h4>Envasada en frío</h4>

              <p>En su punto más refrescante.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coorslogo from "@/assets/1x.jpg";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "homeCool",
  components: {
    coorslogoImage: coorslogo
  },
  computed: {
    ...mapGetters([""])
  },
  data() {
    return {
      coorslogoImage: coorslogo
    };
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/homecool.scss";
</style>
