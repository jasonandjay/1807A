import { RequestConfig } from 'umi';
import { createLogger } from 'redux-logger';
import {getToken} from '@/utils/index'
import {message} from 'antd'

// 网络请求配置
const baseURL = '//10.34.6.27:7002';
export const request: RequestConfig = {
    timeout: 30000,
    errorHandler: err=>{
        message.error(err.toString());
    },
    // 请求拦截器
    requestInterceptors: [(url, options) => {
        if (!/\/\//.test(url)){
            url = baseURL + url;
        }
        let headers = {};
        if (getToken()){
            headers = {'authorization': getToken()}
        }
        return {
            url,
            options: {...options, headers}
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
        console.log('response...', response)
        if (response.status !== 200) {
            message.error(codeMaps[response.status]);
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