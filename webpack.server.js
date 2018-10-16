const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/build'
  },
  externals: [nodeExternals()]
}

module.exports = merge(serverConfig, baseConfig)
