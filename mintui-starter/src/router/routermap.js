/**
 * Created by chenchao on 2017/7/28.
 */

let routerMap = [
    /*----------*/
    /*协议确认页面*/
    /*----------*/
    {
        path: '/agreement',
        tpl : r => require.ensure([], () => r(require("~/pages/agreement.vue")), "agreement"),
        name: 'agreement'
    }
];

export  default routerMap;