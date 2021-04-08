var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './react_mysql/app.jsx',
  mode: 'production',
  output: { path: __dirname+'/wwwroot/app', filename: 'app.webpack.bundle.js' },
  module: {
    rules: [
      {
        test: /.jsx?$/,
		exclude: /node_modules/,
		use:{
			loader: 'babel-loader',
			options:{
				presets:["@babel/env","@babel/react"]
			}
		}
      }
    ]
  },
  resolve:{
    extensions: ['.js','.jsx']
  }
};