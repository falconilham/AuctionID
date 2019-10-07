import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store';
import Home from './component/Home';
import Register from './component/Register'

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
    );
  }
}
