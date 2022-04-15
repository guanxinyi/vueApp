/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 17:46:06
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-04-15 14:50:43
 * @FilePath: /vueApp/src/util/permission.js
 */
// 跳转无权限
// function noPermission(to, next) {
//   if (to.name === 'nopermission') {
//     return next()
//   } else {
//     return next({ path: '/nopermission', query: { titleType: 'app' } })
//   }
// }
import router from '@/router/index'
import { isApp } from '@/util/outFunction'
import InvalidRoutes from '@/router/invalid.router.js'
import LoginRoutes from '../router/login.router'
import CusRoutes from '../router/cus.router'
import canvasBackGround from './background'

// 判断是否是 app
const DEVICE_APP = isApp()
if (!DEVICE_APP) {
  router.addRoutes(InvalidRoutes)
} else if (DEVICE_APP && !sessionStorage.token) {
  router.addRoutes(LoginRoutes)
} else if (DEVICE_APP && sessionStorage.token) {
  canvasBackGround()
  router.addRoutes(CusRoutes)
}

console.log('%c 🍑 from: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', '121212');

// router.beforeEach((to, from, next) => {
//   console.log('%c 🍑 from: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', from);
//   console.log('%c 🍛 to: ', 'font-size:20px;background-color: #465975;color:#fff;', to);
//   next()

// })
