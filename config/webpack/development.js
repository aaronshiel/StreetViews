const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

environment.plugins.append(
  "ForkTsCheckerWebpackPlugin",
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: path.resolve(__dirname, "../../tsconfig.json"),
    },
    async: false,
  })
);