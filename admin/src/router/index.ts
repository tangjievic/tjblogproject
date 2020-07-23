import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterItem from './data.d';
import {LeftNavRouter} from './leftnav';
Vue.use(VueRouter)

const routes:RouterItem[] = [
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/login/Login.vue')
    },
    {
        path:'/main',
        component:()=>import('../views/main/Main.vue'),
        children:LeftNavRouter
    },
    {
        path: '/',
        redirect: { path: 'main/welcome' }
    },
    {
        path:'*',
        component:()=>import('../views/404.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
