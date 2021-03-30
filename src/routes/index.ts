import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
const VITE_APP_BASE_PATH = import.meta.env.VITE_APP_BASE_PATH as string

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import('@/views/Home.vue')
    },
    {
        path: '/setup',
        name: 'Setup-Page',
        component: ()=> import('@/views/SetupLayout.vue')
    }
]

const router = createRouter({
    history: createWebHistory(VITE_APP_BASE_PATH),
    routes
})


export default router