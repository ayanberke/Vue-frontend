import Vue from 'vue'
import App from './App'

import router from './router'
import jquery from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css"


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
