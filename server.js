/* 
 * PMHC.co Portfolio 2015 
 * server.js
 */
 
import React from 'react'
import DOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Express from 'express'
import { join } from 'path';
import App from './components'
import Reducer from './reducers'


const $ = Express();


//middlware
//var middleware = require('./middlewares')(app);
$.use((req, res, next) => {
	console.log(req.method + ' -> ' + req.url);
	next();
})
$.use(Express.static(__dirname + '/public'));

 
const router = require('./routes')($);

$.get('/', (req, res) => {
	res.sendFile(join(__dirname + '/public/index.html'));
});

$.get('/test', (req, res) => {

	//Generate the store to be sent along with the page
 

	//Where you send the page...
	res.send(
		/*
			Boilerplate HTML goes here 
		*/
		//Where you send the HTML generated from the React DOM
		DOM.renderToString(
 
				<App />
	 

		)
	);
});


 

$.listen(8000);
console.log("PMHC.co started.")
