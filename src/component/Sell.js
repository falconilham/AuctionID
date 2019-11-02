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
			username : "",
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
		this.setState({
			username : User.name
		})
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
		let image = document.getElementById("image").files[0];
		console.log(image.name)
		const uploadTask = Storage.ref(`image/products/${image.name}`).put(image);
		uploadTask.on('state_changed', 
		(snapshot) => {
			// progrss function ....
			console.log(snapshot)
		}, 
		(error) => {
			// error function ....
			console.log(error);
		}, 
		() => {
			// complete function ....
			Storage.ref('image/products').child(image.name).getDownloadURL().then(url => {
			    console.log(url);
			    this.setState({
			    	image: url
			    });
			    this.checkData()
			})
		});
	}

	checkData = async () => {
		let data = this.state;
		const {User} =this.props
		const db =  await Firebase.firestore();
		try{
			db.collection("products").add({
				username : User,
				name : data.name,
				price: data.price,
				image: data.image,
				shipping: data.shipping,
				category: data.category,
				region: data.region,
				type: data.type
			}).then(() => {
				this.props.history.push('/')
			});
		}catch(er){
			console.log(er)
        }
	}

	render() {
		console.log(this.state)
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
														<input type="file" id="image"/>
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
		            		<button type="button" onClick={this.uploadImage} className="btn btn-success">Upload Data</button>
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