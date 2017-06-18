/**
 * Created by ChenChao on 2017/6/18.
 */
import "~/vendor.js"
import "~/assets/less/index.less"

import Vue from 'vue'
import Name from "../pages/name.vue"

new Vue({
    el    : "#app",
    render: h => h(Name)
})