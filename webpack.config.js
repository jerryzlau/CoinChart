// webpack.config.js
var path = require("path");

// include plugins config
module.exports = {
  context: __dirname,
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
};
