import Vue from 'vue'
import Vuex from 'vuex'
import beers from './pages/Products/reducer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    beers,
  },
  strict: process.env.NODE_ENV !== 'production'
})
