import RouterItem from './data.d';

const LeftNavRouter:RouterItem[] = [
    {
        path:"welcome",
        name:'welcome',
        label:'欢迎',
        icon:'windows',
        //component:()=>import('../views/sliderpage/sliderpage.vue'),
        meta:{
            keepalive:true,
        }
    },
    {
        path:"admin",
        name:'admin',
        label:'管理员类',
        icon:'github',
    },
    {
        path:'',
        label:'博文管理',
        icon:'snippets',
        children:[
            {
                path: '/artlist',
                name:'artlist',
                label: '博文列表',
                meta:{
                    keepalive:false,
                }
            },
            {
                path: '/artwrite',
                name:'artwrite',
                label: '博文写作',
                meta:{
                    keepalive:false,
                }
            }
        ]
    }
    // {
    //     path: '/',
    //     redirect: { 
    //         name: 'welcome' 
    //     }
    // }
]

export default LeftNavRouter;