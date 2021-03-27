import { request } from 'umi';

// 获取车系详情
export function getInfoAndList(SerialID: string){
    return request('/v2-car-getInfoAndListById.html', {params:{SerialID}});
}

// 获取车系列表