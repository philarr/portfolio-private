'use strict';

var _configureStore = require('./common/store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _routes = require('./common/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ReduxDevTools import */

var $ = (0, _express2.default)();

/* Dev imports */

/* 
 * PMHC.co Portfolio 2015 
 * server.js
 */

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode => Load HMR');
  var webpack = require('webpack'),
      webpackConfig = require('./webpack.dev.config.js'),
      compiler = webpack(webpackConfig);

  $.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  $.use(require('webpack-hot-middleware')(compiler));
}

//middlware
//var middleware = require('./middlewares')(app);

$.use(function (req, res, next) {
  console.log(req.method + ' -> ' + req.url);
  next();
});

$.use('/static/', _express2.default.static(__dirname + '/dist/'));

$.get('*', function (req, res) {

  /* Route match */
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {

      var store = (0, _configureStore2.default)({ 'Test': 'TestTestTest' });
      var ReactDOM = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.RouterContext, props)
      ));
      res.send(renderHTML(ReactDOM, JSON.stringify(store.getState())));
    } else {
      res.status(404).send('Not found');
    }
  });
});

var renderHTML = function renderHTML(app, store) {
  return '\n<!doctype html>\n<html>\n  <head>\n    <title>PMHC.co</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>\n    <link rel="stylesheet" type="text/css" href="/static/styles.css" />\n    <script src="https://use.typekit.net/ivy1pbs.js"></script>\n    <script>try{Typekit.load({async:true});}catch(e){}</script> \n\n  </head>\n  <body>\n    <div id="app">' + app + '</div>\n    <script>\n      window._initialState = ' + store + '\n    </script>\n    <script src="/static/bundle.js"></script>\n  </body>\n</html>\n';
};

/*

$.get('/test', (req, res) => {
 res.sendFile(join(__dirname + '/public/index.html'));
});

*/

$.listen(8001);
console.log("PMHC.co started. (" + process.env.NODE_ENV + ")");