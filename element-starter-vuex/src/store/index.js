/**
 * Created by chenchao on 2017/8/19.
 */

import Vuex from 'vuex';

let store = new Vuex.Store({
    state:{
        username:""
    },
    mutations:{
        showName(){
            alert(store.state.username);
        }
    }
})

export {store};