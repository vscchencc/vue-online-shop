import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import store from './store'

<<<<<<< HEAD
import i18n from './lang'

import 'normalize.css'
import 'font-awesome/css/font-awesome.css'
import './style/common.scss'

=======
import 'normalize.css'
import './style/common.scss'

<<<<<<< HEAD
=======

>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
import { server } from './axios/api'

// 引入mockjs
require('./mock/index')

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
// 定义全局变量
Vue.prototype.$server = server

// eslint-disable-next-line no-new
<<<<<<< HEAD
=======
=======
//定义全局变量
Vue.prototype.$server = server;

>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
new Vue({
  el: '#app',
  router,
  store,
<<<<<<< HEAD
  i18n,
  components: { App },
  template: '<App/>'
  // render: (h) => h(App)
})
=======
  components: { App },
<<<<<<< HEAD
  template: '<App/>'
  // render: (h) => h(App)
})
=======
  template: '<App/>' 
  // render: (h) => h(App)
})
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
