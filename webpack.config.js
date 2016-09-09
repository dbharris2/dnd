var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'public/scripts');
var BUILD_DIR = path.resolve(__dirname, 'public/bin');

var config = {
  cache: true,
  devtool: "eval",
  entry: {
    app: APP_DIR + '/main.jsx',
    vendor: [
      'jquery',
      'react',
      'react-dom',
      'griddle-react'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          cacheDirectory: true,
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_DIR,
    modulesDirectories: ['node_modules']
  }
};

module.exports = config;
