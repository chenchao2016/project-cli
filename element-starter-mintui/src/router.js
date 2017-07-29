/**
 * Created by chenchao on 2017/7/26.
 */


import A from "./components/pagea.vue";
import B from "./components/pageb.vue";

const mya = {
    template : A
};
const myb = {
    template:B
};

const routes = [
    {
        path:"/a",
        component:A,
        name:'mya'
    },
    {
        path:"/b",
        component:B,
        name:"myb"
    }
];


export default routes;