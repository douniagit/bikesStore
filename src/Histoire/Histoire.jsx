import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import contenu from '../Card/data.js';
import "./histoire.css";

class Histoire extends React.Component{
 

  render(){

    return(
      <div>
        <Navbar />
        <Header />
        <div className="contentB">
          <div className="intro2"><h1> Ton Velo a une Histoire </h1>
            </div>
          <div className="wraph">
            <div className="history">
              { contenu.histoire.map(type =>
                <div className="history box">
                  <div className="title2">{type.name}</div>
                  <img src={type.image} alt="" className="img2"/>
                  <div className="text2">
                    <div className="desc2">{type.description}</div>
                  </div>
                  </div>
                )}
          </div>
        </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default Histoire;