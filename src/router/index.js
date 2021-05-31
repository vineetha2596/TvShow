import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieGenre from '../views/MovieGenre.vue'
import Search from '../views/Search.vue'
import TopRatedShows from '../views/TopRatedShows.vue'
import ShowDetails from '../views/ShowDetails.vue'
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/moviegenre',
    name: 'MovieGenre',
    component: MovieGenre
  },
  {
    path: '/search/:enteredValue',
    name: 'Search',
    component: Search
  },
  {
    path: '/topratedshows',
    name: 'TopRatedShows',
    component: TopRatedShows
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
