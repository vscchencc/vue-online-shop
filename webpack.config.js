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
    contentBase: path.resolve(__dirname, 'dist'),
    // 启动的服务端口
    port: 8000,
    // 通过localhost或IP进行访问
    host: 'localhost',
    // 热加载，功能：只渲染所改组件的页面效果，不会全部刷新，其他页面数据依然会存在
    hot: true,
    historyApiFallback: true,
    overlay: true
    // proxy: {
    //   '/' : {
    //     target:" http://localhost",
    //     changeOrigin: true
    //   }
    // }
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/src')
    }
  },
  optimization: {
    namedChunks: true,
    moduleIds: 'hashed',
    splitChunks: {
      maxInitialRequests: 6,
      cacheGroups: {
        dll: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/](core-js|vue|vue-router)[\\/]/,
          name: 'dll',
          priority: 2,
          enforce: true,
          reuseExistingChunk: true
        },
        superSlide: {
          chunks: 'all',
          test: /[\\/]src[\\/]/,
          name: 'superSlide',
          priority: 1,
          enforce: true,
          reuseExistingChunk: true
        },
        commons: {
          name: 'commons',
          minChunks: 2, // Math.ceil(pages.length / 3), 当你有多个页面时，获取pages.length，至少被1/3页面的引入才打入common包
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-buddle.css'
    }),
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
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        // 预处理
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      }
    ]
  }
}
