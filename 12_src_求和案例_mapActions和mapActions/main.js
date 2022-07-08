import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import store from './store'

Vue.config.productionTip = false
// 引入插件
Vue.use(vueResource)
new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局时间总线
    // 全局所有的vc vm都能看到他
  }
}).$mount('#app')
