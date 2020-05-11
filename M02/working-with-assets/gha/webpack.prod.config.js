'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({

  entry: 
    path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js' // hash -> fazer cache na aplicação
  },

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    // Evita duplicação de arquivos
    new webpack.optimize.DedupePlugin(),
    // Ordena para plugins que mais leves sejam carregados primeiro
    new webpack.optimize.OccurrenceOrderPlugin(),
    
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),


    
    new HtmlPlugin({
      title: 'GitHub App',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }]
  }
})
