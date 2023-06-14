
// #ifndef VUE3
import Vue from 'vue'
// uview
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
import App from './App'
import request from './API/requset.js'




Vue.config.productionTip = false
Vue.prototype.$get = request.get
Vue.prototype.$post = request.post
Vue.prototype.$put = request.put

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif