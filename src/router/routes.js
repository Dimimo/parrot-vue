import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import ArticlesMain from '../views/articles/ArticlesMain'
import ArticlesList from '../views/articles/ArticlesList'
import ArticleNew from '../views/articles/New'
import ArticleView from '../views/articles/ArticleView'
import SitesMain from '../views/sites/SitesMain'
import SitesList from '../views/sites/SitesList'
import SitesCity from '../views/sites/SitesCity'
import SiteView from '../views/sites/SiteView'
import ServiceMain from '../views/services/ServicesMain'
import ServicesList from '../views/services/ServicesList'
import ServicesCity from '../views/services/ServicesCity'
import ServiceView from '../views/services/ServiceView'

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
                component: SitesCity,
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
                component: ServicesList,
            },
            {
                path: 'city/:id',
                component: ServicesCity,
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
