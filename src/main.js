/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:25:21
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 16:28:13
 * @FilePath: /wx/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './util/demandLoad'
import './util/rem'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
