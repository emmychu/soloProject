const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const e = require('express');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/': 'http://localhost:3000',
    },
    // static: {
    //   directory: path.resolve(__dirname, 'build'),
    //   publicPath: '/',
    // },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        },
      },
      {
        test: /\.scss?/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
