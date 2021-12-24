/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:25:21
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-24 14:25:17
 * @FilePath: /vueApp/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import './util/demandLoad'
import './util/rem'
import './util/permission'

import 'vant/lib/index.css';
import './style/index.less'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
