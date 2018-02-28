// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Mock from 'mockjs'
import Router from 'vue-router'
import routes from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(Router);
const router = new Router({
    routes
});

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
