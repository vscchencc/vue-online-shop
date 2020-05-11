import Vue from 'vue'
<<<<<<< HEAD
import VueRouter from 'vue-router'
=======
<<<<<<< HEAD
import VueRouter from 'vue-router'
=======
import VueRouter from "vue-router";
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'

import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import Pageone from '@/pages/page1.vue'
import Pagetwo from '@/pages/page2.vue'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import Initial from '../pages/initial.vue'
import Register from '../pages/register.vue'
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
    {
      path: '/',
      component: Home
    },
    {
      path: '/',
      component: Login
    },
<<<<<<< HEAD
=======
=======
	{
		path:'/',
		redirect:'/initial'
	},
	{
		path:'/initial',
		component:Initial
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
		path:'/register',
		component:Register
	},
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
    {
      path: '/page1',
      component: Pageone
    },
    {
      path: '/page2',
      component: Pagetwo
<<<<<<< HEAD
    }
  ]
})
=======
<<<<<<< HEAD
    }
  ]
})
=======
    },
  ]
})
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
