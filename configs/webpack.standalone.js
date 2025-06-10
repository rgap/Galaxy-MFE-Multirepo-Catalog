const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    main: path.join(__dirname, "../src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        STANDALONE_MODE: JSON.stringify("true"),
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      title: "Catalog App (Standalone)",
      filename: "index.html",
      chunks: ["main"],
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      // Mock cart remote for standalone mode
      "cart/CartContext": path.resolve(__dirname, "../src/mocks/cartMock.js"),
      "cart/useCart": path.resolve(__dirname, "../src/mocks/cartMock.js"),
      // Mock common components for standalone mode
      "mfe-common-components": path.resolve(__dirname, "../src/mocks/commonComponentsMock.js"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    port: 3001,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },
};
