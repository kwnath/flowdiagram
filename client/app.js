import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

sync(store, router)
Vue.use(ElementUI)


window.joint = require('jointjs')
window.$ = require('jquery')

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
