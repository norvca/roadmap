const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './app/dist/'),
    filename: '[name].js',
  },
  devServer: {hot: true},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/assets/index.html',
      favicon: './app/assets/img/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
