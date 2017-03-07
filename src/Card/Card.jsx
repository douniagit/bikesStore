import React from 'react';
import './Card.css';
import contenu from './data.js';
import Order from '../Order/Order.jsx';

class Card extends React.Component {

    constructor(){
        super();
        this.state = {
          bike: contenu,
          purchase: []
        }
     }




initClick(product) {
   console.log("product", product);
   // this.setState({ purchase: bike.push[]});
  }


  render() {
    return (
      <div className="container">

          <div className="content">
            <div className="intro"><h1> NOS PRODUITS </h1>
            </div>
              { this.state.bike.carte.map(product =>
                <div className="Card" key={product.id}>
                  <img src={product.image} alt="" className="img"/>
                  <div className="text">
                    <div className="title">{product.name}</div>
                    <div className="desc">{product.description}</div>
                  </div>
                  <div className="price">{product.price}</div>
                  {/*<p className="qty">{product.quantity}</p>*/}
                   <div className="addbox">
                    <div className="add" onClick={()=> this.initClick(product)}>Ajouter</div>
                    </div>
                  </div>
                )}        
          </div>
       <Order/>
      </div>


    );
  }
}

export default Card;
