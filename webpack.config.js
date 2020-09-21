const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};
