// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mock from 'mockjs'
import Router from 'vue-router'
<<<<<<< HEAD
import routes from './router/index.js'
=======
import routes from './router'
import Mock from 'mockjs'
>>>>>>> 4fc865f3ae4444d643b182af74e51118fb670119
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(Router);
const router = new Router({
    routes
});
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
