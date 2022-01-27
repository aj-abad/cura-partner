import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DesktopSignIn from "../views/Desktop/SignIn"
import isElectron from "is-electron";
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
      isTransparent: true,
      isDesktop: true
    }
  }
]
//.filter(route => !isElectron() ? !route.meta?.isDesktop : true)


const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  isElectron: isElectron()
})

export default router
