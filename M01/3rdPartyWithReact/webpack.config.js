const path = require('path')
const webpack = require ('webpack')

module.exports = {
    devtool: 'source-map', // Maior clareza ao debugar
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{ // Compilar com Babel todos arquivos com extensão .js presentes em src
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
}