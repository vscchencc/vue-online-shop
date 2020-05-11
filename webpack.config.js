<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
const path = require('path')
// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/',
    filename: 'build.js'
  },
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    overlay: true
<<<<<<< HEAD
=======
=======
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: ['babel-polyfill', './src/main.js'], 
  output: {
    path: path.resolve(__dirname, './dist'), 
    // publicPath: '/', 
    filename: 'build.js' 
  },
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true, 
    overlay: true,
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
    // proxy: {
    //   '/' : {
    //     target:" http://localhost",
    //     changeOrigin: true
    //   }
    // }
  },
  resolve: {
    alias: {
<<<<<<< HEAD
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/src')
=======
<<<<<<< HEAD
      vue$: 'vue/dist/vue.esm.js',
=======
      'vue$': 'vue/dist/vue.esm.js',
>>>>>>> 06c207c... 'twice'
      '@': path.join(__dirname, './src')
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
<<<<<<< HEAD
          minChunks: 2, // Math.ceil(pages.length / 3), 当你有多个页面时，获取pages.length，至少被1/3页面的引入才打入common包
=======
          minChunks: 2,//Math.ceil(pages.length / 3), 当你有多个页面时，获取pages.length，至少被1/3页面的引入才打入common包
>>>>>>> 06c207c... 'twice'
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
<<<<<<< HEAD
      name: 'manifest'
=======
        name: 'manifest'
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
<<<<<<< HEAD
      filename: 'css/[name]-buddle.css'
    }),
=======
<<<<<<< HEAD
      filename: 'css/[name]-buddle.css'
    }),
=======
  　　filename: "css/[name]-buddle.css"
　　 }),
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true
      }
    })
  ],
  module: {
    rules: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
<<<<<<< HEAD
=======
=======
      { 
          test: /\.css$/,
          use: [
              'vue-style-loader',
              'css-loader'
          ],
      },
      {
          test: /\.scss$/,
          use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
          ],
      },
      {
          test: /\.sass$/,
          use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
          ],
>>>>>>> 06c207c... 'twice'
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
          esModule: false
        }
      },
      {
<<<<<<< HEAD
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
=======
<<<<<<< HEAD
>>>>>>> d00ac21... 'twice'
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        // 预处理
        enforce: 'pre'
      },
      {
<<<<<<< HEAD
=======
=======
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
<<<<<<< HEAD
            scss: [
=======
<<<<<<< HEAD
            scss: [
=======
            'scss': [
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
<<<<<<< HEAD
            sass: [
=======
<<<<<<< HEAD
            sass: [
=======
            'sass': [
>>>>>>> 06c207c... 'twice'
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
<<<<<<< HEAD
}
=======
};
>>>>>>> 06c207c... 'twice'
>>>>>>> d00ac21... 'twice'
