import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import Sell from './component/Sell';

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sell" component={Sell} />
        </div>
      </Router>
    </Provider>
    );
  }
}

