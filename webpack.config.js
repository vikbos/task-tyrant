const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(
        process.env.REACT_APP_FIREBASE_API_KEY
      ),
      'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
      ),
      'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_PROJECT_ID
      ),
      'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
      ),
      'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
      ),
      'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_APP_ID
      ),
      'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
      ),
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
};
