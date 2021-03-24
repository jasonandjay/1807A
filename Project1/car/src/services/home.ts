import { request } from 'umi';

// 获取品牌列表
export function getBrandList(){
    return request('/v2-car-getMasterBrandList.html');
}

// 获取车系列表
export function getMakeList(MasterID: string){
    return request('/v2-car-getMakeListByMasterBrandId.html', {
        params: {MasterID}, // queryString
        // data: {},   // 请求体
        // headers: {},    // 请求头部字段
    })
}