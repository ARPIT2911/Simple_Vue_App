

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/products">Products</router-link>
  <router-link to="/about">About</router-link>
  <div class="home">
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "home",
  components: {
    ProductList,
  },
};
</script>
