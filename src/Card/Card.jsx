import React from 'react';
import './Card.css';
import contenu from './data.js';
import Order from '../Order/Order.jsx';

class Card extends React.Component {

    constructor(props){
    super(props);
    this.state={
      produits:"NOS PRODUITS"
    }
   
  }

  render() {
    return (
      <div className="container">

          <div className="content">
            <div className="intro"><h1> {this.state.produits} </h1>
            </div>
              { contenu.carte.map(menu =>
                <div className="Card">
                  <img src={menu.image} alt="" className="img"/>
                  <div className="text">
                    <div className="title">{menu.name}</div>
                    <div className="desc">{menu.description}</div>
                  </div>
                  <div className="price">{menu.price}</div>
                   <div className="addbox">
                    <a href="#"><div className="add" onClick={this.initClick} onClick={() => this.props.addItemCard([menu.name, menu.price])}>Ajouter</div></a>
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
