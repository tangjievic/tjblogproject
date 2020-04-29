import UerIndex from '../pages/userindex/userindex'
import UserLogin from '../pages/userlogin/userlogin'
import UserHome from '../pages/userindex/userhome/userhome'
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
        ]
    },
    {
        path:'/login',
        component:UserLogin,
        exact:true
    }
]

export default routers