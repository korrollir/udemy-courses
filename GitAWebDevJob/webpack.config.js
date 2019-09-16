//  Built-in node method for resolving Paths
var path = require('path');


module.exports = {
  // Tell webpack the primary script files
  entry: {
    App: './app/assets/scripts/App.js',
    Vendor: './app/assets/scripts/Vendor.js'
  },
  // Sets output path and filename for the bundle script file
  output: {
    // Path needs to be an absolute path
    // Node path method sets the absolute path when given a relative path
    path: path.resolve(__dirname, './app/temp/scripts'),
    // [name] is a dynamic filename
    filename: '[name].js'
  },
  module: {
    // Expects an array of loaders, each of which is an object
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          // Use es6 code
          presets: ['es2015']
        },
        // Only apply to javascript files
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
