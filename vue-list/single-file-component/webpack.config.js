var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'        
      }      
    ]
  }
}
