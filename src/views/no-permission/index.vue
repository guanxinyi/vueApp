<!--
 * @Description: 各种无权限页面
 * @Version: 1.0
 * @Autor: Terry
 * @Date: 2020-10-06 09:20:41
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 18:43:30
-->
<template>
  <div class="no_permission_warp">
    <div style="height: 60vh">
      <p>
        <!-- <svg-icon
          iconClass="no_permission"
          className="no_permission_icon"
        ></svg-icon> -->
      </p>
      <p>{{ title }}</p>
      <p v-if="isUpdateToken === 1">
        <van-button type="info" @click="updateToken">尝试重新加载</van-button>
      </p>
    </div>
  </div>
</template>

<script>
// import { updateWebToken } from '@/utils/util'
export default {
  data() {
    return {
      title: "",
      isUpdateToken: 0,
    };
  },
  created() {
    this.title = "你的账号未开通权限，请联系管理员";
    this.isUpdateToken = 0;
    if (this.$route.query.titleType === "app") {
      this.title = "请在E销APP客户端打开链接";
    }
    if (this.$route.query.titleType === "webToken") {
      this.isUpdateToken = 1;
      this.title = "获取APP Token异常";
    }
  },
  methods: {
    updateToken() {
      // updateWebToken()
    },
  },
};
</script>

<style scoped lang='less'>
.no_permission_warp {
  height: 100vh;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  .no_permission_icon {
    width: 2rem;
    height: 2rem;
  }
  p {
    text-align: center;
    color: #666;
    margin-bottom: 0.4rem;
  }
}
</style>
