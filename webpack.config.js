module.exports = {
 entry: "./app.js",
 output: {
   filename: "./public/bundle.js"
 },
 module: {
   loaders: [
     {
       test: /.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6', '.jsx']
 },
}