/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:25:21
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 18:41:44
 * @FilePath: /vueApp/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './util/demandLoad'
import './util/rem'
import './util/permission'
import router from './router/index'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
