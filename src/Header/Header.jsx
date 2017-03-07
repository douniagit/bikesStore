import React from 'react';
import '../navbar/Navbar.css';
import { Link } from 'react-router';


class Header extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="back">
					<div className="infoPratique">
						<h1> Le NUMERO 1 DES VENTES DE VELOS VINTAGES</h1>
					</div>
				</div>
			<div className="bande">
				<div className="steps">
					<ul>
						<li><Link to="/" >Accueil</Link></li>
						<li><Link to="/histoire" >Histoire du vélo</Link></li>
						<li>Nos vélos
							<ul className="info">
								<li><Link to="/">Grands Bi</Link></li>
								<li><Link to="/">Tandems</Link></li>
								<li><Link to="/">Bicyclettes</Link></li>
								<li><Link to="/">Vélos pliants</Link></li>
							</ul>
						</li>
						<li>Nos Accessoires
							<ul className="info">
								<li><Link to="/">Eclairages</Link></li>
								<li><Link to="/">Bagagerie</Link></li>
							</ul>
						</li>
						<li>Nos bons plans</li>
					</ul>
				</div>
			</div>
		</div>
	    )

	}
}

export default Header;
