import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Compete from '../views/Compete.vue'
import Careers from '../views/Careers.vue'
import CareerView from '../views/CareerView.vue'
import Buffs from '../views/Buffs.vue'
import BuffView from '../views/BuffView.vue'
import NotFound from '../views/NotFound.vue'
import BuffsMarketplace from '../views/BuffsMarketplace.vue'
import Stories from '../views/Stories.vue'
import StoryView from '../views/StoryView.vue'
import Alliance from '../views/Alliance.vue'
import TermsAndConditions from '../views/TermsAndConditions.vue'
import UnderConstruction from '../views/UnderConstruction.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routesArr = [
  // {
  //   path: '/under-construction',
  //   name: 'under-construction',
  //   component: UnderConstruction
  // },
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
    path: '/careers',
    name: 'careers',
    component: Careers
  },
  {
    path: '/careers/:id',
    name: 'careerView',
    component: CareerView
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
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
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
