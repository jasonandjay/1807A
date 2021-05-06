<template>
  <ul>
    <button open-type="contact">打开客服</button>
    <button open-type="share">分享</button>
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
      获取用户手机号
    </button>
    <button @click="getUserProfile">获取用户信息(新版)</button>
    <button open-type="getUserInfo">获取用户信息(老版)</button>
    <button open-type="launchApp">打开app</button>
    <button open-type="openSetting">打开授权页</button>
    <button open-type="feedback">反馈页面</button>
  </ul>
</template>

<script>
import { decrypt } from "@/services/index";
export default {
  methods: {
    getUserProfile() {
      wx.getUserProfile({
        desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log("res...", res);
        },
      });
    },
    async getPhoneNumber(res) {
      console.log("res...", res);
      if (res.target.errMsg === "getPhoneNumber:ok") {
        let { iv, encryptedData } = res.detail;
        let result = await decrypt({iv, encryptedData});
        debugger;

      }
    },
  },
  onShareAppMessage() {
    return {
      title: "分享我的小程序到好友",
      path: "/pages/my/index?from=wxfriend",
    };
  },
};
</script>

<style>
</style>