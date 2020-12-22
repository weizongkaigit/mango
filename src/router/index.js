import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resovle) => require(['../views/Home/home.vue'], resovle)
    },
    {
      path: '/home',
      name: 'home',
      component: (resovle) => require(['../views/Home/home.vue'], resovle)
    },
    {
      path: '/product',
      name: 'product',
      component: (resovle) => require(['../views/Product/product.vue'], resovle)
    },
    {
      path: '/case',
      name: 'case',
      component: (resovle) => require(['../views/Case/case.vue'], resovle)
    },
    {
      path: '/serve',
      name: 'serve',
      component: (resovle) => require(['../views/Serve/serve.vue'], resovle)
    },
    {
      path: '/about',
      name: 'about',
      component: (resovle) => require(['../views/About/about.vue'], resovle)
    }
  ]
})
