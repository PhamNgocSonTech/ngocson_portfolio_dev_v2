import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'

const routes = [
  {path: '/', name:'home', component: HomeView},
  {path: '/projects', name:'projects', component: ProjectView}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {top: 0}
  }
})

export default router
