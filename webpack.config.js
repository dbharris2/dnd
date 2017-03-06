var path = require('path');
var webpack = require('webpack');

var JSX_DIR = path.resolve(__dirname, 'jsx');
var APP_ENTRY = JSX_DIR + '/main.jsx';
var BUILD_DIR = path.resolve(__dirname, 'public/bin');
var NODE_MODULES_DIR = path.resolve(__dirname, './node_modules');

var config = {
  cache: true,
  devtool: "eval",
  entry: {
    app: APP_ENTRY,
    vendor: [
      'axios',
      'flexbox-react',
      'griddle-react',
      'material-ui',
      'react',
      'react-collapsible',
      'react-dom'
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
        loader : 'babel',
        query: {
          cacheDirectory: true,
        },
        exclude: [NODE_MODULES_DIR]
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
    root: JSX_DIR,
    modulesDirectories: [NODE_MODULES_DIR]
  }
};

module.exports = config;
