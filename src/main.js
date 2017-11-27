// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(Router);
Vue.use(VueAwesomeSwiper);
const router = new Router({
    routes
});

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {
      App,
   }
}).$mount('#app');