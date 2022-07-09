import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import store from './store'
 import VueRouter from 'vue-router'
 import router from './router'

Vue.config.productionTip = false
// 引入插件
Vue.use(vueResource)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局时间总线
    // 全局所有的vc vm都能看到他
  }
}).$mount('#app')
