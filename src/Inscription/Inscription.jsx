import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import "./inscription.css";
import {Link } from 'react-router';

export default class Inscription extends React.Component {

    render(){
        return(
        <div>
            <Navbar />
            <div className="inscrp">
            <div className="suscrib">
                <form action="/action_page.php">
                    <label for="fname">Prémon</label>
                    <input type="text" id="fname" name="firstname" placeholder="ton prénom..."/>

                    <label for="lname">Nom</label>
                    <input type="text" id="lname" name="lastname" placeholder="ton nom..."/>

                    <label for="genre">Genre</label>
                    <select id="Genre" name="country">
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                    </select>
                      <label for="lname">Mail</label>
                    <input type="text" id="lname" name="mail" placeholder="ton email..."/>
                    <label for="lname">Mot de passe</label>
                    <input type="text" id="lname" name="pswd" placeholder="mot de passe..."/>
                    <label for="lname">Confirme mot de passe</label>
                    <input type="text" id="lname" name="check" placeholder="confirme ton mot de passe..."/>
                    <input type="submit" value="S'inscrire"/>
                    <p> deja inscrit? <Link to="/connexion">Connectes-toi!</Link></p>
                  </form>
               </div>
            </div>
             <Footer />
        </div>

        )

    }
}