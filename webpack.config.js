const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          // options: { presets: ["@babel/preset-env"] }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?url=false", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};