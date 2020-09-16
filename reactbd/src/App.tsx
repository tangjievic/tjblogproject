import React from 'react';
import './App.less';
import {
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import routers from './routers/index'
//import Wetbtn,{ ButtonType,ButtonSize} from './components/btn/btn';
//import { WetMenu,WetMenuItem} from './components/navmenu/menu';
function App() {
  let client_width:number =  document.body.clientWidth;
  console.log(client_width);
  return(
    <Router>
    <div className="App">
      {
        (()=>{
          if(client_width < 1200){
            //移动端渲染路由
            return(
              routers.mb.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route exact key={key} path={route.path} render={props => (
                      <route.component {...props} routers={route.routers}></route.component>
                    )} ></Route>
                  )
                } else if (route.redirect) {
                  return (
                    <Route exact path={route.path} key={key}>
                      <Redirect  to={route.redirect.to}/>
                    </Route>
                  )
                }else {
                  return (
                    <Route key={key} path={route.path} render={props => (
                      <route.component {...props} routers={route.routers}></route.component>
                    )} ></Route>
                  )
                }
              })
            )
          }else{
            //pc端渲染路由
            return(
              routers.pc.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route exact key={key} path={route.path} render={props => (
                      <route.component {...props} routers={route.routers}></route.component>
                    )} ></Route>
                  )
                } else if (route.redirect) {
                  return (
                    <Route exact path={route.path} key={key}>
                      <Redirect  to={route.redirect.to}/>
                    </Route>
                  )
                }else {
                  return (
                    <Route key={key} path={route.path} render={props => (
                      <route.component {...props} routers={route.routers}></route.component>
                    )} ></Route>
                  )
                }
              })
            )
          }
        })()
      }
    </div>
    </Router>
  )
}

export default App;
