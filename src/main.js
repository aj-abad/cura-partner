import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "./localstorage"
import "./assets/main.css"
import "./assets/overrides.css"
import "./sass/opacity.sass"
import "./plugins/axios"

Vue.config.productionTip = false
Vue.prototype.$ipc = window.ipcRenderer
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
