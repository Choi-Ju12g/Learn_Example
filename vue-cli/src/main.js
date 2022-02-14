import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 6~8 동일하다 11~13($mount가)
// new Vue({
//   el:#app,
// })