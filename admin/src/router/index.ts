import RouterItem from './data.d';
import LogIn from '../pages/LogIn'

let routers:RouterItem[] = [
    {
        path:"/",
        redirect:{
            to:"/login"
        }
    },
    {
        path:'/login',
        component:LogIn,
        exact:true
    }
]

export default routers