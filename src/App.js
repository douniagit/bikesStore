import React, { Component } from 'react';
import Navbar from "./navbar/Navbar.jsx";
import Card from "./Card/Card.jsx";
import Footer from "./footer/Footer.jsx";
import Header from "./Header/Header.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
