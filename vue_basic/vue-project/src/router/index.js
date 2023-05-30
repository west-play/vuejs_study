import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingInputText.vue')
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: () => import( /* webpackChunkName: "databindinglist2" */ '../views/DataBindingList2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
