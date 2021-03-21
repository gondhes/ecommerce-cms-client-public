<template>
  <div class="products">
    <h1>Our Products</h1>
    <br>
    <ProductCard/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'Products',
  components: {
    ProductCard
  }
}
</script>

<style>
body {
  background-color: #e4e3c6;
}
</style>
