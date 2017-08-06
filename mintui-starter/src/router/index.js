/**
 * Created by chenchao on 2017/7/28.
 */

import routerMap from './routermap';

let initRouter = [];

let routersIterator = (pages) =>{
    pages.forEach(function (page) {
        initRouter.push({
            component: page.tpl,
            name     : page.name,
            path     : page.path
        })
    })
};

routersIterator(routerMap);


initRouter.push({
    path     : '/',
    redirect:"/agreement",
    name     : "agreement"
});

export default initRouter;
