<template>
  <button @click="startAuth" v-if="auths.length">
    开始{{ auths.slice(-1) }}识别
  </button>
  <button v-else>你的设备不支持任何识别方式</button>
</template>

<script>
export default {
  data() {
    return {
      auths: [],
    };
  },
  methods: {
    startAuth() {
      wx.startSoterAuthentication({
        requestAuthModes: this.auths,
        challenge: "123456",
        authContent: `请用${
          this.auths.slice(-1) === "facial" ? "人脸" : "指纹"
        }解锁`,
        success(res) {
          wx.setStorageSync("auth",  +new Date);
          wx.navigateBack();
        },
      });
    },
  },
  created() {
    wx.checkIsSupportSoterAuthentication({
      complete: (res) => {
        console.log("支持的识别方式...", res);
        this.auths = res.supportMode || [];
        if (!this.auths.length) {
          wx.setStorageSync("auth", +new Date);
          wx.navigateBack();
        }
        // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
        // res.supportMode = ['fingerPrint'] 只支持指纹识别
        // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
      },
    });
  },
};
</script>

<style>
</style>