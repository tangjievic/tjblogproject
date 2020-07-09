import RouterItem from './data.d';
import { WindowsOutlined,GithubOutlined,TeamOutlined,AppstoreOutlined,ReadOutlined,SettingOutlined } from '@ant-design/icons';
//<TeamOutlined /><AppstoreOutlined /><ReadOutlined /><SettingOutlined />
import {
    AdminLst,
    WelCome,
    MainIndex,
    LogIn,
    UserList,
    CataPage,
    ArtList,
    SysTem
} from '../pages/index';
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
        routers:[
            {
                path:"/main/welcome",
                title:'欢迎',
                icon:WindowsOutlined,
                component:WelCome
            },
            {
                path:'/main/adminlst',
                title:'管理员类',
                icon:GithubOutlined,
                component:AdminLst
            },
            {
                path:"/main/userlist",
                title:'用户管理',
                icon:TeamOutlined,
                component:UserList
            },
            {
                path:'/main/catepage',
                title:'文章栏目',
                icon:AppstoreOutlined,
                component:CataPage
            },
            {
                path:'/main/artlst',
                title:'博客文章',
                icon:ReadOutlined,
                component:ArtList
            },
            {
                path:'/main/system',
                title:'系统设置',
                icon:SettingOutlined,
                component:SysTem
            },
            {
                path:'/main',
                redirect:{
                    to:'/main/welcome'
                }
            }
        ]
    },
    {
        path:'/login',
        component:LogIn,
        exact:true
    },
]

export default routers