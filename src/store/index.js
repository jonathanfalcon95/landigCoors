import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { state } from './state';
import { actions } from './actions';

export default new Vuex.Store({
  state,
  actions,
  mutations: {
    logIn(state) {
      state.loggedIn = true;
    },
  },
  getters: {
    isLoggedIn: state => state.loggedIn
  }
});