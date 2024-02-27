import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Compete from '../views/Compete.vue'
import Buffs from '../views/Buffs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
})

export default router
