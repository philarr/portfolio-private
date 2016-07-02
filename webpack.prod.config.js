var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'source-map',
  entry: [
    './client/client.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        CanUseDom: JSON.stringify(true),
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new ExtractTextPlugin("styles.css")
  ],

  module: {
    loaders: [
      { /* Babel */
        test: /\.js$/, 
        loader: 'babel', 
        exclude: [/node_modules/]
      },
      { /* Extract/Style/CSS/Sass load */
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract('style', 'css?localIdentName=[name]__[local]___[hash:base64:5]!sass'), 
        exclude: [/node_modules/]
      },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "file-loader" },
      { test: /\.otf$/, loader: "file-loader" },
      { test: /\.svg/,  loader: 'svg-url-loader'}
    ]
  },
 resolve: {
   extensions: ['', '.js', '.es6', '.jsx', '.scss']
 },
}
