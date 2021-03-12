import Vue from 'vue'
import Vuex from 'vuex'

import galleries from './galleries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    galleries
  },
  getters: {
    galleryItem: (state) => (id) => {
      return state.galleries.find(g => g.id === id)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
