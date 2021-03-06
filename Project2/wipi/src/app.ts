import { RequestConfig } from 'umi';
import {message} from 'antd'
// 在根组件注入store
import StoreContext from '@/context/storeContext';
import store from '@/store';
import React from 'react';
// 引入viewjs的样式
import 'viewerjs/dist/viewer.css';
// 引入nprogress的样式
import 'nprogress/nprogress.css';
import Nprogress from 'nprogress';

// 网络请求配置
const baseURL = '//api.blog.wipi.tech';
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
        return {
            url,
            options
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

// 覆盖react-dom 渲染时的根组件
export function rootContainer(container: any) {
    return React.createElement(StoreContext.Provider, {value: store}, container);
}

// 配置路由切换回调
export function onRouteChange() {
    setTimeout(()=>{
        Nprogress.done();
    }, 0)
}