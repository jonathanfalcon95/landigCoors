<template>
  <div class="ourBeer2-container" ref="ourBeer2" id="ourBeer2">
    <div class="ourBeer2_logo-container">
      <!-- <img :src="coorslogoImage" alt /> -->
      <div class="workhorse-content">
      

        <div class="workhorse-icons">
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
            <img
                src="../assets/BARLEY_icon.png"
                width="60"
                height="60"
                alt="Cold Filtered"
                title="Cold Filtered"
              />


            </div>
            <div class="workhorse-content-item-copy">
              <h4>Cebada Malta</h4>

              <p>
                Cebada de la mejor calidad es lo 
                <br />que hace a nuestra cerveza tener un  
                 <br />brillante y dorado color.  
              </p>
            </div>
          </div>
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
              
                <img
                src="../assets/CORN.png"
                width="60"
                height="60"
                alt="Cold Lagered"
                title="Cold Lagered"
              />
            </div>
            <div class="workhorse-content-item-copy">
              <h4>Jarabe de Maíz </h4>

              <p>Una fuente de azúcar que se convierte 
                <br>en alcohol en el proceso de fermentación. 
                <br>Se utiliza para obtener un mejor cuerpo
                <br>y sabor, haciendo una cerveza mucho 
                <br>más refrescante. 
</p>
            </div>
          </div>
          <div class="workhorse-content-icon">
            <div class="workhorse-icon">
              <img
                src="../assets/HOPS.png"
                width="60"
                height="60"
                alt="Cold Packaged"
                title="Cold Packaged"
              />
            </div>
            <div class="workhorse-content-item-copy">
              <h4>Extracto de Lúpulo</h4>

              <p>Utilizamos extractos de lúpulos de 
                <br>una variedad única para lograr la 
                <br>consistencia en el sabor y un aroma 
                <br>balanceado.
              </p>
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
  name: "ourBeer2",
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
@import "~@/styles/ourbeer2.scss";
</style>
