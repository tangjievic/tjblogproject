import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import routers from './router/index'
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
            }
          </div>
        </Router>
      </Provider>
    )
  };
}

export default App;
