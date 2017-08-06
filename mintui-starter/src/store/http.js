/**
 * Created by fuzl on 2017/3/3.
 */
import Vue from 'vue'
import VueResource from 'vue-resource';
Vue.use(VueResource);
// Http Global
Vue.http.options.root = '/edu';
Vue.http.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
Vue.http.options.emulateJSON = true;
const requestDebug = true;
// interceptors
Vue.http.interceptors.push(function(request, next) {
    next((response)=>{
        if(!response.body.success){
            // let resa={body:response.body.error};
            return Promise.reject(response);
        }
        switch (response.status) {
            case 200:
                if (response.body.hasOwnProperty('success')) {
                    if (response.body.success) {
                        if(response.body.message!==''){
                            this.$message(response.body.message,'success');
                        }

                        if(response.body.data.length!==0){
                            response.body = response.body.data;
                        }

                    } else {
                        // 先行resolve
                        return Promise.resolve(response.body);
                    }
                }
                break;
            case 400:
                break;
            case 404:
                notify('error', '访问地址或服务不存在', this);
                break;
            case 500:
            case 501:
            case 502:
                notify('error', '服务暂时不可用', this);
                break;
            default:
                notify('error', response.statusText, this);
        }
    });
});
function getVueInstance(){
    if (getVueInstance.instance) {
        return getVueInstance.instance;
    }
    let instance = new Vue();
    getVueInstance.instance = instance;
    return instance
}
function notify(type, msg, instance){
    instance = instance || getVueInstance();
    requestDebug && instance.$notify({
        message: msg,
        type: type
    });
}