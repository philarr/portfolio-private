var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client.js'
  ],
  node: {
    fs: "empty"
  },
  output: {
    path: path.join(__dirname, '/src/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        CanUseDom: JSON.stringify(true),
        NODE_ENV: JSON.stringify("development") 
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css")
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
        loader: 'style!css?localIdentName=[name]__[local]___[hash:base64:5]!sass', 
        exclude: [/node_modules/]
      },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "file-loader" },
      { test: /\.otf$/, loader: "file-loader" },
      { test: /\.svg/,  loader: 'svg-url-loader'},
      { test: /\.json$/, loader: 'json'}
    ],
    postLoaders: [
      {
        include: path.resolve(__dirname, '../node_modules/pixi.js'),
        loader: 'transform?brfs!transform?browserify-versionify'
      }
    ] 
  },
 resolve: {
   extensions: ['', '.js', '.es6', '.jsx', '.scss']
 },
}



 

