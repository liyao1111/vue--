import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.x = { a: 1, b: 2 }

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局时间总线
    // 全局所有的vc vm都能看到他
  }
}).$mount('#app')
