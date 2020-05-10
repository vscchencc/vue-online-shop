import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import store from './store'

import 'normalize.css'
import './style/common.scss'


import { server } from './axios/api'

// 引入mockjs
require('./mock/index')

//定义全局变量
Vue.prototype.$server = server;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>' 
  // render: (h) => h(App)
})