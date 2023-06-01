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
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: () => import( /* webpackChunkName: "nestedcomponent" */ '../views/NestedComponent.vue')
  },
  {
    path: '/parent',
    name: 'ParentComponent',
    component: () => import( /* webpackChunkName: "parent" */ '../views/ParentComponent.vue')
  },
  {
    path: '/parent2',
    name: 'ParentComponent2',
    component: () => import( /* webpackChunkName: "parent2" */ '../views/ParentComponent2.vue')
  },
  {
    path: '/parent3',
    name: 'ParentComponent3',
    component: () => import( /* webpackChunkName: "parent3" */ '../views/ParentComponent3.vue')
  },
  {
    path: '/parent4',
    name: 'ParentComponent4',
    component: () => import( /* webpackChunkName: "parent4" */ '../views/ParentComponent4.vue')
  },
  {
    path: '/parent5',
    name: 'ParentComponent5',
    component: () => import( /* webpackChunkName: "parent5" */ '../views/ParentComponent5.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import( /* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/provide',
    name: 'ProvideInject',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/ProvideInject.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
