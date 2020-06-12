import Vue from 'vue'
import App from './App.vue'

// Importation de Bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
