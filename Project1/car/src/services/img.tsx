import { request } from 'umi';

// 获取品牌列表
export function getBrandList(){
    return request('/v2-car-getMasterBrandList.html');
}

// 获取车系列表