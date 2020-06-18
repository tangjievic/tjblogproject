import React, { FC } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import routers from './router/index'
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          {
            routers.map((route, key) => {
              if (route.exact) {
                return (
                  <Route exact key={key} path={route.path} render={props => (
                    <route.component {...props} routers={route.routers}></route.component>
                  )} ></Route>
                )
              } else if (route.redirect) {
                return (
                  <Route exact path={route.path} key={key}>
                    <Redirect to={route.redirect.to} />
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
            }
      </div>
    </Router>
  );
}

export default App;
