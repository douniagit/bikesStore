import React from "react";
import contenu from '../Card/data.js';
import "./modalcontent.css";

class ModalContent1 extends React.Component {
  render() {
   
    return (
      <div className="contentx">
        <div className="part1">
            <img src={contenu.carte[0].image} alt="" className="img"/>
                <div className="zoneT">
                   	<div className="title">{contenu.carte[0].name}</div>
                  	<div className="price">{contenu.carte[0].price}</div>
                    <a href="#"><div className="add" onClick={() => this.props.addItemCard([contenu.carte[0].name, contenu.carte[0].price])}>+ Ajouter</div></a>
                </div>
            </div>

            <div className="part2">
                <h2>Description</h2>
                	<div className="desc">{contenu.carte[0].description}</div>
                <h2>Ingrédients</h2>
                	<div className="list">
	                	<ul>
	                		<li></li>
	                	</ul>
	                </div>
            </div>
        </div>
    );
  }
}

export default ModalContent1;