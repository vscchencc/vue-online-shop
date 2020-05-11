<<<<<<< HEAD
const path = require('path')
// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist/',
=======
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: ['babel-polyfill', './src/main.js'], 
  output: {
    path: path.resolve(__dirname, './dist'), 
    // publicPath: '/dist/', 
>>>>>>> d00ac21... 'twice'
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js'
  },
  performance: {
<<<<<<< HEAD
    hints: 'warning',
    maxEntrypointSize: 50000000,
    maxAssetSize: 30000000,
    // 只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
=======
    hints:'warning',
    maxEntrypointSize: 50000000,
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js');
>>>>>>> d00ac21... 'twice'
    }
  },
  optimization: {
    namedChunks: true,
    moduleIds: 'hashed',
    splitChunks: {
      maxInitialRequests: 6,
      cacheGroups: {
        dll: {
<<<<<<< HEAD
          chunks: 'all',
=======
          chunks:'all',
>>>>>>> d00ac21... 'twice'
          test: /[\\/]node_modules[\\/](core-js|vue|vue-router)[\\/]/,
          name: 'dll',
          priority: 2,
          enforce: true,
          reuseExistingChunk: true
        },
        superSlide: {
<<<<<<< HEAD
          chunks: 'all',
=======
          chunks:'all',
>>>>>>> d00ac21... 'twice'
          test: /[\\/]src[\\/]/,
          name: 'superSlide',
          priority: 1,
          enforce: true,
          reuseExistingChunk: true
        },
        commons: {
          name: 'commons',
<<<<<<< HEAD
          minChunks: 2, // Math.ceil(pages.length / 3), 当你有多个页面时，获取pages.length，至少被1/3页面的引入才打入common包
          chunks: 'all',
=======
          minChunks: 2,//Math.ceil(pages.length / 3), 当你有多个页面时，获取pages.length，至少被1/3页面的引入才打入common包
          chunks:'all',
>>>>>>> d00ac21... 'twice'
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
<<<<<<< HEAD
      name: 'manifest'
=======
        name: 'manifest'
>>>>>>> d00ac21... 'twice'
    }
  },
  devtool: false,
  resolve: {
    alias: {
<<<<<<< HEAD
      vue$: 'vue/dist/vue.esm.js',
=======
      'vue$': 'vue/dist/vue.esm.js',
>>>>>>> d00ac21... 'twice'
      '@': path.join(__dirname, './src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
<<<<<<< HEAD
      filename: 'css/[name]-buddle.css'
    }),
=======
  　　filename: "css/[name]-buddle.css"
　　 }),
>>>>>>> d00ac21... 'twice'
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true
      }
<<<<<<< HEAD
    })
=======
    }),
>>>>>>> d00ac21... 'twice'
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
<<<<<<< HEAD
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
=======
      { 
          test: /\.css$/,
          use: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader'
          ],
      },
      {
          test: /\.scss$/,
          use: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
          ],
      },
      {
          test: /\.sass$/,
          use: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader?indentedSyntax'
          ],
>>>>>>> d00ac21... 'twice'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
<<<<<<< HEAD
        exclude: /node_modules/
=======
        exclude: /node_modules/  
>>>>>>> d00ac21... 'twice'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: './images',
<<<<<<< HEAD
          publicPath: './images',
=======
          publicPath:'./images',
>>>>>>> d00ac21... 'twice'
          esModule: false
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
<<<<<<< HEAD
            scss: [
=======
            'scss': [
>>>>>>> d00ac21... 'twice'
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
<<<<<<< HEAD
            sass: [
=======
            'sass': [
>>>>>>> d00ac21... 'twice'
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      }
    ]
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> d00ac21... 'twice'
