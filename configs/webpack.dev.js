const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    port: 3001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
  },
}); 