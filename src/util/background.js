/*
 * @Descripttion: 水印生成
 * @version: 0.0.1
 * @Author: guanxiaoxin
 * @Date: 2021-12-22 15:36:09
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-24 14:10:55
 * @FilePath: /vueApp/src/util/background.js
 */
// import { downloadFile } from './downloadFile'

let isPc = () => {
  const userAgent = window.navigator.userAgent
  const userAgentsList = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone']
  let isPc = true
  userAgentsList.map(item => {
    if (userAgent.indexOf(item > 0)) {
      isPc = false
    }
  })
  return isPc
}
let canvasBackGround = (name = '背景') => {
  let container = document.body
  let canvas = document.createElement('canvas')
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  let ctx = canvas.getContext('2d')
  ctx.font = '12px Arial'
  // 倾斜的宽高
  const Y = name.length * 1.414 / 2 * 40
  if (isPc()) {
    for (var x = 10; x < canvas.width; x = x + 300) {
      for (var y = 50; y < canvas.height; y = y + Y + 50) {
        ctx.beginPath()
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = '20px microsoft yahei'
        ctx.fillStyle = 'rgba(184, 184, 184, 0.4)'
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(-Math.PI / 4)
        ctx.fillText(name, 0, 25)
        ctx.restore()
      }
    }
  } else {
    for (var n = 10; n < canvas.width; n = n + 200) {
      for (var m = 50; m < canvas.height; m = m + Y + 20) {
        ctx.beginPath()
        ctx.textBaseline = 'middle'
        ctx.font = '18px microsoft yahei'
        ctx.fillStyle = 'rgba(184, 184, 184, 0.4)'
        ctx.save()
        ctx.translate(n, m)
        ctx.rotate(-Math.PI / 4)
        ctx.fillText(name, 0, 25)
        ctx.restore()

      }
    }
  }
  var srccc = canvas.toDataURL('image/png')
  // downloadFile('111', srccc)
  // 加入页面
  const bodyMark = document.getElementById('bodyMark')
  if (bodyMark) {
    container.removeChild(bodyMark)
  }
  const box = document.createElement('div')
  box.setAttribute('id', 'bodyMark')
  const bodyMarkDiv = document.createElement('div')
  bodyMarkDiv.setAttribute('style', `position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;background-repeat:repeat;background-image:url('${srccc}')`)
  box.append(bodyMarkDiv)
  container.style.position = 'relative'
  container.insertBefore(box, container.firstChild)
}

export default canvasBackGround
