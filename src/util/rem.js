/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 15:31:05
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 17:53:07
 * @FilePath: /vueApp/src/util/rem.js
 */
import Vue from 'vue'

let defaultSettings = {
  wxworkPCMaxWidth: 480
}
const AppConfig = Vue.observable({
  remUnit: null
})

let setRemUnit = () => {
  var docEl = document.documentElement
  let clientWidth = docEl.clientWidth
  // 限制最大显示宽度
  if (clientWidth > defaultSettings.wxworkPCMaxWidth) {
    clientWidth = defaultSettings.wxworkPCMaxWidth
  }
  var rem = clientWidth / 7.5
  docEl.style.fontSize = rem + 'px'
  AppConfig.remUnit = rem
}

let flexible = (window, document) => {
  console.log('%c 🍛 document: ', 'font-size:20px;background-color: #FCA650;color:#fff;', document);
  setRemUnit()
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}
flexible(window, document)
console.log('%c 🍺 document: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', document);

