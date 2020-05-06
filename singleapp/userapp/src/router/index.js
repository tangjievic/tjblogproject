import UerIndex from '../pages/userindex/userindex'
import UserLogin from '../pages/userlogin/userlogin'
import UserHome from '../pages/userindex/userhome/userhome'
import UserEdite from '../pages/userindex/useredite/useredite'
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