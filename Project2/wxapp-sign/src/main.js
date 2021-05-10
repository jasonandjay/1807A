import Vue from 'vue'
import App from './App'
// 挂载vuex
import store from './store'

// 注册全局过滤器
function formatTime(val){
  let date = new Date(+val);
  let year = date.getFullYear(),
      month = String(date.getMonth()+1).padStart(2, '0'),
      day = String(date.getDate()).padStart(2, '0'),
      hour = String(date.getHours()).padStart(2, '0'),
      min = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${min}`
}
Vue.filter('formatTime', formatTime)

Vue.prototype.$store = store;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
