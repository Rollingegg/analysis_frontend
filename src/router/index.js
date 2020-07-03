import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/about',
        children: [
            {
                path: '/about',
                name: 'about',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: '/group/take_out',
                name: 'take_outIncome',
                component: () => import('@/views/group/TakeOutIncomeView')
            },
            {
                path: '/group/shop',
                name: 'shopIncome',
                component: () => import('@/views/group/ShopIncomeView')
            },
            {
                path: '/user',
                name: 'user',
                redirect: '/about'
            },
            {
                path: '/product',
                name: 'product',
                component: () => import('@/views/product/ProductRankView')
            },
            {
                path: '/take_out/supplier',
                name: 'supplier',
                component: () => import('@/views/take_out/SupplierAnalysisView')
            },
            {
                path: '/take_out/rank',
                name: 'supplierRank',
                component: () => import('@/views/take_out/SupplierRankView')
            },
            {
                path: '/flow/active-user',
                name: 'activeUser',
                component: () => import('@/views/flow/DailyActiveUserView')
            },
            {
                path: '/flow/province',
                name: 'province',
                component: () => import('@/views/flow/DailyProvinceView')
            }
        ]
    }
]

const router = new VueRouter({
    scrollBehavior: () => ({
        x: 0,
        y: 0
    }),
    routes
})

export default router
