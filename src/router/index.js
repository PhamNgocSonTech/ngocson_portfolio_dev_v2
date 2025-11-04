import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', name:'home', component: () => import('@/views/HomeView.vue')},
  {path: '/projects', name:'projects', component: () => import('@/views/ProjectView.vue')},
  {
    path: '/hubs',
    name: 'hub',
    children: [
      {path: 'blogs', name: 'blogs', component: () => import('@/views/BlogList.vue')},
      {path: 'blogs/:id', name: 'blog-detail', component:  () => import('@/views/BlogDetail.vue'), props: true},
    ]
  },

//   Route catch all
  {path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFound.vue')},
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
