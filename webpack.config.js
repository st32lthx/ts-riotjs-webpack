var path = require('path');
var webpack = require('webpack');
module.exports = {

  context: path.resolve(__dirname, 'app'),
  entry: {
    main: path.resolve('app/index.js'),
    widget: path.resolve('app/widget.ui.js'),
    todo: path.resolve('app/todo.ui.js'),
    messenger: path.resolve('app/messenger.ui.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: '[name].entry.js',
    chunkFilename: "[id].chunk.js"
  },


  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'app')
  },
  plugins: [
     new webpack.ProvidePlugin({
       // riot: 'riot/riot+compiler.js'
       riot: 'riot/riot.js',
       // control: path.resolve(__dirname, 'app/riot.control')
     }),
      new webpack.optimize.CommonsChunkPlugin('common.js')
   ],

   resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.tag', '.es', '.html', '.scss'],
    // alias: {
    //   riotControl: path.resolve(__dirname, 'app/riot.control'),
    // },
    root: [ path.resolve('./app')]
   },

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
