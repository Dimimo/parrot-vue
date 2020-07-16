import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes } from './router/routes'
import StoreData from './store/axios'
import App from './App'
import { initialize } from './app-boot'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.component('pagination', require('laravel-vue-pagination'))

const store = new Vuex.Store(StoreData)
const axios = require('axios').default
axios.defaults.baseURL = 'https://parrot.app/api/v1/'

const router = new VueRouter({
    routes,
    mode: 'history',
})

initialize(axios, store, router)

new Vue({
    router,
    store,

    components: {
        App,
    },

    vuetify,
    render: h => h(App),
}).$mount('#app')
