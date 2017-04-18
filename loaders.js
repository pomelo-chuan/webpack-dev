var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
    { test: /\.js$/, loader: "babel", query: { compact: false } }
]