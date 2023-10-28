import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [], // This is your global state
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch("https://dummyjson.com/products");
      const products = await response.json();
      commit('setProducts', products.products);
    },
  },
  getters: {
  },
});

export default store;