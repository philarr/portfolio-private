import 'babel-polyfill'
import React from 'react'
import { match, Router, browserHistory as history } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './common/routes'
import configureStore from './common/store/configureStore'
import { ReduxAsyncConnect } from 'redux-connect'


const store = configureStore(window._initialState);
const mountNode = document.getElementById('app');


render(
	<Provider store={store} key="provider">
		<Router render={(props) => <ReduxAsyncConnect {...props}/>} history={history}>
			 {routes }
		 </Router>
	</Provider>,
	mountNode
);



 