import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogList from '@/components/blogs/BlogList.vue'
import BlogDetail from '@/components/blogs/BlogDetail.vue'

const routes = [
  {path: '/', name:'home', component: HomeView},
  {path: '/projects', name:'projects', component: ProjectView},
  {
    path: '/hubs',
    name: 'hub',
    children: [
      {path: 'blog', name: 'blog', component: BlogList},
      {path: 'blog/:id', name: 'blog-details', component: BlogDetail},
    ]
  }
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
