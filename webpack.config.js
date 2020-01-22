const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/sloth-img.js',
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  output: {
    filename: 'sloth-img.js',
    path: path.resolve(__dirname, 'public')
  }
};