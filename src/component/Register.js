import React, { Component } from 'react';
import Navigator from '.././navigation';

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            confirm: "",
            email: ""
        }
        this.inputHandler.bind(this);
        this.submit.bind(this);
    }

    inputHandler = (e) => {    
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        const {username, password, confirm, email} = this.state
        if(password != confirm){
            alert("confirm tidak sama dengan password")
        }else if(email){

        }else{
            alert("ok")
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
                            <span>Username</span>
                            <input className="form-control" onChange={this.inputHandler} name="username" type="text" placeholder="Username" required/>
                        </div>
                        <div className="form-item">
                            <span>Password</span>
                            <input className="form-control" onChange={this.inputHandler} name="password" type="text" placeholder="Password" required/>
                        </div>
                        <div className="form-item">
                            <span>Confirm Password</span>
                            <input className="form-control" onChange={this.inputHandler} name="confirm" type="text" placeholder="Confirm Password" required/>
                        </div>
                        <div className="form-item">
                            <span>Email</span>
                            <input className="form-control" onChange={this.inputHandler} name="email" type="email" placeholder="Email" required/>
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
                <button type="button" onClick={this.submit} className="btn btn-primary">Register Now</button>
            </div>
        );
    }
}
