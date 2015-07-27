var path = require('path');
var webpack = require('webpack');
module.exports = {

  context: path.resolve(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  // Currently we need to add '.ts' to resolve.extensions array.
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.tag', '.es', '.html', '.scss']
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'app')
  },
  plugins: [
     new webpack.ProvidePlugin({
       // riot: 'riot/riot+compiler.js'
       riot: 'riot/riot.js'
     })
   ],

  // Add loader for .ts files.
  module: {
    // preLoaders: [
    //   { test: /\.tag/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none'} }
    // ],
    loaders: [
    {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, "app")
      ],
      loader: 'babel-loader', query: {modules: 'common'}
    },
    {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader?module=common&&rewriteImports=common'
    },
    {
      test: /\.html$|\.raw$|\.tag$/,
      loader: 'raw-loader',
      include: path.resolve(__dirname, 'app')
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass',
      include: path.resolve(__dirname, 'app')
    },
    // { test: require.resolve("./node_modules/riot/riot+compiler.js"), loader: "expose?riot" }
    ]
  }
};
