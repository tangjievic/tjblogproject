import './index.less';
import {Route,Redirect,Switch} from "react-router-dom";
import React from 'react';
import MainLayout from '../../../layouts/MainLayout'
import RouterItem from '../../../router/data.d';
interface MainIndex {

}

const MainIndex: React.FC<MainIndex> = (props:any) => {
    //console.log(props)
    return (
        <MainLayout {...props}>
            <Switch>
            {
                props.routers.map((route:RouterItem,key:number)=>{
                    if(route.redirect){
                        return(
                            <Route exact path={route.path} key={key}>
                                <Redirect {...props} key={key} to={route.redirect.to}/>
                            </Route>
                        )
                    }
                    return (
                        <Route key={key} path={route.path} exact render={props=>(
                            <route.component {...props} routers={route.routers}></route.component>
                        )} ></Route>
                    )
                })
            }
            </Switch>
            {/* <div style={{
                height:'1600px'
            }}></div> */}
        </MainLayout>
    )
}

export default MainIndex