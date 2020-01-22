const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/progressive-image.js',
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  output: {
    filename: 'progressive-image.js',
    path: path.resolve(__dirname, 'public')
  }
};