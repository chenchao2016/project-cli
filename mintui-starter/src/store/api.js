/**
 * Created by fuzl on 2017/3/4.
 * 所有的请求地址
 */
import Vue from 'vue'
import './http'

/*接口上下文*/
const context = '/api/';
var fetchApis = {};
var APIS = {};
var setApis = {

    /*----------*/
    /* alias : interface */
    /* POST_ALIAS 使用POST方式提交*/
    /* ALIAS或者GET_ALIAS 使用GET方式提交*/
    /*----------*/

    POST_RIGHT         : '/system/role/setting',
};

for (let api in setApis) {
    APIS[api] = context + setApis[api]
}


const postPrefix = ['post', 'save', 'delete'];
function isPostAction(key) {
    key = key.toLowerCase();
    return postPrefix.some(function (action) {
        return key.indexOf(action) == 0;
    });
}
const vueInstance = new Vue;
for (let action in APIS) {
    let isPost = isPostAction(action);
    let defaultQuery = {
        body  : {},
        params: {}
    };
    fetchApis[action] = function (store, queryData = defaultQuery) {
        // get请求{params: {}} post请求{body:{}}
        let copy4PostQuery = Object.assign({}, queryData);
        copy4PostQuery.params = {};
        var args = [].concat(isPost ? [queryData.params, copy4PostQuery] : queryData);
        var promise = vueInstance.$http[isPost ? 'post' : 'get'](APIS[action], ...args);
        return promise;
    }
}
export default fetchApis;


