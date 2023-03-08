import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/aleo',
    name: 'aleo',
    component: () => import('../views/aleo.vue'),
  },
  {
    path: '/sinso',
    name: 'sinso',
    component: () => import('../views/sinso.vue'),
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('../views/contactUs.vue'),
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../views/aboutUs.vue'),
  },
  {
    path: '/protocol',
    name: 'protocol',
    component: () => import('../views/protocol.vue'),
  },
]

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  // scrollBehavior() {
  //   return { x: 0, y: 0 }
  // },
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router