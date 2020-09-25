<template>
  <div class="product-list-box">
    <div v-for="product in products" :key="product.id" class="card" style="width: 18rem;">
      <img :src="product.imgUrl" class="card-img-top" alt="..." style="width:250px">
      <div class="card-body">
        <h5 class="card-title" >{{product.name}}</h5>
        <p class="card-text">Rp.{{product.price}}</p>
        <router-link :to="`product/${product.id}`" class="btn btn-primary">Update Product</router-link>
        <button @click="deleteProduct(product.id)" class="btn btn-sm btn-outline-danger">Delete Products</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Products',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    deleteProduct (id) {
      const answer = window.confirm('Do you really want to delete this product?')
      if (answer) {
        this.$store.dispatch('deleteProduct', id)
      }
    }
  }
}
</script>

<style>

</style>
