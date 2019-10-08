import React, { Component } from 'react';
import Navigator from '.././navigation';
import { Template } from './lang/Register';

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            confirm: "",
            data: {
                username: "",
                password: "",
                email: ""
            },
            template: Object.assign({}, Template)
        }
        this.inputHandler.bind(this);
        this.submit.bind(this);
    }

    inputHandler = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        if(name === "confirm"){
            this.setState({
                [name]:value
            })
        }else{    
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    [name]: value
                }
            }))
        }
    }

    submit = () => {
        const {data, confirm} = this.state
        if(data.password !== confirm){
            alert("tidak sama")
        }else{
            console.log(data)
        }
    }

    render() {
        const {template} = this.state
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
                        {template.login.map((item, i) => {
                            if(item.name === "email"){
                                return(
                                    <div className="form-item" key={i}>
                                        <span>{item.label}</span>
                                        <input className="form-control" onChange={this.inputHandler} name={item.name} type={item.name} placeholder="Email" required/>
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="form-item" key={i}>
                                        <span>{item.label}</span>
                                        <input className="form-control" onChange={this.inputHandler} name={item.name} type="text" placeholder={item.name} required/>
                                    </div>  
                                )
                            }
                        })}        
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <span>Additional Information</span>
                    </div>
                    <div className="card-body form">
                        {template.additional.map((item, i) => {
                            return(
                                <div className="form-item" key={i}>
                                    <span>{item.label}</span>
                                    <input className="form-control" name={item.name} type="text" placeholder={item.label} />
                                </div>  
                            )
                        })}
                    </div>
                </div>
                <button type="button" onClick={this.submit} className="btn btn-primary">Register Now</button>
            </div>
        );
    }
}
