import React, { Component } from 'react';
import Navigator from '.././navigation';
import { connect } from 'react-redux';
import { Template } from './lang/Register';
import { addUserName } from '../reducer/User';
import {Firebase} from ".././config/";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {responseGoogle} from './Auth';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            confirm: "",
            data: {
                username: "",
                password: "",
                email: "",
                first: "",
                last:""
            },
            template: Object.assign({}, Template)
        }
        this.inputHandler.bind(this);
        this.submit.bind(this);
        this.responseGoogle.bind(this);
    }

    componentDidMount(){
        const {User} = this.props
        if(User.name !== null){
            this.props.history.push('/')
        }
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

    submit = async () => {
        const {data, confirm} = this.state
        const db =  await Firebase.firestore();
        if(data.password !== confirm){
            alert("tidak sama")
        }else{
            try{
                await Firebase.auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(() => {
                    this.props.history.push('/login');
                    db.collection("users").add({data})    
                })
            }catch(er){
                console.log(er)
                alert("Something Wrong")
            }  
        }
    }

    responseGoogle = (response) => {
        const { addUserName } = this.props
        let name = response && response.profileObj && response.profileObj.name
        addUserName(name)
        localStorage.setItem('user', name)
        this.props.history.push('/')      
        console.log(response)
    }


    render() {
        const {template} = this.state
        return (
            <div className="main-body">
                <div className="card-header">
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
                                    <input className="form-control" name={item.name} onChange={this.inputHandler} type="text" placeholder={item.label} />
                                </div>  
                            )
                        })}
                        <div className="SosMed">
                            <GoogleLogin
                                clientId="116312265922-ifu71n2jbp6mrl1751cla1t3vuldfedn.apps.googleusercontent.com"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                            <FacebookLogin />
                        </div>      
                    </div>
                </div>
                <button type="button" onClick={this.submit} className="btn btn-primary">Register Now</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    User: state.User.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserName: username => {
       dispatch(addUserName(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)