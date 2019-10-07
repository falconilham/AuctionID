import React, { Component } from 'react';
import Navigator from '.././navigation';

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }
  render() {
    return (
        <div className="container main-body">
            <Navigator />
            <div className="card-header">
                <h4>Register</h4>
            </div>
            <div className="card">
                <div className="card-header">
                    <span>Login Information</span>
                </div>
                <div className="card-body form">
                    <div className="form-item">
                        <span>Username</span><input className="form-control" type="text" placeholder="Username" />
                    </div>
                    <div className="form-item">
                        <span>Password</span><input className="form-control" type="text" placeholder="Password" />
                    </div>
                    <div className="form-item">
                        <span>Confirm Password</span><input className="form-control" type="text" placeholder="Confirm Password" />
                    </div>
                    <div className="form-item">
                        <span>Email</span><input className="form-control" type="email" placeholder="Email" />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <span>Additional Information</span>
                </div>
                <div className="card-body form">
                    <div className="form-item">
                        <span>First Name</span><input className="form-control" type="text" placeholder="First Name" />
                    </div>
                    <div className="form-item">
                        <span>Last Name</span><input className="form-control" type="text" placeholder="Last Name" />
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary">Register Now</button>
        </div>
    );
  }
}
