const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        app:"./src/index.js",
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new MiniCSSExtractPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.scss$/, 
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude:"/node_modules/",
                loader: "babel-loader"
            }
        ]
    }
}