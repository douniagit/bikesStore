import React from 'react';
import './Card.css';
import contenu from './data.js';
import Order from '../Order/Order.jsx';

class Card extends React.Component {
  constructor(){
    super();
    this.state = {
      products: contenu
    }
  }

initClick() {
    this.props.add(this.props.product);
  }


  render() {
    return (
      <div className="container">

          <div className="content">
            <div className="intro"><h1> NOS PRODUITS </h1>
            </div>
              { this.state.products.carte.map(product =>
                <div className="Card">
                  <img src={product.image} alt="" className="img"/>
                  <div className="text">
                    <div className="title">{product.name}</div>
                    <div className="desc">{product.description}</div>
                  </div>
                  <div className="price">{product.price}</div>
                  {/*<p className="qty">{product.quantity}</p>*/}
                   <div className="addbox">
                    <a><div className="add" onClick={this.initClick.bind(this)}>Ajouter</div></a>
                    </div>
                  </div>
                )}        
          </div>
       <Order />
      </div>


    );
  }
}

export default Card;
