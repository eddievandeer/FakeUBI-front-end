import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import $ from 'jquery'
import 'bootstrap'
import axios from 'axios'
// 根路径
axios.defaults.baseURL = process.env.VUE_APP_API
axios.defaults.withCredentials = true

// 挂载axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')