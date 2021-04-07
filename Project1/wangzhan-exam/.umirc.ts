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
  antd: {    
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  theme: {
    "primary-color": "#adc6ff", // 全局主色
    "link-color": "#1890ff", // 链接色
    "success-color": "#52c41a", // 成功色
    "warning-color": "#faad14", // 警告色
    "error-color": "#f5222d", // 错误色
    "font-size-base": "14px", // 主字号
    "heading-color": "#ffc53d", // 标题色
    "text-color": "#ffe58f", // 主文本色
    "text-color-secondary": "#fff1b8", // 次文本色
    "disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
    "border-radius-base": "2px", // 组件/浮层圆角
    "border-color-base": "#d9d9d9", // 边框色
    "box-shadow-base": `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)` // 浮层阴影
  }
});
