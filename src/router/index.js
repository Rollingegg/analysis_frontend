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
                path: '/user',
                name: 'user',
                component: () => import('@/views/user/ScholarGraphView')
            },
            {
                path: '/flow',
                redirect: '/flow/active-user',
                children: [
                    {
                        path: '/flow/active-user',
                        name: 'activeUser',
                        component: () => import('@/views/flow/DailyActiveUserView')
                    }
                ]
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
