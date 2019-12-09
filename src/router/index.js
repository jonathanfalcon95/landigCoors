import Vue from 'vue'

import Router from 'vue-router'
import Home from '@/containers/Home'
import Test from '@/containers/Test'

import responsive from 'vue-responsive'
import VueObserveVisibility from 'vue-observe-visibility'
import checkView from 'vue-check-view'

Vue.use(Router)
Vue.use(responsive)
Vue.use(VueObserveVisibility)
Vue.use(checkView)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})