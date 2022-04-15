/*
 * @Description: svg引用
 * @Version: 1.0
 * @Autor: Terry
 * @Date: 2020-09-24 13:27:57
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-01-11 11:35:31
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件
// 注册为全局组件
Vue.component('SvgIcon', SvgIcon)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
