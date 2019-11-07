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
		const {param, result} = this.state
		return(
			<div className="item-body">
				<div className="item-image">
					<img src={result.image} className="img-fluid" />
				</div>
				<div className="item-detail">
					<div className="card-header item-detail-head">
						<h3>{result.name}</h3>
						<div className="stat">Active</div>
					</div>
					<div className="card-body item-detail-body">
						<div className="body-left">
							<div className="Price">
								<span>Current Price </span>
								<span>Rp {result.price}</span>
							</div>
							<div className="quick-bid btn btn-danger">
								<span>Quick Bid Rp {result.price * 0.10 + result.price }</span>
							</div>
							<form className="submit">
								<div className="input-group">
									<div class="input-group-prepend">
	          							<div class="input-group-text">IDR</div>
	        						</div>
									<input className="form-control" />
								</div>
								<button className="btn btn-success">Submit</button>
							</form>
							<div className="text-or">
								<span>or</span>
							</div>
							<div className="btn btn-light">
								<span>Make An Offer </span>
							</div>
						</div>
						<div className="body-right">
							<div className="col-sm col-xs detail__action-link">
								<span className="detail__action-link-count">
									{0} Watching
								</span>
								<span className="glyphicon glyphicon-plus">
									Add To Watch LIst
								</span>
							</div>
							<div className="col-sm col-xs detail__action-link">
								<span className="detail__action-link-count">
									Higher Bidder : {"apalah"}
								</span>
								<span className="glyphicon glyphicon-plus">
									{2} Bid(s)
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Item;