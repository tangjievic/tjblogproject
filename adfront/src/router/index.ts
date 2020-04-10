import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'loginpage',
    component:()=>import('../views/loginpage/loginpage.vue'),
    meta:{
      keepalive:false
    },
  },
  {
    path:'/homepage',
    name:'homepage',
    component:()=>import('../views/homepage/homepage.vue'),
    meta:{
      keepalive:false
    },
    children:[
      {
        path:"sliderpage",
        name:'sliderpage',
        component:()=>import('../views/sliderpage/sliderpage.vue'),
        meta:{
          keepalive:true,
        }
      },
      {
        path:'adminlist',
        name:'adminlist',
        component:()=>import('../views/adminpage/admin.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:"vipuser",
        name:'vipuser',
        component:()=>import('../views/vippage/vippage.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:'user',
        name:'user',
        component:()=>import('../views/userpage/userpage.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:'noticepage',
        name:'notice',
        component:()=>import('../views/noticepage/noticepage.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:'catepage',
        name:'catepage',
        component:()=>import('../views/articlepage/cate.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:'addart',
        name:'addart',
        component:()=>import('../views/articlepage/addarticle.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:'artlist',
        name:'artlist',
        component:()=>import('../views/articlepage/articlelist.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:'editeart',
        name:'editeart',
        component:()=>import('../views/articlepage/editearticle.vue'),
        meta:{
          keepalive:true
        }
      },
      {
        path:"goodslist",
        name:'goodslist',
        component:()=>import('../views/goodspage/goodslist.vue'),
        meta:{
          keepalive:true,
        }
      },
      {
        path:"goodsadd",
        name:'goodsadd',
        component:()=>import('../views/goodspage/addgoods.vue'),
        meta:{
          keepalive:true,
        }
      },
      {
        path: '/homepage',
        redirect: { name: 'adminlist' }
      }
    ]
  },
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
