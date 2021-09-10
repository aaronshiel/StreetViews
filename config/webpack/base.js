// const { webpackConfig, merge } = require("@rails/webpacker");
// const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// module.exports = merge(webpackConfig, {
//   plugins: [new ForkTSCheckerWebpackPlugin()],
// });

const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const typescript = {
  test: /\.(ts|js)$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-typescript"],
      },
    },
  ],
};

module.exports = {
  entry: {
    main: "./src/main.ts",
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [typescript],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
};