import React, { Component } from 'react';
import Navigator from '.././navigation';
import { connect } from 'react-redux';
import { addUserName } from '../reducer/User';
import { listing, additional } from './lang/Sell';
import {Firebase, Storage} from ".././config/"; 

class Sell extends Component {
	constructor(){
		super();
		this.state = {
			username : "ilham",
			name : "",
			price: "",
			image: "",
			shipping: "",
			category:"",
			region: "",
			type: ""
		}
		this.handler.bind(this);
		this.checkData.bind(this);
		this.uploadImage.bind(this);
	}

	componentDidMount = () =>{
		const {User} = this.props
		if(User === ""){
			alert("You Have to login")
			this.props.history.push('/login'); 
		}
		
	}

	handler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	uploadImage = () => {
		const {image} = this.state;
		const uploadTask = Storage.ref(`images/${image}`).put(image);
		uploadTask.on('state_changed',
		(snapshot) => {
        // progrss function ....
	        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
	        this.setState({progress});
	        return true
      	},
		(error) => {
		   // error function ....
			return false
		},
		() => {
        // complete function ....
	        Storage.ref('images').child(image.name).getDownloadURL().then(url => {
	            console.log(url);
	        })
    	}); 
	}

	checkData = async () => {
		let data = this.state;
		const db = Firebase.firestore();
		try{
			db.collection("products").add({
				username : data.username,
				name : data.name,
				price: data.price,
				image: data.image,
				shipping: data.shipping,
				category: data.category,
				region: data.region,
				type: data.type
			}).then(() => {
				if(this.uploadImage){
					this.props.history.push('/')
				}else{
					alert("error")
				}
			});
		}catch{
			alert("Email Atau Password Salah")
        }
	}

	render() {
	    return (
	        <div className="container main-body">
	            <Navigator />
	            <div className="body-sells">
		            <div className="card-header">
		            	<h5>Create Listing</h5>
		            </div>
		            {listing.map((item, i) => {
		            	return(
		            		<div className="card" key={i}>
				            	<div className="card-header">
				            		<h5>{item.label}</h5>
				            		<select className="form-control" name={item.name} onChange={this.handler}>
				            			{item.data && item.data.map((item, i) => {
				            				return (
				            					<option key={i} value={item}>{item}</option>
				            				)
				            			})}
				            		</select>
				            	</div>
				            </div>
	            		)
		            })}
		            <div className="card">
		            	<div className="card-header">
		            		<h5>
		            			Additional Information
		            		</h5>
		            	</div>
		            	<div className="card-body">
		            		{additional.map((item, i) => {
		            			return(
	            				<div className="additional-input" key={i}>
		            				{item.type === "options" ? (
		            					<div key={i}>
		            						<h5>{item.label}</h5>
		            						<select className="form-control" name={item.name} onChange={this.handler}>
						            			{item.data && item.data.map((item, i) => {
						            				return (
						            					<option key={i} value={item}>{item}</option>
						            				)
						            			})}
					            			</select>
				            			</div>
	            					): item.type === "file" ?(
	            						<div key={i}>
		            						<h5>{item.label}</h5>
		            						<form className="md-form">
												<div className="file-field">
													<div className="btn btn-primary btn-sm">
														<input type="file" name="image" onChange={this.handler}/>
													</div>
												</div>
											</form>
										</div>
	            					):(
	            						<div key={i}>
							            	<h5>{item.label}</h5>
						            		<input type={item.type} className="form-control" name={item.name} onChange={this.handler}/>
							            </div>
	            					)}
            					</div>
	            				)
		            		})}
		            		<button type="button" onClick={this.checkData} className="btn btn-success">Upload Data</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Sell)