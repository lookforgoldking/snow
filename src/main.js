import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/common.css'
import './assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
