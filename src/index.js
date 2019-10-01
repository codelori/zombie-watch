import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import config from './services/config';
import { BrowserRouter as Router } from "react-router-dom"

Amplify.configure({
	Auth: {
		mandatorySignId: true,
		region: config.cognito.region,
		userPoolId: config.cognito.userPoolId,
		userPoolWebClientId: config.cognito.appClientId
	}
})
ReactDOM.render(
	<Router>
		<App />
	</Router>, 
	document.getElementById('root')
);


