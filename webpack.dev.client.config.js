var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./webpack.config.js');
var autoprefixer = require('autoprefixer');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // Resolve entry paths from this context
  context: __dirname,
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './client.js'
  ],
  node: {
    fs: "empty"
  },
  output: {
    path: path.join(__dirname, '/src/dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        CanUseDom: JSON.stringify(true),
        NODE_ENV: JSON.stringify("development"),
        HOST: JSON.stringify(config.server),
        PORT: JSON.stringify(config.port)
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("app.css")
  ],
  module: {
    loaders: [
      { /* Babel */
        test: /\.js$/, 
        loader: 'babel', 
        exclude: [/node_modules/], 
        query: { presets: [ 'react-hmre' ] }
      },
      { /* Extract/Style/CSS/Sass load */
        test: /\.scss$/, 
        loader: 'style!css?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass', 
        exclude: [/node_modules/]
      },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "file-loader" },
      { test: /\.woff2$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.otf$/, loader: "file-loader" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.svg/,  loader: 'svg-url-loader'},
      { test: /\.json$/, loader: 'json'}
    ],
 
  },
 postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
 resolve: {
   extensions: ['', '.js', '.es6', '.jsx', '.scss']
 },
}



 

