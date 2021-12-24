/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-24 13:46:13
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-24 14:05:00
 * @FilePath: /vueApp/src/api/index.js
 */

import { appFetch } from './axios'

const appApi = {
  listIndex: listIndex
}

function listIndex() {
  return appFetch({
    url: '/index.json'
  })
}

export default appApi
