import {request} from 'umi'

// 标签列表
export function getTagList(){
    return request('/api/tag')
}