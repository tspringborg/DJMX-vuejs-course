import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/book',
      name: 'book',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Book.vue')
    },
    {
      path: '/slavic-squatting',
      name: 'Getting your squat on',
      component: () => import('./views/SlavicSquatting.vue')
    },
    {
      path: '/info',
      name: 'Getting your squat on',
      component: () => import('./views/Info.vue')
    }
  ]
})
