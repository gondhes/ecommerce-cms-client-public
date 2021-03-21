<template>
  <div class="products">
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
import axios from '@/axios/axios.js'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  methods: {
    fetchProducts () {
      axios.get('/products')
        .then(({ data }) => {
          this.products = data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  components: {
    ProductCard
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
