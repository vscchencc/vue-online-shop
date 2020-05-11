import Vue from 'vue'
import Vuex from 'vuex'

<<<<<<< HEAD
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
=======
Vue.use(Vuex)

const store = new Vuex.Store({
  // state 用来存放数据
  state: {
    count: 1
  },
  // 计算属性
  getters: {
    changeCount (state) {
      return state.count + 1
    }
  },
  // 存放方法
  mutations: {
<<<<<<< HEAD
    add (state, n) {
      state.count = state.count + n
    },
    subtract (state) {
=======
    add(state, n) {
      state.count = state.count + n
    },
    subtract(state) {
>>>>>>> 06c207c... 'twice'
      state.count = state.count - 1
    }
  },
  // 通过actions提交mutations达到修改state中的值
  actions: {
<<<<<<< HEAD
    adds (state, n) {
      state.commit('add', n)
    },
    subtracts (state, n) {
      state.commit('subtract', n)
=======
    adds(state, n) {
      state.commit("add", n)
    },
    subtracts(state, n) {
      state.commit("subtract", n)
>>>>>>> 06c207c... 'twice'
    }
  }
})

<<<<<<< HEAD
export default store
=======
export default store
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
