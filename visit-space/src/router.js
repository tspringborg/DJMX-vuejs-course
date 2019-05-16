import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info'
import Book from './views/Book'

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
      path: '/book-tour',
      name: 'book',
      component: Book,
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: Info,
    },
    {
      path: '/data',
      name: 'Data',
      component: Info,
    },
    {
      path: '/press',
      name: 'Press',
      component: Info,
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Info,
    },
    {
      path: '/about',
      name: 'About',
      component: Info,
    }
  ]
})
