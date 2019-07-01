import Vue from 'vue';
import Vuex from './svuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, n = 1) {
      state.count += n;
    }
  },
  getters: {
    score(state) {
      return `total: ${state.count}`;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      commit('increment', 2);
    }
  }
});