const path = require('path');
const webpack = require('webpack');
const config = require('./package.json');

const PROD = (process.env.NODE_ENV === 'production');

console.log(PROD);

// const WebpackBrowserPlugin = require('webpack-browser-plugin');
// plugins.push(
//   new WebpackBrowserPlugin({
//     browser: "Chrome"
//   })
// )


let plugins = [];

PROD ? plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }))
  : '' ;

module.exports = {
  entry: path.resolve(__dirname, config.entry),
  devtool: "source-map",
  output: {
    path: __dirname,
    filename: PROD ? "build/keybinder.min.js" : "build/keybinder.js",
    library: "keybinder",
    libraryTarget: "umd"
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
  },
  plugins: plugins
}
