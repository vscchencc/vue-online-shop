import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  'en-US': {
    ...enLocale
  },
  'zh-CN': {
    ...zhLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh-CN',
  messages
})

export default i18n
