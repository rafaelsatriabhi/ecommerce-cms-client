<template>
  <div class="">
    <NavBar/>
    <div class="container  update-box">
      <div class="col-sm border border-secondary product-list-box pt-4">
      <img src="https://s-ecom.ottenstatic.com/original/564999fa9b7d8.jpg" class="card-img-top" alt="..." style="height:auto">
      <div class="card-body">
        <h5 class="card-title" >Something here</h5>
        <p class="card-text">Rp. Price here</p>
        <button @click='editProduct(product.id)' class="btn btn-sm btn-outline-danger">Delete products</button>
      </div>
    </div>
      <div class="col-sm py-4 border border-secondary">
        <h3>Update product</h3>
        <form @submit.prevent="editProduct">
          <label for="product-name-input">Name</label>
          <input v-model="product.name" id="product-name-input" class="form-control" type="text" placeholder="Latina machine grinder">
          <label for="category">Choose Category:</label><br>
          <select v-model="product.category" name="" id="category">
            <option value="manual-brewers">Manual Brewers</option>
            <option value="coffee-machines">Coffee Machines</option>
            <option value="coffees">Coffees</option>
          </select><br>
          <label for="product-price-input">Price</label>
          <input v-model="product.price" id="product-price-input" class="form-control" type="number" placeholder="1200000">
          <label for="product-stock-input">Stock Amount</label>
          <input v-model="product.stock" id="product-stock-input" class="form-control" type="number" placeholder="50"><br>
           <label for="product-url-input">Image Url</label>
          <input v-model="product.imgUrl" id="product-url-input" class="form-control" type="text" placeholder="http://<img-url>"><br>
        <button class="btn btn-sm btn-primary">Update</button>
        </form>
      </div>
      </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
// import kobajaApi from '../api/kobajaApi'

export default {
  name: 'CategoryPage',
  data () {
    return {
      product: {
        name: '',
        category: '',
        price: 0,
        stock: 0,
        imgUrl: ''
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    editProduct () {
      console.log(this.$routes.params.id)
      // kobajaApi({
      //   url: `/product/${id}`,
      //   method: 'PUT',
      //   data: {
      //     name: this.product.name,
      //     category: this.product.category,
      //     price: this.product.price,
      //     stock: this.product.stock,
      //     imgUrl: this.product.imgUrl
      //   },
      //   headers: {
      //     access_token: localStorage.getItem('access_token')
      //   }
      // })
      //   .then(data => {
      //     this.refreshPage()
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    },
    refreshPage () {
      // this.$router.push({ path: '/' })
    }
  },
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  created () {
    // this.refreshPage()
  }
}
</script>

<style>
.update-box{
  display: flex;
  flex-direction: row;
}
</style>
