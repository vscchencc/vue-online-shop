import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import Pageone from '@/pages/page1.vue'
import Pagetwo from '@/pages/page2.vue'
import Initial from '../pages/initial.vue'
import Register from '../pages/register.vue'
import Discover from '../pages/discover.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/initial',
      component: Initial
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/page1',
      component: Pageone
    },
    {
      path: '/page2',
      component: Pagetwo
    },
    {
      path: '/discover',
      component: Discover
    }
  ]
})
