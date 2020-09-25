import Vue from 'vue'
import Vuex from 'vuex'
import kobajaApi from '../api/kobajaApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: ''
    },
    products: [],
    notification: {
      show: false,
      message: ''
    }
  },
  mutations: {
    SET_DATA_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_USER_NAME (state, payload) {
      state.user.name = payload
    },
    SET_NOTIFICATION (state, payload) {
      state.notification.show = payload.show
      state.notification.message = payload.message
    }
  },
  actions: {
    fetchUserName (context, payload) {
      context.commit('SET_USER_NAME', payload)
    },
    fetchDataProducts (context) {
      kobajaApi({
        url: '/product',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_DATA_PRODUCTS', data.products)
        })
        .catch(err => {
          window.confirm(err)
        })
    },
    deleteProduct (context, payload) {
      kobajaApi({
        url: `/product/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetchDataProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addNewProduct (context, payload) {
      console.log(payload)
      kobajaApi({
        url: '/product',
        method: 'POST',
        data: {
          name: payload.name,
          category: payload.category,
          price: payload.price,
          stock: payload.stock,
          imgUrl: payload.imgUrl
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchDataProducts')
          context.commit('SET_NOTIFICATION', { message: `Success Adding New Product: ${data.name}`, show: true })
          setTimeout(() => {
            context.commit('SET_NOTIFICATION', { message: '', show: false })
          }, 3000)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
