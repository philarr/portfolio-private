/* 
 * PMHC.co Portfolio 2015 
 * server.js
 */
 

import configureStore from '../common/store/configureStore' /* ReduxDevTools import */

import Express from 'express'
import { join } from 'path'
import React from 'react'
import DOM from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Routes from '../common/routes'

 
const $ = Express();


/* Dev imports */
 
if (process.env.NODE_ENV !== 'production') {  
    console.log('Development mode => Load HMR')
    let webpack = require('webpack'),
    webpackConfig = require('../webpack.dev.config.js'),
    compiler = webpack(webpackConfig);

  $.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  $.use(require('webpack-hot-middleware')(compiler));
}



//middlware
//var middleware = require('./middlewares')(app);
 
$.use((req, res, next) => {
  console.log(req.method + ' -> ' + req.url);
  next();
})
 
 

$.use('/static/', Express.static(__dirname + '/dist/'));
 
 
$.get('*', (req, res) => {

  /* Route match */
  match({ routes: Routes, location: req.url }, (err, redirect, props) => {
    if (err) { 
      res.status(500).send(err.message)
    }
    else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    }
    else if (props) {

      const store = configureStore({'Test': 'TestTestTest'});
      const ReactDOM = DOM.renderToString(
        <Provider store={store}>
         <RouterContext {...props} />
        </Provider>
      );
      res.send(renderHTML(ReactDOM, JSON.stringify(store.getState())));

    }
    else {
      res.status(404).send('Not found');
    }
  })
});
 


const renderHTML = (app, store) => (`
<!doctype html>
<html>
  <head>
    <title>PMHC.co</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/static/styles.css" />
    <script src="https://use.typekit.net/ivy1pbs.js"></script>
    <script>try{Typekit.load({async:true});}catch(e){}</script> 

  </head>
  <body>
    <div id="app">${app}</div>
    <script>
      window._initialState = ${store}
    </script>
    <script src="/static/bundle.js"></script>
  </body>
</html>
`);



$.listen(8001);
console.log("PMHC.co started. (" + process.env.NODE_ENV + ")");


