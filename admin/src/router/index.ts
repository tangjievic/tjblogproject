import RouterItem from './data.d';
import LogIn from '../pages/LogIn';
import MainIndex from '../pages/Main/Index';

let routers:RouterItem[] = [
    {
        path:"/",
        redirect:{
            to:"/login"
        }
    },
    {
        path:'/main',
        component:MainIndex,
        exact:true,
    },
    {
        path:'/login',
        component:LogIn,
        exact:true
    },
]

export default routers