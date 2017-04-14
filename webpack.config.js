// our webpack.config.js file located in project root
//  https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed

var webpack = require('webpack');
var path = require('path');                // a useful node path helper library

var config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),                  // store the bundled output in dist/bundle.js
    filename: 'mouse_index.js'                   // specifying file name for our compiled assets
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  devServer: {
      //contentBase: path.join(__dirname, "dist"),
      inline: true,
      port: 5300
  },
  module: {
    rules: [
      // telling webpack which loaders we want to use.  For now just run the
      // code through the babel-loader.  'babel' is an alias for babel-loader
      {
        loader : 'babel-loader',
        query :{
            presets:['es2015','react']
        },
        test: /\.js$/,
        exclude: /node_modules/ }, {
        loader : 'babel-loader',
        query :{
            presets:['es2015','react']
        },
        test: /\.jsx$/,
        exclude: /node_modules/ }
    ],
    loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
  }
}

module.exports = config;
