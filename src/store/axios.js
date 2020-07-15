import { getLocalUser } from '../helpers/auth'
import axios from 'axios'

const URL = 'https://parrot.app/api/v1/'
const user = getLocalUser()

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        articles: [],
        sites: [],
        services: [],
        pagination: {},
    },
    getters: {
        isLoading (state) {
            return state.loading
        },
        isLoggedIn (state) {
            return state.isLoggedIn
        },
        currentUser (state) {
            return state.currentUser
        },
        authError (state) {
            return state.auth_error
        },
        pagination (state) {
            return state.pagination
        },
        articles (state) {
            return state.articles
        },
        sites (state) {
            return state.sites
        },
        services (state) {
            return state.services
        },
    },
    mutations: {
        updateLoading (state, payload) {
            state.loading = payload
        },
        login (state) {
            state.loading = true
            state.auth_error = null
        },
        loginSuccess (state, payload) {
            state.auth_error = null
            state.isLoggedIn = true
            state.loading = false
            state.currentUser = Object.assign({}, payload.user, { token: payload.access_token })

            localStorage.setItem('user', JSON.stringify(state.currentUser))
        },
        loginFailed (state, payload) {
            state.loading = false
            state.auth_error = payload.error
        },
        logout (state) {
            localStorage.removeItem('user')
            state.isLoggedIn = false
            state.currentUser = null
        },
        updatePagination (state, payload) {
            state.pagination = payload
        },
        updateArticles (state, payload) {
            state.articles = payload
        },
        updateSites (state, payload) {
            state.sites = payload
        },
        updateServices (state, payload) {
            state.services = payload
        },
    },
    actions: {
        login (context) {
            context.commit('login')
        },
        getArticles (context, page = 1) {
            let items = sessionStorage.getItem('articles-page-' + page)
            if (items !== null) {
                items = JSON.parse(items)
                context.commit('updatePagination', items.meta)
                context.commit('updateArticles', items.data)
                context.commit('updateLoading', false)
            } else {
                context.commit('updateLoading', true)
                let url = ''
                page === 1 ? url = URL + 'articles' : url = URL + 'articles?page=' + page
                axios.get(url).then((response) => {
                    context.commit('updatePagination', response.data.meta)
                    context.commit('updateArticles', response.data.data)
                    context.commit('updateLoading', false)
                    sessionStorage.setItem('articles-page-' + page, JSON.stringify(response.data))
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        getSites (context, page = 1) {
            let items = sessionStorage.getItem('sites-page-' + page)
            if (items !== null) {
                items = JSON.parse(items)
                context.commit('updatePagination', items.meta)
                context.commit('updateSites', items.data)
                context.commit('updateLoading', false)
            } else {
                context.commit('updateLoading', true)
                let url = ''
                page === 1 ? url = URL + 'sites' : url = URL + 'sites?page=' + page
                axios.get(url).then((response) => {
                    context.commit('updatePagination', response.data.meta)
                    context.commit('updateSites', response.data.data)
                    context.commit('updateLoading', false)
                    sessionStorage.setItem('sites-page-' + page, JSON.stringify(response.data))
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        getSitesCity (context, city, page = 1) {
            let items = sessionStorage.getItem('sites-city-page-' + city + '-' + page)
            if (items !== null) {
                items = JSON.parse(items)
                context.commit('updatePagination', items.meta)
                context.commit('updateSites', items.data)
                context.commit('updateLoading', false)
            } else {
                context.commit('updateLoading', true)
                context.commit('updateSites', [])
                let url = ''
                page === 1 ? url = URL + 'sites/city/' + city : url = URL + 'sites/city/' + city + '?page=' + page
                axios.get(url).then((response) => {
                    context.commit('updatePagination', response.data.meta)
                    context.commit('updateSites', response.data.data)
                    context.commit('updateLoading', false)
                    sessionStorage.setItem('sites-city-page-' + city + '-' + page, JSON.stringify(response.data))
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        getServices (context, page = 1) {
            let items = sessionStorage.getItem('services-page-' + page)
            if (items !== null) {
                items = JSON.parse(items)
                context.commit('updatePagination', items.meta)
                context.commit('updateServices', items.data)
                context.commit('updateLoading', false)
            } else {
                context.commit('updateLoading', true)
                context.commit('updateServices', [])
                let url = ''
                page === 1 ? url = URL + 'services' : url = URL + 'services?page=' + page
                axios.get(url).then((response) => {
                    context.commit('updatePagination', response.data.meta)
                    context.commit('updateServices', response.data.data)
                    context.commit('updateLoading', false)
                    sessionStorage.setItem('services-page-' + page, JSON.stringify(response.data))
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        getServicesCity (context, city, page = 1) {
            let items = sessionStorage.getItem('services-city-page-' + city + '-' + page)
            if (items !== null) {
                items = JSON.parse(items)
                context.commit('updatePagination', items.meta)
                context.commit('updateServices', items.data)
                context.commit('updateLoading', false)
            } else {
                context.commit('updateLoading', true)
                context.commit('updateServices', [])
                let url = ''
                page === 1 ? url = URL + 'services/city/' + city : url = URL + 'services/city/' + city + '?page=' + page
                axios.get(url).then((response) => {
                    context.commit('updatePagination', response.data.meta)
                    context.commit('updateServices', response.data.data)
                    context.commit('updateLoading', false)
                    sessionStorage.setItem('services-city-page-' + city + '-' + page, JSON.stringify(response.data))
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        startLoading (context) {
            context.commit('updateLoading', true)
        },
        stopLoading (context) {
            context.commit('updateLoading', false)
        },
    },
}
