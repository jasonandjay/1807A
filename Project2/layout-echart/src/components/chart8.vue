<template>
  <div ref="container"></div>
</template>

<script>
import * as echarts from "echarts";
import shanxi from "../map/province/shanxi";

echarts.registerMap("shanxi", shanxi);
export default {
  props: ["wh"],
  watch: {
    wh() {
      this.chart.resize();
    },
  },
  methods: {
    renderChart() {
      // 1. 初始化echart实例
      this.chart = echarts.init(this.$refs.container);

      function randomData() {
        return Math.round(Math.random() * 500);
      }
      const mydata = [
        { name: "大同市", value: "100" },
        { name: "朔州市", value: randomData() },
        { name: "忻州市", value: randomData() },
        { name: "吕梁市", value: randomData() },
        { name: "太原市", value: randomData() },
        { name: "晋中市", value: randomData() },
        { name: "阳泉市", value: randomData() },
        { name: "长治市", value: randomData() },
        { name: "临汾市", value: randomData() },
        { name: "晋城市", value: randomData() },
        { name: "运城市", value: randomData() }
      ];

      // 2. 配置option
      const option = {
        //左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "center",
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 },
          ],
          color: [
            "#5475f5",
            "#9feaa5",
            "#85daef",
            "#74e2ca",
            "#e6ac53",
            "#9fb5ea",
          ],
        },
        series: [
          {
            name: "数据",
            label: {
              normal: {
                show: true, //省份名称
              },
              emphasis: {
                show: false,
              },
            },
            type: "map",
            mapType: "shanxi",
            data: mydata,
          },
        ],
      };

      // 3. 更新echart
      this.chart.setOption(option);
    },
  },
  mounted() {
    setTimeout(() => {
      this.renderChart();
    });
  },
};
</script>