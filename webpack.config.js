const path = require('path');

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
            loader:'style-loader',
          },
          {
            loader:'css-loader',
          },
        ],
      },
    ],
  },
}