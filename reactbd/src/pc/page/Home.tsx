import React,{useEffect} from 'react';
import MainLayout from '../layout/MainLayout';
import {
    //HashRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { getUserMsgAction ,getCateMsgAction} from '../../store/actioncreator';
import { getUerMsgPc } from '../../apilist/index';
interface HomeProps {
    reqUserData:()=>{};
    reqCateMsg:()=>{};
}
const Home:React.FC<HomeProps> = (props) =>{
    useEffect(()=>{
        props.reqUserData();
        props.reqCateMsg();
        getUerMsgPc();
    },[])
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

const mapState = (state:any) =>{
   return {
        userData:state.userData,
   }
}

const mapAtion = (dispatch:any) =>{
    return {
        reqUserData(){
            const action = getUserMsgAction()
            dispatch(action)
        },
        reqCateMsg(){
            const action = getCateMsgAction()
            dispatch(action)
        }
    }
}

export default connect(mapState,mapAtion)(Home as any)