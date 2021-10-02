import Vue from 'vue'
import VueRouter from 'vue-router'
import menuAnimes from '../views/menuAnimes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/animes'
  },
  {
    path: '/animes',
    component: menuAnimes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
