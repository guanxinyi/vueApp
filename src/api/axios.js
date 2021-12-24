/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-24 13:15:37
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-24 14:00:00
 * @FilePath: /vueApp/src/api/axios.js
 */
import axios from 'axios'
import { merge } from 'lodash'
import { Dialog } from 'vant'

var jsonlint = require('@/libs/jsonlint')

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export function appFetch(options) {
  // 是否使用野牛处理字符串过长导致的问题
  options.handleossOfAccuracy = options.handleossOfAccuracy ?? true
  return new Promise((resolve, reject) => {
    const headerOptions = options.header || {}
    const showErrorTip = options.showErrorTip ?? true
    merge(options, {
      headers: {
        ...headerOptions,
      },
      ...(
        options.handleLossOfAccuracy ? {
          transformResponse: data => {
            try {
              data = jsonlint.parse(data)
            } catch (err) {
              console.log('%c 🌽 err: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', err);
            }
            return data
          },
        } : {}),
    })
    instance(options)
      .then(response => {
        const res = response
        if (res) {
          resolve(res)
        }
      }).catch(error => {
        errorhandle(error, showErrorTip)
        reject(error)
      })
  })
}
/**
 * 错误处理
 * @param {*} error
 */
function errorhandle(error, showErrorTip) {
  if (error?.response?.status === 401) {
    return Dialog.alert({
      title: '提示',
      message: '登录信息已过期，需要重新授权',
      confirmButtonText: '好的',
      beforeClose: (action, done) => {
        done(false)
        sessionStorage.clear()
      },
    })
  }
  if (!showErrorTip) return
  let message
  try {
    message = error.response.data.message
  } catch (err) {
    console.log('%c 🥃 err: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', err);
  }

  if (error.response != null) {
    switch (error.response.status) {
      case 401:
        Dialog.confirm({
          title: '提示',
          message: '您的登录信息已过期，请重新登录',
        })
          .then(() => {
            // app刷新token
            // updateWebToken()
          })
        break
      case 403:
        Dialog.alert({
          title: '提示',
          message: '服务器拒绝请求',
        })
        break
      case 404:
        Dialog.alert({
          title: '提示',
          message: '请求页面或地址不存在',
        })
        break
      case 408:
        Dialog.alert({
          title: '提示',
          message: '连接超时，请稍后重试...',
        })
        break
      case 415:
        Dialog.alert({
          title: '提示',
          message: '请求类型有误',
        })
        break
      case 500:
        Dialog.alert({
          title: '提示',
          message: '连接超时，请稍后重试...',
        })
        break
      case 502:
        Dialog.alert({
          title: '提示',
          message: '连接超时，请稍后重试..',
        })
        break
      case 503:
        Dialog.alert({
          title: '提示',
          message: '连接超时，请稍后重试...',
        })
        break
      case 504:
        Dialog.alert({
          title: '提示',
          message: '连接超时，请稍后重试...',
        })
        // 可行的
        break
      default:
        Dialog.alert({
          title: '提示',
          message: message || '发生异常错误,请刷新页面重试,或联系管理员',
        })
        break
    }
  } else {
    Dialog.alert({
      title: '提示',
      message: '当前网络不可用，请检查您的网络',
    })
  }
}
