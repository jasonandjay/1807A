<template>
  <div ref="container"></div>
</template>

<script>
import * as echarts from "echarts";
import china from "../map/china";
// 引入省份数据
import anhui from "../map/province/anhui.json";
import aomen from "../map/province/aomen.json";
import beijing from "../map/province/beijing.json";
import chongqing from "../map/province/chongqing.json";
import fujian from "../map/province/fujian.json";
import gansu from "../map/province/gansu.json";
import guangdong from "../map/province/guangdong.json";
import guangxi from "../map/province/guangxi.json";
import guizhou from "../map/province/guizhou.json";
import hainan from "../map/province/hainan.json";
import hebei from "../map/province/hebei.json";
import heilongjiang from "../map/province/heilongjiang.json";
import henan from "../map/province/henan.json";
import hubei from "../map/province/hubei.json";
import hunan from "../map/province/hunan.json";
import jiangsu from "../map/province/jiangsu.json";
import jiangxi from "../map/province/jiangxi.json";
import jilin from "../map/province/jilin.json";
import liaoning from "../map/province/liaoning.json";
import neimenggu from "../map/province/neimenggu.json";
import ningxia from "../map/province/ningxia.json";
import qinghai from "../map/province/qinghai.json";
import shandong from "../map/province/shandong.json";
import shanghai from "../map/province/shanghai.json";
import shanxi from "../map/province/shanxi.json";
import shanxi1 from "../map/province/shanxi1.json";
import sichuan from "../map/province/sichuan.json";
import taiwan from "../map/province/taiwan.json";
import tianjin from "../map/province/tianjin.json";
import xianggang from "../map/province/xianggang.json";
import xinjiang from "../map/province/xinjiang.json";
import xizang from "../map/province/xizang.json";
import yunnan from "../map/province/yunnan.json";
import zhejiang from "../map/province/zhejiang.json";

function randomData() {
  return Math.round(Math.random() * 500);
}
const mydata = [
  { name: "北京", value: "100", map: beijing },
  { name: "天津", value: randomData(), map: tianjin },
  { name: "上海", value: randomData(), map: shanghai },
  { name: "重庆", value: randomData(), map: chongqing },
  { name: "河北", value: randomData(), map: hebei },
  { name: "河南", value: randomData(), map: henan },
  { name: "云南", value: randomData(), map: yunnan },
  { name: "辽宁", value: randomData(), map: liaoning },
  { name: "黑龙江", value: randomData(), map: heilongjiang },
  { name: "湖南", value: randomData(), map: hunan },
  { name: "安徽", value: randomData(), map: anhui },
  { name: "山东", value: randomData(), map: shandong },
  { name: "新疆", value: randomData(), map: xinjiang },
  { name: "江苏", value: randomData(), map: jiangsu },
  { name: "浙江", value: randomData(), map: zhejiang },
  { name: "江西", value: randomData(), map: jiangxi },
  { name: "湖北", value: randomData(), map: hubei },
  { name: "广西", value: randomData(), map: guangxi },
  { name: "甘肃", value: randomData(), map: gansu },
  { name: "山西", value: randomData(), map: shanxi },
  { name: "内蒙古", value: randomData(), map: neimenggu },
  { name: "陕西", value: randomData(), map: shanxi1 },
  { name: "吉林", value: randomData(), map: jilin },
  { name: "福建", value: randomData(), map: fujian },
  { name: "贵州", value: randomData(), map: guizhou },
  { name: "广东", value: randomData(), map: guangdong },
  { name: "青海", value: randomData(), map: qinghai },
  { name: "西藏", value: randomData(), map: xizang },
  { name: "四川", value: randomData(), map: sichuan },
  { name: "宁夏", value: randomData(), map: ningxia },
  { name: "海南", value: randomData(), map: hainan },
  { name: "台湾", value: randomData(), map: taiwan },
  { name: "香港", value: randomData(), map: xianggang },
  { name: "澳门", value: randomData(), map: aomen },
];

echarts.registerMap("china", china);
export default {
  props: ["wh"],
  watch: {
    wh() {
      this.chart.resize();
    },
  },
  methods: {
    getMapbyName(name) {
      let index = mydata.findIndex(item=>item.name === name);
      return mydata[index];
    },
    renderChart(item) {
      if (item && item.name) {
        echarts.registerMap(item.name, item.map);
      }
      // 1. 初始化echart实例
      this.chart = echarts.init(this.$refs.container);

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
            mapType: item && item.name || "china",
            // data: mydata,
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
      this.chart.on("click", (params)=>{
        console.log("params...", params);
        let item = this.getMapbyName(params.name);
        this.renderChart(item);
      });
    });
  },
};
</script>