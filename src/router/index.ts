import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Compete from '../views/Compete.vue'
import Buffs from '../views/Buffs.vue'
import BuffView from '../views/BuffView.vue'
import NotFound from '../views/NotFound.vue'
import BuffsMarketplace from '../views/BuffsMarketplace.vue'
import Stories from '../views/Stories.vue'
import StoryView from '../views/StoryView.vue'
import Alliance from '../views/Alliance.vue'
import TermsAndConditions from '../views/TermsAndConditions.vue'

const routesArr = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/alliance',
    name: 'alliance',
    component: Alliance
  },
  {
    path: '/buffs',
    name: 'buffs',
    component: Buffs
  },
  {
    path: '/buffs-marketplace',
    name: 'buffs-marketplace',
    component: BuffsMarketplace
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  },
  {
    path: '/compete',
    name: 'compete',
    component: Compete
  },
  {
    path: '/buffs/:id',
    name: 'buffView',
    component: BuffView
  },
  {
    path: '/stories/:id',
    name: 'storyView',
    component: StoryView
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: TermsAndConditions
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesArr
})

router.beforeEach((to, from, next) => {
  // Scroll to the top before each route navigation
  window.scrollTo(0, 0);
  next();
});

export default router
