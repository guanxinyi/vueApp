/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 18:47:19
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 18:53:38
 * @FilePath: /vueApp/src/router/noPermission.router.js
 */

const NoPermission = () => import(/* webpackChunkName: "base_router" */'@/views/no-permission')
const NoPermissionRoutes = [
  {
    path: '/noPermission',
    component: NoPermission,
    meta: {
      title: '出错了',
    },
  },
]

export default NoPermissionRoutes
