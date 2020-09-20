import React from 'react';
import MainLayout from '../layout/MainLayout';
import {
    HashRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import Bubbline from '../subassembly/bubbleline/Bubbleline';
interface HomeProps {

}
const Home:React.FC<HomeProps> = (props) =>{
    console.log(props)
    return (
        <MainLayout>
            {
                (props as any).routers.map((route:any,key:number)=>{
                    if(route.redirect){
                        return(
                            <Route exact path={route.path} key={key}>
                                <Redirect  to={route.redirect.to}/>
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
        </MainLayout>
    )
}

export default Home