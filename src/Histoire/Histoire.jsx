import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import {Router, Route, Link } from 'react-router';

class Histoire extends React.Component{
 

  render(){

    return(
      <div>
        <Navbar />
        <Header />
          <div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Histoire;