const htmlWebpackPlugin = require('html-webpack-plugin')
const dotenvWebpack = require('dotenv-webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

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
    new extractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader?outputPath=images/'
      },
      {
        test: /\.(css)$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
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