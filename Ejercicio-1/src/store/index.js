import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0, // Estado inicial
  },
  mutations: {
    increment(state) {
      state.counter++; // Sube el contador
    },
    decrement(state) {
      state.counter--; // Baja el contador
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
  },
  getters: {
    getCounter: (state) => state.counter, // Obtiene el valor del contador
  },
});
