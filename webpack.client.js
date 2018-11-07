const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    filename: "index.js",
    path: __dirname + '/public'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['style-loader', {
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

module.exports = merge(clientConfig, baseConfig)
