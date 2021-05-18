<template>
  <div ref="container"></div>
</template>

<script>
import * as echarts from "echarts";
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

      // 2. 配置option
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "bar",
          }
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