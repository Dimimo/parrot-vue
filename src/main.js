import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './router/routes';
import StoreData from './store/axios';
import MainApp from './App';
import {initialize} from './app-boot';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('pagination', require('laravel-vue-pagination'));

const store = new Vuex.Store(StoreData);
const axios = require('axios');

const router = new VueRouter({
    routes,
    mode: 'history'
});

initialize(axios, store, router);

new Vue({
    router,
    store,
    components: {
        MainApp
    },
    render: h => h(App)
}).$mount('#app');
