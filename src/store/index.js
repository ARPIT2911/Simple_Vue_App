import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [], // This is your global state
    cart: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removefromCart(state, product) {
      const pid = product.id;
      const index = state.cart.findIndex(
        (item) => item.id === pid
    );
    if(index === -1) return;
        state.cart = state.cart.filter(
            (item) => item.id !== pid
        );
    },
      
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch("https://dummyjson.com/products");
      const products = await response.json();
      commit("setProducts", products.products);
    },
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removefromCart({ commit }, product) {
      commit("removefromCart", product);
    },
  },
  getters: {
    cartItems: (state) => state.cart,
  },
});

export default store;
