/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:49:48
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 20:16:50
 * @FilePath: /vueApp/src/router/cus.router.js
 */

const CusRoutes = [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "base_router" */ '@/views/cusUser'),
    meta: {
      title: 'cusUser',
    },
  },
]

export default CusRoutes
