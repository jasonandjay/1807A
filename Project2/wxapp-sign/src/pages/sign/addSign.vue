<template>
  <div>
    <h2>首页</h2>
    <form>
      <div class="row">
        <label for="">面试地址</label>
        <span @click="searchAddress"></span>
      </div>
      <button>添加</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    searchAddress() {
      wx.navigateTo({ url: "/pages/sign/mapSuggestion" });
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  height: 100rpx;
  span {
    flex: 1;
    height: 100%;
  }
}
</style>