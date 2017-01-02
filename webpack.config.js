const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'index': [
      'webpack-hot-middleware/client?reload=true',
      'regenerator-runtime/runtime.js',
      './src/index.js'
    ]
  },
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "lib"),
    publicPath: "/lib/",
    filename: "bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".es", ".jsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['babel-preset-latest']
        }  
      },
      //{ test: /\.ts$/, loader: "ts-loader" },
      //{ test: /\.tsx$/, loaders: ["react-hot", "ts-loader"], include: path.join(__dirname, 'src') },
      //{ test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], include: path.join(__dirname, 'src') }
    ],

    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require("./lib/vendor-manifest.json")
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        //NODE_ENV: '"production"'
        NODE_ENV: '"development"'
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
};
