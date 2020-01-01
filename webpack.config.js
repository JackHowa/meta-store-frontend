const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  optimization: {
    // via https://stackoverflow.com/questions/49053215/webpack-4-how-to-configure-minimize
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    // via https://www.netlify.com/blog/2017/11/30/starting-with-webpack-from-scratch/
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./index.html'),
    }),
  ]
};