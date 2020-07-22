import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterItem from './data.d';
import LeftNavRouter from './leftnav';
Vue.use(VueRouter)

const routes:RouterItem[] = [
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/login/Login.vue')
    },
    {
        path:'/',
        component:()=>import('../views/main/Main.vue'),
        children:LeftNavRouter

    },
    {
        path:'*',
        component:()=>import('../views/404.vue')
    },

  //     {
  //       path:'adminlist',
  //       name:'adminlist',
  //       component:()=>import('../views/adminpage/admin.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:"vipuser",
  //       name:'vipuser',
  //       component:()=>import('../views/vippage/vippage.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:'user',
  //       name:'user',
  //       component:()=>import('../views/userpage/userpage.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:'noticepage',
  //       name:'notice',
  //       component:()=>import('../views/noticepage/noticepage.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:'catepage',
  //       name:'catepage',
  //       component:()=>import('../views/articlepage/cate.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:'addart',
  //       name:'addart',
  //       component:()=>import('../views/articlepage/addarticle.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:'artlist',
  //       name:'artlist',
  //       component:()=>import('../views/articlepage/articlelist.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:'editeart',
  //       name:'editeart',
  //       component:()=>import('../views/articlepage/editearticle.vue'),
  //       meta:{
  //         keepalive:true
  //       }
  //     },
  //     {
  //       path:"goodslist",
  //       name:'goodslist',
  //       component:()=>import('../views/goodspage/goodslist.vue'),
  //       meta:{
  //         keepalive:true,
  //       }
  //     },
  //     {
  //       path:"goodsadd",
  //       name:'goodsadd',
  //       component:()=>import('../views/goodspage/addgoods.vue'),
  //       meta:{
  //         keepalive:true,
  //       }
  //     },
  //     {
  //       path:"tempstaff",
  //       name:'tempstaff',
  //       component:()=>import('../views/staffpage/tempstaff.vue'),
  //       meta:{
  //         keepalive:true,
  //       }
  //     },
  //     {
  //       path:"formalstaff",
  //       name:'formalstaff',
  //       component:()=>import('../views/staffpage/formalstaff.vue'),
  //       meta:{
  //         keepalive:true,
  //       }
  //     },
  //     {
  //       path:"addstaff",
  //       name:'addstaff',
  //       component:()=>import('../views/staffpage/addstaff.vue'),
  //       meta:{
  //         keepalive:true,
  //       }
  //     },
  //     {
  //       path: '/homepage',
  //       redirect: { name: 'adminlist' }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
