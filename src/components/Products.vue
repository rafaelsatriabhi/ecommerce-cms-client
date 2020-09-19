<template>
  <div class="product-list-box">
    <div v-for="product in products" :key="product.id" class="card" style="width: 18rem;">
      <img :src="product.imgUrl" class="card-img-top" alt="..." style="width:250px">
      <div class="card-body">
        <h5 class="card-title" >{{product.name}}</h5>
        <p class="card-text">Rp.{{product.price}}</p>
        <a href="#" class="btn btn-primary">Update</a>
        <button class="btn btn-sm btn-outline-danger">Delete Products</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: ['products']
}
</script>

<style>

</style>
