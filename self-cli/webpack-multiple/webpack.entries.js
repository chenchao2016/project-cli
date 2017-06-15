/**
 * Created by chenchao on 2017/6/15.
 */
var path = require('path');
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entries = [];
var fileNameReg = /entries\/(?:[^\/]+\/)?(.+?)\.js/; //for windows
var entriesPath = glob.sync('entries/**/*.js', {cwd: path.resolve(__dirname, 'src')});

entriesPath.forEach(function (fileName) {
    var matches = fileName.match(fileNameReg); //[path , name]
    var name = matches[1];

    entries.push({
        name: name,
        path: path.resolve('src', fileName)
    })
});

module.exports = function (options = {}) {

    var params = {
        entry  : {},
        plugins: []
    };

    for (var i = 0; i < entries.length; i++) {
        var name = entries[i].name;
        params['entry'][name] = entries[i].path;

        params['plugins'].push(
            new HtmlWebpackPlugin({
                    title   : name,
                    template: 'src/index.pug',
                    filename: name + '.html',
                    chunks  : [name, 'vendor', 'mainfest'],
                    inject  : true,
                    hash    : false,
                    minify: { //压缩HTML文件
                        removeComments: true,//移除HTML中的注释
                        collapseWhitespace: false //删除空白符与换行符
                    }
                })
            )
    }

    return params;
};
