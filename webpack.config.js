const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test:/\.css/,
        use: [
          // loaderは、下から順に適応されていく
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader:'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}