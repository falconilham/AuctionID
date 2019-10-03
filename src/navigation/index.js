import React, { Component } from 'react';

export default class MainNavigation extends Component {
  constructor(){
    super();
    this.state = {
      english:{
        left : [
          "Home",
          "Sell"
        ],
        right:[
          "Register",
          "Login"
        ]
      }
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
                <div key={i}>
                  {item}
                </div>
              )
            })}
          </div>
          <div className="left-nav">
            {this.state.english.right.map((item, i) => {
                return (
                  <div key={i}>
                    {item}
                  </div>
                )
            })}
          </div>
        </div>
        <div className="search">
          <input className="form-control col-sm-3" type="text" placeholder="Default input" />
          <button type="button" className="btn btn-light">Search</button>
        </div>
      </div>  
    );
  }
}
