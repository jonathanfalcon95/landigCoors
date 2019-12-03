import Vue from 'vue';
import { TweenMax, Sine } from 'gsap'
// import Velocity from 'velocity';

// export default Vue.component('MainTransition', {
export default  new Vue('MainTransition', {
    el: '#dynamic-fade-demo',
    name: 'main-transition',
    data: {
      show: true,
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1500,
      stop: true
    },
    mounted: function () {
      this.show = false
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
      },
      enter: function (el, done) {
        var vm = this
        Velocity(el,
          { opacity: 1 },
          {
            duration: this.fadeInDuration,
            complete: function () {
              done()
              if (!vm.stop) vm.show = false
            }
          }
        )
      },
      leave: function (el, done) {
        var vm = this
        Velocity(el,
          { opacity: 0 },
          {
            duration: this.fadeOutDuration,
            complete: function () {
              done()
              vm.show = true
            }
          }
        )
      }
    }
  })