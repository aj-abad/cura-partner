import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DesktopSignIn from "../views/DesktopSignIn"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: '/desktop:signin',
    name: 'DesktopSignIn',
    component: DesktopSignIn,
    meta: {
      isTransparent: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

export default router
