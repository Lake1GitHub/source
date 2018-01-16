import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import axios from 'axios'
Vue.use(Vuex)
const state = {
    isLogin: false
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
export default store;
