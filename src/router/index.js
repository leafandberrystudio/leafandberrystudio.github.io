import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/batik',
    name: 'Batik',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Batik.vue')
  },
  {
    path: '/cyanotypes',
    name: 'Cyanotypes',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Cyanotypes.vue')
  },
  {
    path: '/devore-velvet',
    name: 'Devore Velvet',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Devorevelvet.vue')
  },
  {
    path: '/eco-prints',
    name: 'Eco Prints',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Ecoprints.vue')
  },
  {
    path: '/jewelry',
    name: 'Jewelry',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Jewelry.vue')
  },
  {
    path: '/knitting',
    name: 'Knitting',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Knitting.vue')
  },
  {
    path: '/medium-prints',
    name: 'Mediium Prints',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Mediumprints.vue')
  },
  {
    path: '/shibori',
    name: 'Shibori',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Shibori.vue')
  },
  {
    path: '/sun-prints',
    name: 'Sun Prints',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/gallery/Sunprints.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
