var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');
var config = require('./webpack.config.js');

var autoprefixer = require('autoprefixer');
var mqpacker = require("css-mqpacker");

var loaders = [
      { /* Babel */
        test: /\.js$/, 
        loader: 'babel', 
        exclude: [/node_modules/]
      },
      { /* Extract/Style/CSS/Sass load */
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract('style', 'css?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass'), 
        exclude: [/node_modules/]
      },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "file-loader" },
      { test: /\.otf$/, loader: "file-loader" },
      { test: /\.svg/,  loader: 'svg-url-loader'},
      { test: /\.json$/, loader: 'json'},
    ];

/* Multiple config build */

module.exports = [  
/*********** Bundle client *************/
{
  name: 'Client',
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './src/client.js'
  ],
  output: {
    path: path.join(__dirname, './build/dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        CanUseDom: JSON.stringify(true),
        NODE_ENV: JSON.stringify("production"),
        HOST: JSON.stringify(config.server),
        PORT: JSON.stringify(config.port)
      }
    }),
    new ExtractTextPlugin("app.css"), 
  ],
  module: {
    loaders: loaders,
  },
 postcss: [ autoprefixer({ browsers: ['last 2 versions'] }), mqpacker({ sort: true }) ],
 resolve: {
   extensions: ['', '.js', '.es6', '.jsx', '.scss']
 },
},
/*********** Bundle server for universal *************/
{
  name: 'Server',
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './src/server.js'
  ],
  output: {
    path: path.join(__dirname, './build/dist/'),
    filename: '../server.js',
    publicPath: '/static/'
  },
  /* dont bundle node_modules */
  externals: [nodeExternals()],
  target: 'node',
  /* dont use webpack's mock */
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        CanUseDom: JSON.stringify(false),
        NODE_ENV: JSON.stringify("production"),
        HOST: JSON.stringify(config.server),
        PORT: JSON.stringify(config.port)
      }
    }),
    new ExtractTextPlugin("app.css"), 
  ],
  module: {
    loaders: loaders,
  },
 postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
 resolve: {
   extensions: ['', '.js', '.es6', '.jsx', '.scss']
 },
}

];
