import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Rafael'
    },
    products: [],
    manualBrewers: [],
    coffeeMachines: [],
    coffees: []
  },
  mutations: {
    FETCH_DATA_PRODUCTS (state, payload) {
      state.products = payload
    },
    FETCH_DATA_MANUAL_BREWERS (state, payload) {
      state.manualBrewers = payload
    },
    FETCH_DATA_COFFEE_MACHINES (state, payload) {
      state.coffeeMachines = payload
    },
    FETCH_DATA_COFFEES (state, payload) {
      state.coffees = payload
    }
  },
  actions: {
    fetchDataProducts (context, payload) {
      context.commit('FETCH_DATA_PRODUCTS', payload)
    },
    fetchDataManualBrewers (context, payload) {
      context.commit('FETCH_DATA_MANUAL_BREWERS', payload)
    },
    fetchDataCoffeeMachines (context, payload) {
      context.commit('FETCH_DATA_COFFEE_MACHINES', payload)
    },
    fetchDataCoffees (context, payload) {
      context.commit('FETCH_DATA_COFFEES', payload)
    }
  },
  modules: {
  }
})
