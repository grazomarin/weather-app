const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff2|woff|otf|ttf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /(src).\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
