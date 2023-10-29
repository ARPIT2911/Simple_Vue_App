<!-- Cart.vue -->
<template>
    <div>
      <h2>Your Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.title }} - ${{ item.price }}
          <button @click="removefromCart(product)">Remove From Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.getters.cartItems;
      }
    },
    methods : {
        removefromCart(product) {
      this.$store.dispatch("removefromCart", product);
      
    },
    }
  };
  </script>
  