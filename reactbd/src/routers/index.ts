import RouterItem from './router.d';
import PC from '../pc/index';
import MB from '../mb/index';
// import UerIndex from '../pages/userindex/userindex'
// import UserLogin from '../pages/userlogin/userlogin'
// import UserHome from '../pages/userindex/userhome/userhome'
// import UserEdite from '../pages/userindex/useredite/useredite'
// import QueryArt from '../pages/userindex/queryart/queryart'
interface RoutersParams {
    mb:RouterItem [];
    pc:RouterItem [];
}
let routers:RoutersParams = {
    mb:[
        {
            path:'/',
            redirect:{
                to:'/home'
            }
        },
        {
            path:'/home',
            component:MB.Home
        }
    ],
    pc:[
        {
            path:'/',
            redirect:{
                to:'/main'
            }
        },
        {
            path:'/',
            component:PC.Home,
            routers:[
                {
                    path:"/main",
                    component:PC.Main
                }
            ]
        }
    ]
}
// let routers = [
//     {
        
//     }
//     // {
//     //     path:'/',
//     //     redirect:{
//     //         to:'/main'
//     //     },
//     // },
//     // {
//     //     path:'/main',
//     //     component:UerIndex,
//     //     routers:[
//     //         {
//     //             path:'/main',
//     //             redirect:{
//     //                 to:'/main/home'
//     //             }
//     //         },
//     //         {
//     //             path:"/main/home",
//     //             component:UserHome
//     //         },
//     //         {
//     //             path:"/main/edite",
//     //             component:UserEdite
//     //         },
//     //         {
//     //             path:"/main/queryart/:keywrods",
//     //             component:QueryArt
//     //         }
//     //     ]
//     // },
//     // {
//     //     path:'/login',
//     //     component:UserLogin,
//     //     exact:true
//     // }
// ]

export default routers