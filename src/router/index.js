import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogList from '@/views/BlogList.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {path: '/', name:'home', component: HomeView},
  {path: '/projects', name:'projects', component: ProjectView},
  {
    path: '/hubs',
    name: 'hub',
    children: [
      {path: 'blogs', name: 'blogs', component: BlogList},
      {path: 'blogs/:id', name: 'blog-detail', component: BlogDetail, props: true},
    ]
  },

//   Route catch all
  {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound}
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
