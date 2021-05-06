<script>
import { login } from "@/services/index";

export default {
  onLaunch: function () {
    console.log("App Launch");
    wx.login({
      async success(res) {
        if (res.code) {
          let result = await login(res.code);
          wx.setStorageSync("openid", result.data.openid);
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      },
    });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
page,
page>._div {
  height: 100%;
}
</style>
