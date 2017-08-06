/**
 * Created by chenchao on 2017/7/29.
 */

const context = "/api";

let apiMaps = {
    "/system/menu/list": "/mock/menu.json"
};
let apis = {};

for (let api in apiMaps) {
    apis[context + api] = apiMaps[api];
}

module.exports = apis;