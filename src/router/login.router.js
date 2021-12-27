/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:53:07
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-27 14:48:14
 * @FilePath: /vueApp/src/router/login.router.js
 */

const LoginRoutes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "base_router" */ '@/views/login'),
    meta: {
      title: 'login',
    },
  },
]

export default LoginRoutes
