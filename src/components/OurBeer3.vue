<template>
  <div class="ourBeer3-container" ref="ourBeer3" id="ourBeer3">
    <div class="ourBeer3_logo-container">
    <transition name="bounce" :duration="{ enter: 500, leave: 2000000 }">
        <div v-if="getActiveSection==='ourbeer3'" class="workhorse-content">
        <div class="workhorse-icons">
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
              <img
                src="../assets/WATER.png"
                width="60"
                height="60"
                alt="Cold Filtered"
                title="Cold Filtered"
              />
            </div>
            <div class="workhorse-content-item-copy">
              <h4>Agua</h4>

              <p>
                Usamos agua pura y fresca para 
                <br />hacer la cerveza más refrescante. 
              
              </p>
            </div>
          </div>
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
              <img
                src="../assets/YEAST.png"
                width="60"
                height="60"
                alt="Cold Lagered"
                title="Cold Lagered"
              />
            </div>
            <div class="workhorse-content-item-copy">
              <h4>Levadura</h4>

              <p>
                Es lo que convierte los azúcares en alcohol 
                <br />para un sabor puro y fresco.
               
              </p>
            </div>
          </div>
       
        </div>
      </div></transition>
    </div>
  </div>
</template>

<script>

// import coorslogo from "@/assets/1x.jpg";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ourBeer3",
  components: {
    
  },
  computed: {
    ...mapGetters(["getActiveSection"])
  },
  data() {
    return {
     
    };
  },
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/ourbeer3.scss";
</style>
