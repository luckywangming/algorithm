const path = require("path")
module.exports = {
  mode:"development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,"../example/dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
  devServer:{
    contentBase:path.resolve(__dirname,"../example"),
    host:'localhost',
    compress:true,
    port:'8090'
  }
}
