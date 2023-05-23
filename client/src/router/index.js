import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/Search.vue'
import HomeView from '../views/Home.vue'
import FollowingView from '../views/Following.vue'
import ReposView from '../views/Repos.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Search',
      component: SearchView
    },
    {
      path: '/user/:user',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/user/:user/following',
      name: 'Following',
      component: FollowingView
    },
    {
      path: '/user/:user/repos',
      name: 'Repos',
      component: ReposView
    },
  ]
})

export default router
