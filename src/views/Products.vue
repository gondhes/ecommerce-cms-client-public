<template>
  <div class="products">
    <Logout/>
    <h1>Our Products</h1>
    <br>
    <section class="product">
      <div class="container">
        <div class="row">
          <!-- Product Card -->
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Products',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    ...mapState(['products'])
  },
  components: {
    ProductCard,
    Logout
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
body {
  background-color: #e4e3c6;
}
</style>
