var path    = require('path')
var webpack = require('webpack')
var glob    = require('glob')

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin        = require('copy-webpack-plugin')

var getEntries = require('./webpack.entries');

module.exports = function (options = {}) {

    console.log(options);
    var {entry, plugins} = getEntries(options);

    var config = {
        entry : {
            vendor: './src/vendor'
        },
        output: {
            path         : path.resolve(__dirname, './dist'),
            filename     : 'js/[name].js?[hash:8]',
            publicPath   : "",
            chunkFilename: '[id].js?[chunkhash]',
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test   : /\.js$/,
                    use    : ['babel-loader'],
                    exclude: /node_modules/
                },
                //模板引擎处理
                {
                    test: /\.html$/,
                    use : [{
                        loader : 'html-loader',
                        options: {
                            root : path.resolve(__dirname, 'src'),
                            attrs: ['img:src', 'link:href']
                        }
                    }]
                },
                {
                    test: /\.pug$/,
                    use : ['pug-loader']
                },
                //样式处理
                {
                    test: /\.css$/,
                    use : ExtractTextWebpackPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
                },
                {
                    test: /\.less$/,
                    use : ExtractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use     : [
                            // 通过 loader 参数激活 source maps
                            {
                                loader : 'css-loader',
                                options: {sourceMap: true, importLoaders: 1}
                            },
                            {
                                loader : 'less-loader',
                                options: {sourceMap: true}
                            }]
                    })
                },
                //文件处理
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use : [{
                        loader : 'file-loader',
                        options: {
                            name: 'images/[name].[ext]?[hash]', limit: 8192
                        }
                    }]
                }
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor', 'mainfest']
            }),

            new ExtractTextWebpackPlugin({
                filename : 'style/[name].css?[hash:8]',
                allChunks: true
            }),

            new CopyWebpackPlugin([{
                from: path.resolve(__dirname, "./src/assets/images"),
                to  : path.resolve(__dirname, "./dist/images")
            }])
        ],

        resolve: {
            alias: {
                "~": path.resolve(__dirname, 'src'),
                '@': path.resolve(__dirname, 'node_modules')
            }
        },

        devServer  : {
            historyApiFallback: true,
            noInfo            : false,
            port              : 8081
        },
        performance: {
            hints: false
        },
        devtool    : '#source-map'
    };

    config.plugins = config.plugins.concat(plugins);

    Object.assign(config.entry, entry);

    return config;
};