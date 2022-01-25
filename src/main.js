import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "./assets/main.css"
import "./assets/overrides.css"

Vue.config.productionTip = false
Vue.prototype.$ipc = window.ipcRenderer
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
