import React, {Component} from 'react';


export default class Panier extends Component {
	render() {
		return(
			<div>
				{ 
					this.props.purchase.map( product =>
						<div>{product.name}: {product.price}</div>
					)
				} 
			</div>
		)
	}
}