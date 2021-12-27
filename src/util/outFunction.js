/*
 * @Descripttion: 一些通用的方法
 * @version: 0.0.1
 * @Author: guanxiaoxin
 * @Date: 2021-02-20 14:30:45
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-27 15:15:24
 * @FilePath: /vueApp/src/util/outFunction.js
 */
'use strict'

import { Dialog } from 'vant'
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



/**
 * 通用对象，封装了一些常用的方法
 * @var {Object}
 * @property {object} localStora
 * @property {object} cookieOpt
 * @property {object} sessionStora
 * @property {Function} deepCope
 * @property {Function} isNull
 * @property {Function} isJson
 * @property {Function} getUrlParam
 * @property {Function} push
 * @property {Function} loadScript
 * @property {Function} isIos
 * @property {Function} isAndroid
 * @property {Function} encryptMobile
 * @property {Function} validatorIdCardCode
 * @property {Function} debounce
 * @property {Function} copyText
 */

// import dataDB from "amx-indexeddb";
// const MtfAlpha1 = new dataDB.db("MtfAlpha1");

export const util = {
  /**
* 封装本地永久存储localStorage对象
* @member {Object}
* @property {Function} set
* @property {Function} get
* @property {Function} remove
* @property clear
*/
  localStora: {
    /**
     * 对value进行是否json对象的验证，如果是自动转换为字符串
     * @member {Function}
     * @param {string} key
     * @param {string} value
     * @returns {void}
     */
    set: (key, value) => {
      localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
    },
    /**
     * 自动对value进行json parse 字符串转化为对象
     * @member {Function}
     * @param {string} key
     * @returns {string|Object}
     */
    get: (key) => {
      return util.isJson(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key)
    },
    /**
     * 指定key删除本地存储
     * @member {Function}
     * @param {string} key
     * @returns {void}
     */
    remove: (key) => {
      localStorage.removeItem(key)
    },
    /**
     * 清空全部本地存储
     * @member {sessionStorage.clear()}
     */
    clear: () => localStorage.clear()
  },

  /**
   * 对value进行是否json对象的验证，如果是自动转换为字符串
   * @member {Function}
   * @param {string} key
   * @param {string} value
   * @returns {void}
   */
  cookieOpt: {
    set: (key, value, expiredays) => {
      var exdate = new Date()
      exdate.setDate(exdate.getDate() + expiredays)
      document.cookie = key + '=' + escape(value) +
        ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
    },
    get: (key) => {
      if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(key + '=')
        if (start !== -1) {
          start = start + key.length + 1
          var end = document.cookie.indexOf(';', start)
          if (end === -1) end = document.cookie.length
          return unescape(document.cookie.substring(start, end))
        }
      }
      return ''
    }
  },

  /**
   * 封装本地临时存储sessionStorage对象
   * @member {Object}
   * @property {Function} set
   * @property {Function} get
   * @property {Function} remove
   * @property clear
   */
  sessionStora: {
    /**
     * 对value进行是否json对象的验证，如果是自动转换为字符串
     * @member {Function}
     * @param {string} key
     * @param {string} value
     * @returns {void}
     */
    set: (key, value) => {
      value = typeof value === 'object' ? JSON.stringify(value) : value
      sessionStorage.setItem(key, value)
    },
    /**
     * 自动对value进行json parse 字符串转化为对象
     * @member {Function}
     * @param {string} key
     * @returns {string|Object}
     */
    get: (key) => {
      var value = sessionStorage.getItem(key)
      return util.isJson(value) ? JSON.parse(value) : value
    },
    /**
     * 指定key删除本地存储
     * @member {Function}
     * @param {string} key
     * @returns {void}
     */
    remove: (key) => {
      sessionStorage.removeItem(key)
    }
    /**
     * 清空全部本地存储
     * @member {sessionStorage.clear()}
     */
    // clear: sessionStorage.clear()
  },
  /**
   * 深拷贝方法
   * @member: {Function}F
   * @param {*} obj
   * @return {[] || {}}
   */
  deepCope: (obj) => {
    const isObject = args => (typeof args === 'object' || typeof args === 'function')
    if (!isObject) throw new Error('Not Reference Types')
    const newObj = Array.isArray(obj) ? [...obj] : { ...obj }
    Reflect.ownKeys(newObj).map(key => {
      newObj[key] = isObject(obj[key]) ? util.deepCope(obj[key]) : obj[key]
    })
    return newObj
  },

  /**
   * 判断是否为空，0、false、空对象、空数组、空字符串、Nan、undefined都返回true
   * @member {Function}
   * @param {*} str
   * @returns {boolean}
   */
  isNull: (str) => {
    if (typeof str === 'object') {
      return str === null || Object.keys(str).length <= 0
    } else if (typeof str === 'string') {
      return str.replace(/(^\s*)|(\s*$)/g, '').length === 0 || Number(str) === 0
    } else {
      return typeof str === 'undefined' || isNaN(str) || !str
    }
  },

  /**
   * 判断是否json格式的字符串
   * @member {Function}
   * @param {string} str
   * @returns {boolean}
   */
  isJson: (str) => {
    if (typeof str === 'string') {
      try {
        var obj = JSON.parse(str)
        return !!(obj && typeof obj === 'object')
      } catch (e) {
        return false
      }
    }
  },

  /**
   * 获取当前地址栏里的指定get参数
   * @member {Function}
   * @param {string} name
   * @returns {string|null}
   */
  getUrlParam: (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURI(r[2])
    return null
  },

  /**
   * 给对象添加新元素
   * @member {Function}
   * @param {object} obj
   * @param {string} str
   * @param {*|null} value
   * @returns {object}
   */
  push: (obj, str, value) => {
    obj[str] = value
    return obj
  },

  /**
   * 动态添加js
   * @member {Function}
   * @param {string} src
   * @returns {object}
   */
  loadScript: (src) => {
    return new Promise((resolve) => {
      const hasScript = document.getElementById(src)
      if (hasScript) {
        resolve()
      } else {
        const newScript = document.createElement('script')
        newScript.src = src
        newScript.id = src
        newScript.type = 'text/javascript'
        document.body.appendChild(newScript)
      }
    })
  },

  /**
   * 判断是否是IOS端
   * @member {Function}
   * @returns {Boolean}
   */
  isIos: () => {
    const u = navigator.userAgent
    let isIos
    if (/(iPhone|iPad|iPod|iOS)/i.test(u)) {
      isIos = true
    } else {
      isIos = false
    }
    return isIos
  },

  /**
   * 判断是否是Android端
   * @member {Function}
   * @returns {Boolean}
   */
  isAndroid: () => {
    const u = navigator.userAgent
    let isAndroid
    if (/(Android)/i.test(u)) {
      isAndroid = true
    } else {
      isAndroid = false
    }
    return isAndroid
  },

  /**
   * 手机号中间4位变成
   * @member {Function}
   * @param {String} mobile
   * @returns {String}
   */
  encryptMobile: (mobile) => {
    if (typeof mobile !== 'string') return ''
    return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  },

  /**
   * 校验身份证 15 || 18位号码
   * @member {Function}
   * @param {String} idCard
   * @returns {Boolean}
   */
  validatorIdCardCode: (idCard) => {
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    // 如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
      if (idCard.length === 18) {
        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); // 将前17位加权因子保存在数组里
        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
        var idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
        for (var i = 0; i < 17; i++) {
          idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
        }
        var idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
        var idCardLast = idCard.substring(17); // 得到最后一位身份证号码
        // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod == 2) {
          if (idCardLast == "X" || idCardLast == "x") {
            //alert("恭喜通过验证啦！");
            return true;
          } else {
            // this.$toast("身份证号码错误！");
            return false;
          }
        } else {
          // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
          if (idCardLast == idCardY[idCardMod]) {
            //alert("恭喜通过验证啦！");
            return true;
          } else {
            // this.$toast("身份证号码错误！");
            return false;
          }
        }
      } else {
        return true;
      }
    } else {
      return false
    }
  },

  /**
   * 防抖
   * @member {Function}
   * @param {*} fn
   * @param {*} delay 延迟时间
   */
  debounce: (fn, delay) => {
    let timer = null
    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  },

  /**
   * 将内容放到粘贴板
   * @export
   * @param {*} text 要复制的内容
   * @param {*} callback 回调
   */
  copyText: (text, callback) => {
    var tag = document.createElement('input')
    tag.setAttribute('id', 'copyInput')
    tag.value = text
    document.getElementsByTagName('body')[0].appendChild(tag)
    document.getElementById('copyInput').select()
    document.execCommand('copy')
    document.getElementById('copyInput').remove()
    if (callback) { callback(text) }
  }
}

