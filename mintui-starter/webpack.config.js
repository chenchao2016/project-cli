const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const url = require('url');
const mockmap = require('./mockMap');
const publicPath = '';

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[hash]',
    publicPath:  publicPath
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test:/\.pug$/,
        use:['pug-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" ,// translates CSS into CommonJS
          options: {
            sourceMap: true
          }
        }, {
          loader: "less-loader", // compiles Less to CSS
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
    devServer: {
        host: '127.0.0.1',
        port: 8090,
        proxy: {
            '/admin/api': {
                target: 'http://localhost',
                changeOrigin: true,
                pathRewrite: {},
                bypass: function(req, res, proxyOptions) {

                    var apiname  = req._parsedUrl.pathname;
                    var querystring = req._parsedUrl.query;
                    var mockstring = "";

                    if(options.mock){
                        for(let key in mockmap){
                            if(key == apiname){
                                mockstring = mockmap[key];
                                console.log(key);
                                console.log(apiname);
                                console.log('------')
                                break;
                            }
                        }
                        return mockstring;
                    }else{}
                }

            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        }
    },
  devtool: '#source-map'
})
