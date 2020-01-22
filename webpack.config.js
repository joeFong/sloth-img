const path = require('path');

module.exports = {
  entry: './src/sloth-img.js',
  mode: 'production',
  output: {
    filename: 'sloth-img.js',
    path: path.resolve(__dirname, 'public')
  }
};