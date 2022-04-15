/*
 * @Descripttion:
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2022-01-11 11:23:59
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2022-03-28 16:10:34
 * @FilePath: /vueApp/vue.config.js
 */
const path = require('path')

module.exports = {

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', path.join(__dirname, 'src'))
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
        extract: true,
        outputPath: 'static/',
        spriteFilename: 'sprite.svg', // 生成的 SVG 雪碧图资源路径
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
  }

}
