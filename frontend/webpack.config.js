const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./ts/app.ts",
    getStartedNew: "./getStarted/ts/new.ts",
    getStartedLoad: "./getStarted/ts/load.ts",
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  // select webpack-dev-server
  devServer: {
    compress: true,
    port: 9000,
    open: true,
  },
};
