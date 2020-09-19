<template>
  <div class="">
    <NavBar/>
    <div class="container  add-new-box">
      <div class="col-sm py-4 border border-secondary">
        <h3>Add new product</h3>
        <form @submit="addNewProduct">
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
        <button class="btn btn-sm btn-primary">Add new product</button>
        </form>
      </div>
      <div class="col-sm border border-secondary product-list-box">
        <router-link class="btn btn-lg btn-outline-warning" to="/category/manual-brewers">MANUAL-BREWERS</router-link>
        <router-link class="btn btn-lg btn-outline-warning" to="/category/coffee-machines">COFFEE-MACHINES</router-link>
        <router-link class="btn btn-lg btn-outline-warning" to="/category/coffees">COFFEE</router-link>
      </div>
      <div class="col-sm border border-secondary product-list-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import kobajaApi from '../api/kobajaApi'

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
    addNewProduct () {
      kobajaApi({
        url: '/product',
        method: 'POST',
        data: {
          name: this.product.name,
          category: this.product.category,
          price: this.product.price,
          stock: this.product.stock,
          imgUrl: this.product.imgUrl
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          this.refreshPage()
        })
        .catch(err => {
          console.log(err)
        })
    },
    refreshPage () {
      this.$router.push({ path: '/category/manual-brewers' })
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
    this.refreshPage()
  }
}
</script>

<style>

</style>
