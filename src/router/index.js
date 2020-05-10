import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import Pageone from '@/pages/page1.vue'
import Pagetwo from '@/pages/page2.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/page1',
      component: Pageone
    },
    {
      path: '/page2',
      component: Pagetwo
    }
  ]
})
