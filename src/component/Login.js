import React, { Component } from 'react';
import Navigator from '.././navigation';
import {BrowserRouter as outer, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

export default class Login extends Component {
    constructor(){
        super()
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
        const { username, password } = this.state
        if(username === "" && password === ""){
            alert("Username & Password cant be empty")
        }else if(username === ""){
            alert("username cant be empty")
        }else if(password === ""){
            alert("Password cant be empty")
        }else{
            alert("ok")
        }
    }

    render() {
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
                                <div className="form-item">
                                    <span>Username</span>
                                    <input className="form-control" name="username" onChange={this.inputHandler} type="text" placeholder="Username" />
                                </div>
                                <div className="form-item">
                                    <span>Password</span>
                                    <input className="form-control" name="password" onChange={this.inputHandler} type="text" placeholder="Password" />
                                </div>
                                <button type="button" onClick={this.checkData} className="btn btn-success">Login</button>
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
