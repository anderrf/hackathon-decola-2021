import Vue from 'vue'
import VueRouter from 'vue-router'
import menuAnimes from '../views/menuAnimes'
import menuJogos from '../views/menuJogos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/animes'
  },
  {
    path: '/animes',
    component: menuAnimes
  },
  {
    path: '/games',
    component: menuJogos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
