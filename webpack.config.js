/* global __dirname, module, require */
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
    }),
    // new webpack.optimize.UglifyJsPlugin(), // uncomment this property to enable minimization
  ],
  entry: {
    app: ['babel-polyfill', './public/app/app.js'],
  },
  output: {
    path: __dirname + '/public/dist/',
    publicPath: '/public/dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
        exclude: /(node_modules|lib|server|test|migrations|seeds)/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|eot|svg|gif|png|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, // https://www.npmjs.com/package/font-awesome-webpack#usage
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?$!expose-loader?jQuery',
      },
    ],
  },
  node: {
    'fs': 'empty',
    'net': 'empty',
    'tls': 'empty',
    'dns': 'empty',
    'boom': 'empty',
    'hapi': 'empty',
    'inert': 'empty',
    'joi': 'empty',
    'knex': 'empty',
    'mysql': 'empty',
    'hapi-auth-jwt': 'empty',
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.json'],
    modules: [
      'node_modules',
      'lib',
    ],
  },
};
