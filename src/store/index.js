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
    setAgeGateToken(state) {
      state.ageGateToken = true;
    },
    setActiveSection(state, section) {
      state.activeSection = section;
    },
    setScrollMotion(state, motion) {
      state.scrollMotion = motion;
      if(motion === 'upStart' || motion === 'downEnd') {
        state.edgeScrolling = 1;
      }
    },
    setEdgeScrolling(state, edgeScrollingValue) {
      state.edgeScrolling = state.edgeScrolling + edgeScrollingValue;
    },
    resetEdgeScrolling(state, value) {
      state.edgeScrolling = value;
    }
  },
  getters: {
    isLoggedIn: state => state.loggedIn,
    getAgeGateToken: state => state.ageGateToken,
    getActiveSection: state => state.activeSection,
    getTriggerSpring: state => state.triggerSpring,
    getScrollMotion: state => state.scrollMotion,
    getEdgeScrolling: state => state.edgeScrolling
  }
});