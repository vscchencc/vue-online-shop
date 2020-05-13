import Vue from 'vue'
import Vuex from 'vuex'

import language from './modules/language'
import calculate from './modules/calculate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    language,
    calculate
  }
})

export default store
