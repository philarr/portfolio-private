import 'babel-polyfill'
import React from 'react'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Routes from '../common/routes'
import configureStore from '../common/store/configureStore'


const initialState = window._initialState;
const store = configureStore(initialState);
const rootElement = document.getElementById('app')

render(
		<Provider store={store}>
			<Router routes={Routes} history={browserHistory} />
		</Provider>
,rootElement)



