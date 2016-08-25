/* 
 * PMHC.co Portfolio 2015 
 * server.js
 */
import configureStore from './common/store/configureStore' /* ReduxDevTools import */
import Express from 'express'
import Compression from 'compression'
import { join } from 'path'
import React from 'react'
import DOM from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import routes from './common/routes'
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect'
import path from 'path'
import api from './api'

const $ = Express();
let css = '';
// DEV IMPORTS
// ================================================

if (process.env.NODE_ENV !== 'production') {  
  console.log('Development mode => Load HMR')

  //let Dashboard = require('webpack-dashboard');
  //let DashboardPlugin = require('webpack-dashboard/plugin');
  // let dashboard = new Dashboard();

  let webpack = require('webpack');
  let webpackConfig = require('../webpack.dev.client.config.js'),
  compiler = webpack(webpackConfig);
  //compiler.apply(new DashboardPlugin(dashboard.setData));

  $.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  $.use(require('webpack-hot-middleware')(compiler));
}
else {
  css = '<link rel="stylesheet" type="text/css" href="/static/styles.css" />';
  $.use(Compression());
}

// MIDDLEWARE
// ================================================

$.use((req, res, next) => {
  console.log(req.method + ' -> ' + req.url);
  next();
})

// ROUTES
// ================================================

$.use('/static', Express.static(path.join(__dirname, 'dist')));
$.use('/api', api);
$.get('*', (req, res) => {


  match({ routes, location: req.url }, (err, redirect, renderProps) => {
    if (err) res.status(500).send(err.message)
    else if (redirect) res.redirect(redirect.pathname + redirect.search)
    else if (!renderProps) res.status(404).send('Not found');
    /* all good */
    else {
      const store = configureStore();
      /* Get async props before rendering */
      loadOnServer({ ...renderProps, store }).then(() => {

        const ReactDOM = DOM.renderToString(
          <Provider store={store} key="provider">
            <ReduxAsyncConnect { ...renderProps } />
          </Provider>
        );

        res
        .status(200)
        .send(renderHTML(ReactDOM, JSON.stringify(store.getState()), css));
      })
    }
  })
});


$.listen(process.env.PORT, process.env.HOST);
console.log("😎 PMHC.co started @ "+ process.env.HOST + ":"+ process.env.PORT +". (" + process.env.NODE_ENV + ")");

// INITIAL TEMPLATE
// ================================================
const renderHTML = (app, store, css) => (`<!doctype html>
<!--
Check out my github to see the unbundled code! => github.com/philarr/portfolio
-->
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="author" content="Philip Chung">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <title>Philip Chung</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    ${css}
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
</html>`);


 