<template>
   <div class="product-list-box">
    <div v-for="product in products" :key="product.id" class="card" style="width: 250px">
      <img :src="product.imgUrl" class="card-img-top" alt="..." style="width:250px">
      <div class="card-body">
        <div class="card-items-top" >
        <h5 class="card-title" >{{product.name}}</h5>
        </div >
        <div class="card-items-bot">
          <p class="card-text">Rp.{{product.price}}</p>
          <router-link style="width:100%" :to="`product/${product.id}`" class="btn btn-primary">Update Product</router-link>
          <button style="width:100%" @click="deleteProduct(product.id)" class="btn btn-sm btn-outline-danger">Delete Products</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CoffeeMachines',
  computed: {
    products () {
      return this.$store.state.products
        .filter(elem => elem.category === 'coffee-machines')
    }
  },
  methods: {
    deleteProduct (id) {
      const answer = window.confirm('Do you really want to delete this product?')
      if (answer) {
        this.$store.dispatch('deleteProduct', id)
      }
    }
  },
  created () {
    this.$store.dispatch('fetchDataProducts')
  }
}
</script>

<style>
  .product-list-box{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
