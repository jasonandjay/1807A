<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="draggable"
    :is-resizable="resizable"
    :vertical-compact="true"
    :use-css-transforms="true"
  >
    <grid-item
      v-for="(item, index) in layout"
      :key="index"
      :static="item.static"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      <component :wh="item.w*item.h" :is="item.component||'span'">{{item.i}}</component>
    </grid-item>
  </grid-layout>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
// 引入echart实例
import chart1 from './components/chart1'
import chart2 from './components/chart2'

import chart7 from './components/chart7'
import chart8 from './components/chart8'
import chart9 from './components/chart9'


export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    chart1,
    chart2,
    chart7,
    chart8,
    chart9
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 2, i: "0", static: false, component: 'chart1' },
        { x: 4, y: 0, w: 4, h: 4, i: "1", static: false, component: 'chart2' },
        { x: 8, y: 0, w: 4, h: 3, i: "2", static: false },

        { x: 0, y: 2, w: 4, h: 5, i: "6", static: false },
        { x: 4, y: 5, w: 4, h: 6, i: "7", static: false },
        { x: 8, y: 3, w: 4, h: 3, i: "8", static: false },

        { x: 0, y: 7, w: 4, h: 10, i: "9", static: false, component: 'chart7' },
        { x: 4, y: 10, w: 4, h: 7, i: "10", static: false, component: 'chart8' },
        { x: 8, y: 6, w: 4, h: 11, i: "11", static: false, component: 'chart9' }
      ],
      draggable: true,
      resizable: true,
      index: 0,
    };
  },
};
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
}
.vue-grid-item>div{
  width: 100%;
  height: 100%;
}
.vue-grid-layout {
    background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
