<template>
  <div>
    <h1>Products</h1>
    <input type="text" v-model="inputs" placeholder="Search for products" />
    <button @click="searchProducts">Show Products</button>
    <ul v-if="filteredProducts.length > 0">
      <ul v-for="product in filteredProducts" :key="product.id">
        {{
          product.title
        }}
        - ${{
          product.price
        }}
        {{
          product.description
        }}
        <button @click="addToCart(product)">Add to Cart</button>
      </ul>
    </ul>
    <ul v-else>
      <ul v-for="product in products" :key="product.id">
        {{
          product.title
        }}
        - ${{
          product.price
        }}
        {{
          product.description
        }}
        <button @click="addToCart(product)">Add to Cart</button>
      </ul>
    </ul>
  </div>
</template>

<style lang="css">
.prod {
  /* display: flex; */
  justify-content: center;
  flex: 1;
}
.products {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 40px;
  column-gap: 20px;
  margin-top: 20px;
  justify-content: space-between;
  gap: 10px;
}
</style>

<!-- <script>
export default {
  data() {
    return {
      products: [],
      showingProducts: false,
      inputs: "",
      filteredProducts: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await this.$axios.get(
          "https://dummyjson.com/products"
        );
        console.log(response);
        this.products = response.data.products;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    showProducts() {
      this.showingProducts = !this.showingProducts; // Toggle the visibility
    },
    searchProducts() {
      try {
        this.filteredProducts = this.products.filter((product) =>
          product.title.toLowerCase().includes(this.inputs.toLowerCase())
        );
        // console.log(this.filteredProducts.Target);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script> -->

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      filteredProducts: [],
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    async searchProducts() {
      try {
        this.filteredProducts = this.products.filter((product) =>
          product.title.toLowerCase().includes(this.inputs.toLowerCase())
        );
        // console.log(this.filteredProducts.Target);
      } catch (error) {
        console.log(error);
      }
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
