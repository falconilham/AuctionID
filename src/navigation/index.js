import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as firebase from "firebase";

class MainNavigation extends Component {
  constructor(){
    super();
    this.state = {
      search: "",
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
    this.search.bind(this);
  }

  componentDidmount = () => {
  }

  search = (e) => {
    e.preventDefault()
    const { pathname } = this && this.props && this.props.location
    const { search } = this.state
    if( search === ""){
      alert("tidak boleh kosong")
    }else if(pathname === '/search/'+search){
    }else{
      this.props.history.push('/search/'+search)
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(function() {
    // Sign-out successful
      console.log("sukses")
      localStorage.removeItem('user')
      window.location.reload(true);
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
  }

  render() {
    const {User} = this.props
    const {search} = this.state
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
            {User === null || User === undefined ? (
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
            ):(
              <div className="left-nav">
                <div>
                  {User}
                </div>
                <div onClick={this.signOut}>
                  Sign Out
                </div>
              </div>
            )}
        </div>
        <form className="search" onSubmit={this.search}>
          <input className="form-control col-sm-3" type="text" placeholder="e.g Whatever is it" onChange={(e) => this.setState({search: e.target.value})}/>
          <input type="submit" className="btn btn-light" />
        </form>
      </div>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    User: state.User.username.name
  }
}

export default withRouter(connect(mapStateToProps)(MainNavigation))
