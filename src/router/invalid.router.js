/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:51:25
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 18:47:46
 * @FilePath: /vueApp/src/router/invalid.router.js
 */
/**
 * 非企业微信客户端访问时的路由
 */
const InvalidRoutes = [
  {
    path: '*',
    component: () => import(/* webpackChunkName: "base_router" */ '@/views/invalid'),
    meta: {
      title: '抱歉，出错了',
    },
  },
]

export default InvalidRoutes
