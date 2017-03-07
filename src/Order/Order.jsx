import React from 'react';
import './order.css';
import contenu from '../Card/data.js';
//import Card from '../Card/Card.jsx';
import Panier from '../Panier/Panier.jsx';


class Order extends React.Component {

  constructor(){
    super();
    const products = contenu.carte;
    this.state = {
      products: products,
      purchase: []
    }
  }

  add(product) { //obligé de passer un argument car on veut passer l'élément  
    const arr = this.state.purchase; // peut pas faire de push à la suite 
    arr.push(product);
    this.setState({ purchase: arr })
  }



  render() {
    return (
      <div className="orderbox">
          <h1> Mon panier</h1>
    		<div className="">
    			<img src="./img/Icone1.png" alt="order"/>
    		</div>
        <br/>
      <Panier purchase={this.state.purchase} />
        
       {
          this.state.products.map(product =>{
            return (
            <div key={product.id}
                 product={product}
                 add={this.add.bind(this)} />)}
            // props product = {product} est chaque objet de products
          )
        }
    </div>



    );
  }
}

export default Order;
