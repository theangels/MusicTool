import Vue from 'vue'
import Router from 'vue-router';


import {
  genericRouter
} from './routers/genericRouter'

import {
  exceptionRouter
} from './routers/exceptionRouter'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

var routerConfig = [

]

routerConfig.push.apply(routerConfig, genericRouter)
routerConfig.push.apply(routerConfig, exceptionRouter)

var router = new Router({
  mode: 'history',
  base: '/',
  routes: routerConfig
});

//在转跳之后的操作
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router
