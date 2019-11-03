import React, {Component} from 'react'
import {Firestore} from '.././config';
import Navigator from '.././navigation'; 
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			param : props.match.params.param,
			result : []
		}
	}

	componentDidMount(){
		const {param, result} = this.state;
		let current = result
		var data = Firestore.collection('products').where("name", "==", param);
		data.get().then(response => {
			console.log(response)
			response.docs.forEach(doc => {
				current.push(doc.data());
			})
			this.setState({
				result : current
			})
		})
	}

	render(){
		const {result, param} = this.state
		console.log(result)
		return(
			<div className="container main-body">
        		<Navigator />
				{result.map((item, i) => {
					return(
						<div key={i}>
							<img src={item.image}  alt={i}/>
							{item.name}
						</div>
					)
				})}
			</div>
		)
	}
}

export default Search