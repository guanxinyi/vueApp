import appApi from '@/api/index'

export default {
  data() {
    return {
      locationIcon: require('@/assets/logo.png'),
      abc: '1111',
      bannerPicArray: [
        { imageUrl: 'http://81.71.24.172:889/img/photo1.jpg' },
        { imageUrl: 'http://81.71.24.172:889/img/3.jpg' },
        { imageUrl: 'http://81.71.24.172:889/img/5.jpg' },
      ]
    }
  },
  created() {
    console.log('%c 🍲 appApi: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', appApi);

    appApi.listIndex()
  },
  render() {
    const { locationIcon, abc, bannerPicArray } = this
    console.log('%c 🍬 abc: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', abc);

    return <div>
      <div class="search-bar">
        <van-row gutter="5">
          <van-col span="3"><img src={locationIcon} width="80%" class="location-icon" /></van-col>
          <van-col span="16">
            <input type="text" class="search-input" />
          </van-col>
          <van-col span="5"><van-button size="mini">查找</van-button></van-col>
        </van-row>
      </div>
      <div class="swiper-area">
        <van-swipe autoplay="3000" >
          {bannerPicArray.map((item, index) => {
            return <van-swipe-item key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={item.imageUrl} style={{ width: '4rem' }} />
            </van-swipe-item>
          })}
        </van-swipe>
      </div>
    </div>
  }
}
