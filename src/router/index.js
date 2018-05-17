import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
