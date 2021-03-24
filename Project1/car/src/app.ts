import { RequestConfig } from 'umi';
import { createLogger } from 'redux-logger';

// 网络请求配置
const baseURL = 'https://baojia.chelun.com';
export const request: RequestConfig = {
    timeout: 3000,
    errorConfig: {},
    // 请求拦截器
    requestInterceptors: [(url, options) => {
        url = baseURL + url;
        return {
            url,
            options,
        };
    }],
    // 响应拦截器
    responseInterceptors: [response => {
        const codeMaps: { [key: string]: string } = {
            400: '错误请求',
            403: '请求禁止访问',
            404: '请求资源不存在',
            500: '服务器内部错误',
            502: '网关错误',
            503: '服务不可用，服务器暂时过载或维护',
            504: '网关超时',
        };
        if (response.status !== 200) {
            console.warn(codeMaps[response.status]);
        }
        return response;
    }]
};

// dva配置
export const dva = {
  config: {
    onAction: createLogger()
  },
};