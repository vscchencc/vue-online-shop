import Vue from 'vue'
import Vuex from 'vuex'

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
    add(state, n) {
      state.count = state.count + n
    },
    subtract(state) {
      state.count = state.count - 1
    }
  },
  // 通过actions提交mutations达到修改state中的值
  actions: {
    adds(state, n) {
      state.commit("add", n)
    },
    subtracts(state, n) {
      state.commit("subtract", n)
    }
  }
})

export default store