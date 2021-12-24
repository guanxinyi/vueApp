/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:49:48
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-24 09:17:34
 * @FilePath: /vueApp/src/router/cus.router.js
 */

const CusRoutes = [
  {
    path: '/',
    redirect: '/ShoppingMall'
  },
  {
    path: '/ShoppingMall',
    component: () => import(/* webpackChunkName: "base_router" */ '@/components/pages/ShoppingMall'),
    meta: {
      title: 'ShoppingMall',
    },
  },
]

export default CusRoutes
