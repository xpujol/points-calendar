var webpack           = require('webpack');
var path              = require('path');
var isDev             = (process.env.NODE_ENV === 'dev');

console.log("IS DEV : " + (isDev ? "YES" : "NO"));

var config  =
{
  entry   :
  {
    points : './src/main.js'
  },
  devtool : isDev ? 'source-map' : false,
  devServer:
  {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  output  :
  {
    chunkFilename : '[name].js',
    filename      : '[name].js',
    path          : './assets/',
    publicPath    : '/assets/',
  },
  module:
  {
    loaders:
    [
      {
        test    : /\.jsx?$/,
        exclude : /(node_modules)/,
        loader  : isDev ? 'react-hot!babel!eslint-loader' : 'babel'
      }
    ]
  },
  plugins:
  [
    new webpack.DefinePlugin(
    {
      'process.env' : {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)},
      __DEV__       : isDev,
    })
  ]
};

if (isDev)
{
 config.eslint = {configFile: '.eslintrc'};
}

module.exports = config;
