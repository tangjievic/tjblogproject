import RouterItem from './data.d';
let LeftNavRouter :RouterItem[] = [];
let Router:RouterItem[] = [
    {
        path:"welcome",
        name:'welcome',
        label:'欢迎',
        icon:'windows',
        component:()=>import('../views/main/welcome/WelCome.vue'),
        meta:{
            keepalive:true,
        }
    },
    {
        path:"admin",
        name:'admin',
        label:'管理员类',
        icon:'github',
        component:()=>import('../views/main/admin/Admin.vue')
    },
    {
        path:"user",
        name:'user',
        label:"用户管理",
        icon:'user',
        component:()=>import('../views/main/user/User.vue')
    },
    {
        path:'',
        label:"分类/标签",
        icon:'appstore',
        multiple:[
            {
                path:'/blogct',
                name:'blogct',
                label:'博文分类/标签',
                component:()=>import('../views/main/catetag/BlogCatetag.vue')
            }
        ]
    },
    {
        path:'',
        label:'博文管理',
        icon:'snippets',
        multiple:[
            {
                path: '/artlist',
                name:'artlist',
                label: '博文列表',
                component:()=>import('../views/main/artical/Artical.vue')
            },
            {
                path: '/artwrite',
                name:'artwrite',
                label: '博文写作',
                component:()=>import('../views/main/artical/ArtWrite.vue')
            }
        ]
    }
]
Router.forEach((item:RouterItem)=>{
    if(item.multiple){
        item.multiple.forEach((its:RouterItem)=>{
            LeftNavRouter.push(its)
        })
    }else{
        LeftNavRouter.push(item)
    }
})

export {
    LeftNavRouter,
    Router
} 