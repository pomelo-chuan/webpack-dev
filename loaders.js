var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        test: /src.*\.js$/,
        loader: 'babel',
        query: {
            compact: false
        }
    },
    { test: /\.html$/, loader: 'html-loader' },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
            "style",
            "css?!sass"
        )
    }
]