import UerIndex from '../pages/userindex/userindex'
import UserLogin from '../pages/userlogin/userlogin'
import UserHome from '../pages/userindex/userhome/userhome'
import UserEdite from '../pages/userindex/useredite/useredite'
import QueryArt from '../pages/userindex/queryart/queryart'
let routers = [
    {
        path:'/',
        redirect:{
            to:'/main'
        },
    },
    {
        path:'/main',
        component:UerIndex,
        routers:[
            {
                path:'/main',
                redirect:{
                    to:'/main/home'
                }
            },
            {
                path:"/main/home",
                component:UserHome
            },
            {
                path:"/main/edite",
                component:UserEdite
            },
            {
                path:"/main/queryart/:keywrods",
                component:QueryArt
            }
        ]
    },
    {
        path:'/login',
        component:UserLogin,
        exact:true
    }
]

export default routers