const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    filename: "index.js",
    path: __dirname + '/public'
  },
  mode: 'development',
}

module.exports = merge(clientConfig, baseConfig)
