var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackDevServer = require('webpack-dev-server');

module.exports = {
    entry:
    './src/entry.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './app.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module: {
        loaders: require('./loaders.js')
    },
    plugins: [
        new webpack.BannerPlugin('苟利国家生死以，岂因祸福避趋之！'),
        new ExtractTextPlugin("./styles.css"),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            inject: true
        })
    ]
}