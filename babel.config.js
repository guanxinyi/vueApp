/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 16:25:21
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-24 11:07:04
 * @FilePath: /vueApp/babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ['import', {
    //   libraryName: 'vant',
    //   libraryDirectory: 'es',
    //   style: true
    // }, 'vant']
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
