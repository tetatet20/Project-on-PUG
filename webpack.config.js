const path = require("path");
const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const PAGES_DIR = path.resolve(__dirname, "src/pages");
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

console.log(PAGES);

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
console.log("IS DEV", isDev);

const optimization = () => {
  const config = {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }
  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./main.js",
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "docs"),
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".js", ".scss"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    port: 4300,
    hot: isDev,
  },
  plugins: [
    ...PAGES.map(
      (page) =>
        new HTMLWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
        })
    ),
    // new HTMLWebpackPlugin({
    //   template: "./pages/index.pug",
    //   minify: {
    //     collapseWhitespace: isProd,
    //   },
    // }),
    new HtmlWebpackPugPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              exports: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
