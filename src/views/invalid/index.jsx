import { isApp } from '@/util/outFunction'
export default {
  name: 'Invalid',
  render() {
    const DEVICE_APP = isApp()
    let title = ''
    if (!DEVICE_APP) {
      title = '请在APP端打开链接'
      console.log('%c 🍢 title: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', title);
    }
    return (
      <div style={{ paddingTop: '36px', textAlign: 'center' }}>
        <van-icon name="warning" color="#10AEFF" size="100px" />
        <div style={{ fontSize: '20px', margin: '25px 0' }}>{title}</div>
      </div>
    )
  },
}
