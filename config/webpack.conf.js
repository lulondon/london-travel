const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const dotenvWebpack = require('dotenv-webpack')

const paths = require('./paths')

const { app, build, src } = paths

module.exports = {
  entry: `${src}/index.jsx`,
  output: {
    path: build,
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'London Travel',
      template: `${src}/template/index.html`
    }),
    new dotenvWebpack({
      path: `${app}/.env`,
      systemvars: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000,outputPath=fonts/',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?outputPath=fonts/'
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader?outputPath=images/'
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    tls: 'empty',
    net: 'empty',
    fs: 'empty'
  }
}