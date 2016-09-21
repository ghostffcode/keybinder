const path = require('path');
const config = require('./package.json');

module.exports = {
  entry: path.resolve(__dirname, config.main),
  devtools: "source_map",
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\es6?$/,
        exclude: /node_modules/,
        loader: "babel"
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
