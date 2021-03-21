<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img" :src="product.img_url">
      <div class="card-body">
        <h5 class="card-name">{{ product.name }}</h5>
        <h5 class="card-price">Rp {{ product.price }}</h5>
        <h5 class="card-stock">stock: {{ product.stock }}</h5>
        <a href="#" class="btn btn-edit">edit</a>
        <a href="#" class="btn btn-delete">delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>
  .card {
    border-radius: 20px;
    border: 2px solid #73AD21;
    padding: 15px;
  }
</style>
