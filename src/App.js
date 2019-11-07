import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import Sell from './component/Sell';
import Search from './component/Search';
import Item from './component/Item';
import Navigator from './navigation'
//import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component {

  render() {
    return (
      <div id="app" className="container">
        <Router>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/sell" component={Sell} />
              <Route path="/search/:param" component={Search} />
              <Route path="/item/:param" component={Item} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

