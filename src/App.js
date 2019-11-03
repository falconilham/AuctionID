import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import Sell from './component/Sell';
import Search from './component/Search';
//import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component {
  render() {
    // console.log(store, persistor)
    return (
    // <Provider store={store}>
      // {<PersistGate loading={null} persistor={ persistor }>}
        <div id="app">
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sell" component={Sell} />
            <Route path="/search/:param" component={Search} />
          </Router>
        </div>
      // {</PersistGate>}
    // </Provider>
    );
  }
}

