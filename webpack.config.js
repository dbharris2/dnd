var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'public/scripts');
var BUILD_DIR = path.resolve(__dirname, 'public/bin');

var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        compact: true,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;