import './firebase'
import Vue from 'vue'
import App from './App.vue'

// Import Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import VueRouter
import VueRouter from 'vue-router'
import Routes from './Route'

// Import firebase auth
import { auth } from '@/firebase'

import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

router.beforeEach(function(to, from, next) {
  const isAuthenticated = auth.currentUser
  const isProtected = to.matched.some(route => route.meta.needAuth)

  if(!isAuthenticated && isProtected) {
    next('/login')
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  router: router
}).$mount('#app')
