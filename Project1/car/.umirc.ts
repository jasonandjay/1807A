import { defineConfig } from 'umi';
var pxtorem = require('postcss-pxtorem');
var px2rem = require('postcss-px2rem');

export default defineConfig({
  metas: [
    {
      name: 'referrer',
      content: 'no-referrer',
    }
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
  extraPostCSSPlugins: [px2rem({remUnit: 75})]
});
