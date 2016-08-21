var webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "./bundle/index.js"
  },
  loaders: [
    {
        test: /\.(js|jsx)$/,
        //exclude: /node_modules/,
        loaders: [
          // 'react-hot',
          //'babel-loader'
          'babel-loader'
        ]
      }
  ],
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: 'vendor.bundle.js'
    // }),
    new webpack.optimize.DedupePlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
};