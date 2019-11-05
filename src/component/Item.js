import React, { Component } from 'react';
import {Firestore} from '.././config';

class Item extends Component{
	constructor(props){
		super(props);
		this.state = {
			param : props.match.params.param,
			result: {}
		}
	}

	componentDidMount(){
		const {param, result} = this.state;
		var data = Firestore.collection('products').doc(param)
		data.get().then(doc => {
			console.log(doc.data())
			this.setState({
				result: doc.data()
			})
		})
	}

	render(){
		console.log(this.state.result)
		const {image} = this.state.result
		return(
			<div className="container">
				<img src={image} className="img-fluid" />
			</div>
		)
	}
}

export default Item;