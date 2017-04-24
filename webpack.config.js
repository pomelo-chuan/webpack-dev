var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackDevServer = require("webpack-dev-server");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var constants = require("./constants");

module.exports = {
    entry:
    "./src/entry.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "./app.js"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module: {
        loaders: require("./loaders.js")
    },
    externals: {
        "angular": "angular",
    },
    plugins: [
        new CleanWebpackPlugin("dist"),
        new webpack.BannerPlugin("苟利国家生死以，岂因祸福避趋之！"),
        new ExtractTextPlugin("./styles.css"),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "./index.html",
            inject: true
        }),
        new webpack.DefinePlugin({
            "window.REQUEST_PATH": JSON.stringify(constants.REQUEST_PATH),
            "REQUEST_PATH": JSON.stringify(constants.REQUEST_PATH),
            "process.env": JSON.stringify(process.env)
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            mangle: false,
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        }),
    ]
}