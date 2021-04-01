import { defineConfig } from 'umi';

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
  dva: {
    immer: true,
    hmr: false,
  },
  fastRefresh: {},
  antd: { }
});
