var path = require('path')
var webpack = require('webpack')
var glob = require('glob')

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

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
            publicPath   : '',
            filename     : 'js/[name].js?[hash:8]',
            chunkFilename: '[id].js?[chunkhash]',
        },
        module: {
            rules: [
                {
                    test   : /\.js$/,
                    use : ['babel-loader'],
                    exclude: /node_modules/
                },
                //模板引擎处理
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            root: path.resolve(__dirname, 'src'),
                            attrs: ['img:src', 'link:href']
                        }
                    }]
                },
                {
                    test: /\.pug$/,
                    use: ['pug-loader']
                },
                //样式处理
                {
                    test  : /\.css$/,
                    use: ExtractTextWebpackPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
                },
                //文件处理
                {
                    test   : /\.(png|jpg|gif|svg)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]'
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
                filename : 'css/[name].css?[hash:8]',
                allChunks:true
            })
        ],

        devServer  : {
            historyApiFallback: true,
            noInfo            : true,
            port              : 8088
        },
        performance: {
            hints: false
        },
        devtool    : '#eval-source-map'
    };

    config.plugins = config.plugins.concat(plugins);

    Object.assign(config.entry, entry);

    return config;
};