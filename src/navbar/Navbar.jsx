import React from 'react';
import './Navbar.css';
import {Link } from 'react-router';
import logo from "./../../public/b3.png";
class Navbar extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="navbar">
					<div className="logo">
					    <Link href="/" className="logotexte"><img className="logoT" src={logo} alt="logo"/></Link>
				    </div>
				    <div className="wrapper">
						<div className="menu">
							<ul>
								<li><Link to="/inscription" className="inscription">Inscription</Link></li>
								<li><Link to="/connexion" className="connexion">Connexion</Link></li>
								<li><Link to="/" className="panier"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
							</ul>
						</div>
						
					</div>
				</div>
		</div>
	    )

	}
}

export default Navbar;
