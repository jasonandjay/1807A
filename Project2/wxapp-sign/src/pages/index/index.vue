<template>
  <div>
    <map :latitude="latitude" :longitude="longitude" show-location></map>
    <cover-view class="footer">
      <cover-image @click="getCurLocation"></cover-image>
      <cover-image @click="goMyPage"></cover-image>
      <button @click="goAddSign">添加面试</button>
    </cover-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longitude: "",
      latitude: "",
    };
  },
  methods: {
    getCurLocation() {
      wx.getLocation({
        success: (res) => {
          this.longitude = res.longitude;
          this.latitude = res.latitude;
        },
      });
    },
	goAddSign(){
		wx.navigateTo({url: '/pages/sign/addSign'})
	},
	goMyPage(){
		wx.navigateTo({url: '/pages/my/index'});
		// 小程序路由跳转
		/**
		 * navigateTo: 追加，路由最多十层
		 * redirectTo: 替换
		 * navigateBack: 返回
		 * reluanch：重新加载
		 * switchTab: 切换tab
		 */
	}
  },
  created() {
	  this.getCurLocation();
  },
};
</script>

<style scoped lang="scss">
map {
  width: 100%;
  height: calc(100vh - 100rpx);
}
.footer {
  cover-image:first-child {
    position: fixed;
    bottom: 120rpx;
    left: 50rpx;
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  cover-image:nth-child(2) {
    position: fixed;
    bottom: 120rpx;
    right: 50rpx;
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  button {
    height: 100rpx;
  }
}
</style>