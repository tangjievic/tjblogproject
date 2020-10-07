import React,{ useEffect , useState} from 'react';
import './header.less';
import { WetMenu, WetMenuItem,WetMenuSub }from '../../../components/navmenu/menu';
import { getCate } from '../../../apilist';
import { LINKURL } from '../../../apilist/method';
import { message } from 'antd';
import Cookies from 'js-cookie';
const Header:React.FC = ()=>{
    let [catetemp,setCateTemp] = useState([]);
    useEffect(()=>{
        getCate().then((res:any)=>{
            setCateTemp(res.data)
        })
    },[])
    //对导航进行处理
    let dealCate = ()=>{
        let temp:any[] = [];
        let child:any[] = [];
        let result:any[] = [];
        //console.log(catetemp)
        if(catetemp.length === 0){
            return(
                <WetMenuItem index={'null'}></WetMenuItem>
            )
        }
        catetemp.forEach((item:any) =>{
            if(Number(item.pid) === 0){
                temp.push(item)
            }else{
                child.push(item)
            }
        })
        temp.forEach((item:any)=>{
            item.child = [];
            for(let i = 0;i<child.length;i++){
                if(child[i].pid === item.id){
                    item.child.push(child[i])
                }else{
                    continue
                }
            }
        })
        result = temp.map((item:any)=>{
            if(item.child&&item.child.length !== 0){
                return (
                    <WetMenuSub key={item.id} index={item.id} title={item.catename}>
                        {
                            item.child.map((its:any)=>{
                                return (
                                <WetMenuItem key={its.id} index={its.id}>{its.catename}</WetMenuItem>
                                )
                            })
                        }
                    </WetMenuSub>
                )
            }else{
                return(
                    <WetMenuItem key={item.id} index={item.id}>{item.catename}</WetMenuItem>
                )
            }
        })
        return result
    }
    let onSelect = (e:any)=>{
        console.log(e,'xxxx')
        if(e === 'home'){
            window.open(`${LINKURL}`,'_self')
        }else if(e === 'center_2'){
            Cookies.remove('token');
            Cookies.remove('username');
            message.success('退出成功');
            setTimeout(()=>{
                window.open(`${LINKURL}`,"_self")
            },1000)
        }else{
            window.open(`${LINKURL}/artlist.html?cid=${e}`,"_self")
        }
    }
    return(
        <header className="tj-blog__hd">
            <div className="hd__box">
                <div className="hd_logo">TANGJIE-BLOG</div>
                <div className="nav_right">
                    <WetMenu defaultIndex={'center_1'} onSelect={(e)=>onSelect(e)}>
                        <WetMenuItem index={'home'}>首页</WetMenuItem>
                        {
                           dealCate()
                        }
                        <WetMenuSub index="personal_center" title="个人中心">
                            <WetMenuItem index={'center_1'}>中心主页</WetMenuItem>
                            <WetMenuItem index={'center_2'}>退出登录</WetMenuItem>
                        </WetMenuSub>
                    </WetMenu>
                </div>
            </div>
        </header>
    )
}

export default Header;