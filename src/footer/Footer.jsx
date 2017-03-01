import React from 'react';
import './Footer.css';
import { Link } from 'react-router';
import logo from "./../../public/bike2.png";


class Footer extends React.Component {

	render(){
		return(
			<div className="footer">

				<div className="infog">
				    <img className="logo2" alt="" src={logo}/>
				</div>				
				<div className="CGA">
					<ul>
						<li>FAQ</li>
						<li>CONTACT</li>
						<li>MENTIONS LÉGALES</li>
						<li>CONDITIONS GÉNÉRALES DE VENTE</li>
					</ul>
				</div>
			<div className="cop">
				    <p>Copyright 2017©My Vintage Bike</p>
			</div>		
			</div>

	    )

	}
}

export default Footer;
