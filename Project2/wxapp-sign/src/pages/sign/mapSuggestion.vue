<template></template>
<script>
const chooseLocation = requirePlugin("chooseLocation");
const key = 'WCLBZ-Q6L6S-C4NO6-6BPPE-OEV2F-52FGA';

export default {
  onShow() {
    const location = chooseLocation.getLocation();
    console.log(location);
  },
  created() {
    // const key = ""; //使用在腾讯位置服务申请的key
    const referer = "一面而就"; //调用插件的app的名称
    // const location = JSON.stringify({
    //   latitude: 39.89631551,
    //   longitude: 116.323459711,
    // });
    const category = "生活服务,娱乐休闲";

    wx.navigateTo({
      url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&category=${category}`,
    });
  },
};
</script>