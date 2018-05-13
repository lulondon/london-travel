const merge = require('webpack-merge')
const CleanWebpack = require('clean-webpack-plugin')
const Uglifyjs = require('uglifyjs-webpack-plugin')

const common = require('./webpack.conf')

const { app } = require('./paths')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new Uglifyjs({
      sourceMap: true
    }),
    new CleanWebpack(['dist'], { root: app })
  ]
})
