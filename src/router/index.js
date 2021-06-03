import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shows from '../views/Shows.vue'
import Search from '../views/Search.vue'
import ShowDetails from '../views/ShowDetails.vue'
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/search/:enteredValue',
    name: 'Search',
    component: Search
  },
  {
    path: '/details/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: ErrorPage
  },
]

const router = new VueRouter({
  routes
})

export default router
