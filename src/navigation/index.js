import React, { Component } from 'react';
import {BrowserRouter as  Route, Link} from 'react-router-dom';

export default class MainNavigation extends Component {
  constructor(){
    super();
    this.state = {
      english:{
        left : [
          {
            name: "Home",
            link: "/"
          },
          {
            name: "Sell",
            link: "/sell"
          }
        ],
        right:[
          {
            name: "Register",
            link : `/register`
          },
          {
            name: "Login",
            link : '/login'
          }
        ]
      },
      username: ""
    }
  }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="navigation">
          <div className="right-nav">
            {this.state.english.left.map((item, i) => {
              return (
                <Link to={item.link} style={{ textDecoration: 'none', color: "white" }} key={i}>
                  <div>
                      {item.name}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="left-nav">
            {this.state.english.right.map((item, i) => {
                return (
                  <Link to={item.link} style={{ textDecoration: 'none', color: "white" }} key={i}>
                    <div>
                        {item.name}
                    </div>
                  </Link>
                )
            })}
          </div>
        </div>
        <div className="search">
          <input className="form-control col-sm-3" type="text" placeholder="e.g Whatever is it" />
          <button type="button" className="btn btn-light">Search</button>
        </div>
      </div>  
    );
  }
}
