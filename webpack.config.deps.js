const path = require('path')
const webpack = require('webpack')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    "vendor": [
      "webpack/buildin/module.js",
      // "core-js",
      //"webpack-hot-middleware/process-update.js",
      "webpack-hot-middleware/client-overlay.js",
      "ansi-regex/index.js",
      "ansi-html/index.js",
      "strip-ansi/index.js",
      "querystring/encode.js",
      "querystring/decode.js",
      "querystring/index.js",
      "html-entities/lib/xml-entities.js",
      "html-entities/lib/html4-entities.js",
      "html-entities/lib/html5-entities.js",
      "html-entities/index.js",

      // "babel-polyfill",
      "regenerator-runtime/runtime.js",
      //"react-hot-loader",
      //"lodash",
      //"react",
      //"react-dom",
      //"react-router",
      //"react-bootstrap",
      //"react-router-bootstrap",
      //"redux",
      //"react-redux",
      //"react-router-redux",
      //"redux-mock-store",
      //"redux-actions",
      //"redux-promise",
      //"redux-thunk",
      //"normalizr",
      //"reselect",
    ]
  },

  output: {
    library: "_[name]_",
    //libraryTarget: '',
    //target: '',
    pathinfo: true,
    path: path.resolve(__dirname, "lib"),
    publicPath: "/lib/",
    filename: "[name].js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "hidden-cheap-module-source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".es", ".jsx", ".js"]
  },

  // module: {
  //     loaders: [
  //         // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
  //         { test: /\.tsx?$/, loader: "ts-loader" }
  //     ],

  //     preLoaders: [
  //         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  //         { test: /\.js$/, loader: "source-map-loader" }
  //     ]
  // },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: '"production"' },
      DEBUG: false,
      __DEV__: false,
      module: { hot: true }
    }),
    new webpack.DllPlugin({
      name: "_[name]_",
      path: path.resolve(path.join(__dirname, "lib", "[name]-manifest.json"))
    }),
    // new ExtractTextPlugin("[name].css", { allChunks: true }),
    new webpack.NoErrorsPlugin(),
    //new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    //new webpack.BannerPlugin("/**compressed**/", { raw: true })
  ]
};
