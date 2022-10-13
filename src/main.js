import {
  Vue,
  ElementUI,
  Vuex,
} from './vendor'

import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import moduleUser from './moduleUser'
import moduleReactive from './moduleReactive'
import './assets/index.css'
import $ from './libs/util'
import './libs/object_operation'

import codemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import ECharts from 'vue-echarts'

import VueClipboard from 'vue-clipboard2'

Vue.prototype.$ = $

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.use(codemirror)
Vue.config.productionTip = false
const store = new Vuex.Store({
  modules: {
    moduleUser: moduleUser,
    moduleReactive: moduleReactive,
  }
});
Vue.component('v-chart', ECharts)

Vue.use(VueClipboard)

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
