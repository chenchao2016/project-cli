/**
 * Created by chenchao on 2017/5/8.
 */

import Foo from "./foo.vue"
import Bar from "./bar.vue"

const routes = [{
    path:"/",
    redirect:"/foo",
    name:"home"
},{
    path:"/foo",
    component:Foo,
    name:'foo',
    meta:{requiresAuth:true}
},{
    path:"/bar",
    component:Bar,
    name:'bar',
    meta:{requiresAuth:false}
}];

export default routes;
