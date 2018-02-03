// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from 'store/'
import router from './router'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'style/base/reset.css'
import 'style/base/border.css'
import 'swiper/dist/css/swiper.css'
import 'style/iconfont/iconfont.css'
import 'style/iconfont1/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img.mp.sohu.com/upload/20170810/1c70f023f5c64ec5b3b18d380235aa6d.png',
  loading: 'http://img.mp.sohu.com/upload/20170810/1c70f023f5c64ec5b3b18d380235aa6d.png',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
