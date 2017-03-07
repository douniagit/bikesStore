import React, {Component} from 'react';

export default class Product extends Component {
	initClick() {
		this.props.add(this.props.product);
	}

	render() {
		return(
			<div>
				{/* this.props.product car on avait mappé sur product */}
				<h1>{this.props.product.name}</h1>
				<p>For only: {this.props.product.price}</p>
				<p>Quantity: {this.props.product.quantity}</p>
				<button onClick={this.initClick.bind(this)}>BUY NOW</button>
			</div>
		)
	}
}