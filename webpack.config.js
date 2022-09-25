const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  entry: {
    index: path.resolve(__dirname, "src"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "build"),
    port: 5001, //default 8080
    open: true,
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        use: ["ts-loader"],
      },
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg|ttf|woff|woff2)$/,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
