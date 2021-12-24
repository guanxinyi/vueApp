/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 17:46:06
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-24 14:25:34
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

// router.beforeEach((to, from) => {
//   // console.log('%c 🍉 next: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', next);
//   console.log('%c 🥠 from: ', 'font-size:20px;background-color: #42b983;color:#fff;', from);
//   console.log('%c 🍭 to: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', to);

//   // const { title = defaultSettings.title } = to.meta
//   // setTitle(title)
//   // router.replace({ path: '/nopermission' })
//   if (DEVICE_APP) {
//     console.log('%c 🍇 DEVICE_APP: ', 'font-size:20px;background-color: #42b983;color:#fff;', DEVICE_APP);
//     // Invalid.map(item => {
//     //   console.log('%c 🥚 item: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', item);
//     //   router.addRoute(item)
//     // })
//     return router.replace({ path: '/nopermission' })
//     // next(router.replace({ path: '/nopermission' }))
//   }

// })
