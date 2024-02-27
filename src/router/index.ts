import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Compete from '../views/Compete.vue'
import Buffs from '../views/Buffs.vue'
import BuffView from '../views/BuffView.vue'

const routesArr = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/buffs',
    name: 'buffs',
    component: Buffs
  },
  {
    path: '/compete',
    name: 'compete',
    component: Compete
  },
  {
    path: '/buff/:id',
    name: 'buffView',
    component: BuffView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesArr
})

export default router
