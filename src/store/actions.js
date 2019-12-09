export const actions = {
  logIn(context) {
    context.commit('logIn');
  },
  setAgeGateToken(context) {
    context.commit('setAgeGateToken');
  },
  setActiveSection(context, section) {
    context.commit('setActiveSection', section);
  },
  setScrollMotion(context, motion) {
    context.commit('setScrollMotion', motion);
  },
  setEdgeScrolling(context, edgeScrollingValue) {
    context.commit('setEdgeScrolling', edgeScrollingValue);
  },
  resetEdgeScrolling(context) {
    context.commit('resetEdgeScrolling', 0);
  }
}
