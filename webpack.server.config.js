var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/server.js'
  ],
  output: {
    path: path.join(__dirname, '/src/dist'),
    filename: '../server.dev.js',
    publicPath: '/static/'
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        CanUseDom: JSON.stringify(false),
        NODE_ENV: JSON.stringify("development") 
      }
    }),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [
      { /* Babel */
        test: /\.js$/, 
        loader: 'babel', 
        exclude: [/node_modules/], 
       // query: { presets: [ 'react-hmre' ] }
      },
      { /* Extract/Style/CSS/Sass load */
        test: /\.scss$/, 
        loader: 'css?localIdentName=[name]__[local]___[hash:base64:5]!sass', 
        exclude: [/node_modules/]
      },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "file-loader" },
      { test: /\.otf$/, loader: "file-loader" },
      { test: /\.svg/,  loader: "svg-url-loader"},
      { test: /\.json$/, loader: "json"},
    ],
    postLoaders: [
      {
        include: path.resolve(__dirname, '../node_modules/pixi.js'),
        loader: 'transform?brfs'
      }
    ] 
  },
 resolve: {
   extensions: ['', '.js', '.es6', '.jsx', '.scss']
 },
}



 

