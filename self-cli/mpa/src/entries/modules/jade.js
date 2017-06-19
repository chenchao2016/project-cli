/**
 * Created by ChenChao on 2017/6/19.
 */
import "~/vendor.js"

import Vue from 'vue'
import Jade from "../pages/jade.vue"

new Vue({
    el    : "#app",
    render: h => h(Jade)
})