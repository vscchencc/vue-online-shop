import Cookies from 'js-cookie'

const app = {
  state: {
    language: Cookies.get('language') || 'en-US' // 项目初始化时，默认为英文
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  getters: {
    language: state => state.language
  },
  actions: {
    setLanguage ({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
}

export default app
