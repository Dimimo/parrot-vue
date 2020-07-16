import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'
import ArticlesMain from '../components/articles/Main'
import ArticlesList from '../components/articles/List'
import ArticleNew from '../components/articles/New'
import ArticleView from '../components/articles/Article'
import SitesMain from '../components/sites/Main'
import SitesList from '../components/sites/List'
import SiteCity from '../components/sites/City'
import SiteView from '../components/sites/Site'
import ServiceMain from '../components/services/Main'
import ServiceList from '../components/services/List'
import ServiceCity from '../components/services/City'
import ServiceView from '../components/services/Service'

export const routes = [
    {
        path: '/m',
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/m/login',
        component: Login,
    },
    {
        path: '/m/articles',
        component: ArticlesMain,
        children: [
            {
                path: '/',
                component: ArticlesList,
            },
        ],
    },
    {
        path: '/m/article',
        component: ArticlesMain,
        children: [
            {
                path: 'new',
                component: ArticleNew,
            },
            {
                path: ':id',
                component: ArticleView,
            },
        ],
    },
    {
        path: '/m/sites',
        component: SitesMain,
        children: [
            {
                path: '/',
                component: SitesList,
            },
            {
                path: 'city/:id',
                component: SiteCity,
            },
        ],
    },
    {
        path: '/m/site',
        component: SitesMain,
        children: [
            {
                path: ':id',
                component: SiteView,
            },
        ],
    },
    {
        path: '/m/services',
        component: ServiceMain,
        children: [
            {
                path: '/',
                component: ServiceList,
            },
            {
                path: 'city/:id',
                component: ServiceCity,
            },
        ],
    },
    {
        path: '/m/service',
        component: ServiceMain,
        children: [
            {
                path: ':id',
                component: ServiceView,
            },
        ],
    },
]
