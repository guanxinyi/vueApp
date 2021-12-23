/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 17:05:23
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 17:07:04
 * @FilePath: /vueApp/src/util/outFunction.js
 */
/**
 * 判断是否是安卓端
 */
export const isAndroid = () => {
  const u = navigator.userAgent
  let isAndroid
  if (/(Android)/i.test(u)) {
    isAndroid = true
  } else {
    isAndroid = false
  }
  return isAndroid
}

/**
 * 判断是否是IOS端
 */
export const isIos = () => {
  const u = navigator.userAgent
  let isIos
  if (/(iPhone|iPad|iPod|iOS)/i.test(u)) {
    isIos = true
  } else {
    isIos = false
  }
  return isIos
}

/**
 * 判断是否是APP端
 */
export const isApp = () => {
  const u = navigator.userAgent
  let isApp
  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(u)) {
    isApp = true
  } else {
    isApp = false
  }
  return isApp
}

