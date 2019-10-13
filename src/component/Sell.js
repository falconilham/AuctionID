import React, { Component } from 'react';
import Navigator from '.././navigation';
import { listing, additional } from './lang/Sell';
import { MDBFileInput } from 'mdbreact';

export default class Sell extends Component {
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
	            		<div className="card">
			            	<div className="card-header">
			            		<h5>{item.label}</h5>
			            		<select class="form-control">
			            			{item.data && item.data.map((item, i) => {
			            				return (
			            					<option key={i}>{item}</option>
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
	            				<div className="additional-input">
		            				{item.type === "options" ? (
	            						<select class="form-control">
					            			{item.data && item.data.map((item, i) => {
					            				return (
					            					<option key={i}>{item}</option>
					            				)
					            			})}
				            			</select>
	            					): item.type === "file" ?(
	            						<div>
		            						<h5>{item.label}</h5>
		            						<form class="md-form">
												<div class="file-field">
													<div class="btn btn-primary btn-sm">
														<input type="file" />
													</div>
												</div>
											</form>
										</div>
	            					):(
	            						<div>
							            	<h5>{item.label}</h5>
						            		<input type={item.type} className="form-control" name={item.name} />
							            </div>
	            					)}
            					</div>
            				)
	            		})}
	            	</div>
	            </div>
            </div>
        </div>
    );
  }
}