/**
 * 可通过企业微信UA获取版本号
 */
export function wxworkVersion() {
  return navigator.userAgent.match(/wxwork\/([\d.]+)/)
}

/**
 * 将内容放到粘贴板
 * @export
 * @param {*} text 要复制的内容
 * @param {*} callback 回调
 */
export function copyText(text, callback) {
  const input = document.createElement('input')
  input.readOnly = 'readonly' // 防止ios聚焦触发键盘事件
  input.style.position = 'fixed'
  input.style.left = '-1000px'
  input.style.zIndex = '-1000'
  input.value = text
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, input.value.length)
  const success = document.execCommand('copy')
  if (success && callback) {
    callback(text)
  }
  document.body.removeChild(input)
}

let copyDone = true
/**
 * 将内容放到粘贴板
 * @export
 * @param {*} text 要复制的内容
 * @param {*} callback 回调
 */
export function copyText2(text, callback) {
  if (!copyDone) return
  copyDone = false
  // 数字没有 .length 不能执行selectText 需要转化成字符串
  const textString = text.toString()
  let input = document.querySelector('#copy-input')
  if (!input) {
    input = document.createElement('input')
    input.id = 'copy-input'
    input.readonly = 'readonly' // 防止ios聚焦触发键盘事件
    input.unselectable = 'on' // 防止ios聚焦触发键盘事件
    input.style.position = 'absolute'
    input.style.left = '-1000px'
    input.style.zIndex = '-1000'
    document.body.appendChild(input)
    input.addEventListener('focus', () => {
      input.blur()
    })
    input.addEventListener('blur', () => {
      setTimeout(() => {
        copyDone = true
      }, 10000)
    })
  }

  input.value = textString
  // ios必须先选中文字且不支持 input.select();
  selectText(input, 0, textString.length)
  console.log(document.execCommand('copy'), 'execCommand')
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    if (callback) { callback(text) }
  }
  input.blur()

  // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
  // 选择文本。createTextRange(setSelectionRange)是input方法
  function selectText(textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) { // ie
      const range = textbox.createTextRange()
      range.collapse(true)
      range.moveStart('character', startIndex)// 起始光标
      range.moveEnd('character', stopIndex - startIndex)// 结束光标
      range.select()// 不兼容苹果
    } else { // firefox/chrome
      textbox.setSelectionRange(startIndex, stopIndex)
      textbox.focus()
    }
  }
}

/**
 * 复制手机号
 * @param {*} text 要复制的内容
 * @param {*} callback 回调
 */
export function copyMobile(text, callback) {
  Dialog.confirm({
    message: `确认要复制号码<span style="color:red">${text}</span>吗？`,
    confirmButtonText: '确定',
    beforeClose: (action, done) => {
      done()
      if (action === 'confirm') {
        copyText(text)
        if (callback) callback()
      }
    },
  })
}
