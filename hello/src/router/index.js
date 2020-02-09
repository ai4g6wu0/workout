import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[{
      path:'t1',
      name:'t1',
      component:()=>import('@/components/t1a.vue')
    },{
      path:'t2',
      name:'t2',
      component:()=>import('@/components/t2a.vue')

    }]
  },
  {
    path:'/test',
    name:'test',
    component:()=>import('@/components/t1.vue'),
    children:[{
    path:'appendPlan',
    name:'appendPlan',
    component:()=>import('@/components/appendPlan.vue')
    },
    {
      path:'plan/:planName',
      name:'plan',
      component:()=>import('@/components/plan.vue')
    },
  ]
   
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
