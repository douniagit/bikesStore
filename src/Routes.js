import React from 'react';
import { Router, Route} from 'react-router';
import App from './App.js';
import Inscription from './Inscription/Inscription.jsx';
import Connexion from './Connexion/Connexion.jsx';
import Histoire from './Histoire/Histoire.jsx';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
	<Route path="/inscription" component={Inscription} />
    <Route path="/connexion" component={Connexion} />
  	<Route path="/histoire" component={Histoire} />
  </Router>
);


export default Routes;
