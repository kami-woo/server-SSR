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
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      }]
    }]
  }
}

module.exports = merge(serverConfig, baseConfig)
