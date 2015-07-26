var path = require('path');
module.exports = {

  context: path.resolve(__dirname, 'app'),
  entry: './index.es',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  // Currently we need to add '.ts' to resolve.extensions array.
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.tag', '.es']
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'app')
  },

  // Add loader for .ts files.
  module: {
    // preLoaders: [
    //   { test: /\.tag/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none'} }
    // ],
    loaders: [
    {
      test: /\.es$/, exclude: 'node_modules', loader: 'babel-loader'
    },
    {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader?module=common&&rewriteImports=common'
    }
    ]
  }
};
