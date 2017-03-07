import React, {Component} from 'react';
// import Card from '../Card/Card.jsx';
import contenu from '../Card/data.js';
import Panier from '../Panier/Panier.jsx';
import "./shop.css";

export default class Shop extends Component {
	constructor(){
    super();
    this.state = {
      products: contenu.carte,
      purchase: []
    }
 }

	add(product) { //obligé de passer un argument car on veut passer l'élément  
		const arr = this.state.purchase; // peut pas faire de push à la suite 
		arr.push(product);
		this.setState({ purchase: arr })
	}

	render() {

		
		const pan=this.state.products.map((product, i) => {
					return(
						<div> key={product.id}
								 product={product}
								 add={this.add.bind(this)} </div>)}
						// props product = {product} est chaque objet de products
					)
				


		return(
			<div>
			<div className="containerS">
				<Panier purchase={this.state.purchase} />
				{pan}
			</div>
		</div>
		)
	}
}