/* 
 * PMHC.co Portfolio 2016 
 * client.js
 */
 	
import React from 'react';
import { match, Router, browserHistory as history } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './common/routes';
import configureStore from './common/store/configureStore';
import { ReduxAsyncConnect } from 'redux-connect';
import ReactGA from 'react-ga';
 
/* Load client assets */
import './common/assets/css/style.scss';

/* Google analytics */
ReactGA.initialize('UA-86788925-1');
history.listen(function(location) {
    ReactGA.set({ 
    	page: location.pathname 
    });
    ReactGA.pageview(location.pathname);
});

/* Grab rendered store and dom */
const store = configureStore(window._initialState);
const mountNode = document.getElementById('app');

render(
	<Provider store={ store } key="provider">
		<Router render={ (props) => <ReduxAsyncConnect {...props}/> } history={ history }>
			 { routes }
		 </Router>
	</Provider>,
	mountNode
);



 