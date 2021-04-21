import {request} from 'umi'

// 分类列表
export function getCategoryList(){
    return request('/api/category')
}