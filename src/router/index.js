import Vue from 'vue'
import Router from 'vue-router'
import Details from 'pages/details/index.vue'
import Order from 'pages/order/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => { require(['pages/home/index'], resolve) }
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('pages/city/index')
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
