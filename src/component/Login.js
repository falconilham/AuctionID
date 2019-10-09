import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserName } from '../reducer/User';
import Navigator from '.././navigation';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {BrowserRouter as Link, Redirect } from 'react-router-dom';
import { Template } from './lang/Login';
import firebase from ".././config/";      

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.checkData.bind(this);
        this.inputHandler.bind(this);
    }     

    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    checkData = () => {
        const user = this.props.addUserName
        const { username, password } = this.state
        if(username === "" && password === ""){
            alert("Username & Password cant be empty")
        }else if(username === ""){
            alert("username cant be empty")
        }else if(password === ""){
            alert("Password cant be empty")
        }else{
            firebase.
            auth().signInWithEmailAndPassword(username, password)
            .then(() => {
                user(username);
                this.props.history.push('/')
            }
            ).catch((error) => 
                alert("Email Atau Password Salah")
            )
        }
    }

    render() {
        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
        }
        console.log(this.props)
        return (
            <div className="container main-body">
                <Navigator />
                <div className="Main-Login">
                    <div className="login-form">
                        <div className="card">
                            <div className="card-header">
                                Login
                            </div>
                            <div className="card-body form">
                                {Template.map((item, i) => {
                                    return(
                                        <div className="form-item" key={i}>
                                            <span>{item.label}</span>
                                            <input className="form-control" name={item.name} onChange={this.inputHandler} type="text" placeholder={item.label} />
                                        </div>
                                    )   
                                })}
                                <button type="button" onClick={this.checkData} className="btn btn-success">Login</button>
                            </div>
                            <center><h5>OR</h5></center>
                            <div className="SosMed">
                                <GoogleLogin
                                    clientId="116312265922-ifu71n2jbp6mrl1751cla1t3vuldfedn.apps.googleusercontent.com"
                                    onSuccess={responseGoogle}
                                    />
                                <FacebookLogin />
                            </div>
                        </div>
                        <div className="register-link">
                            <h2>Not registered yet ?</h2>
                            <p>If you are not already a registered member, please 
                            <Link to={'/register'} style={{ textDecoration: 'none' }}> Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserName: username => {
       dispatch(addUserName(username))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    User: state.User.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
