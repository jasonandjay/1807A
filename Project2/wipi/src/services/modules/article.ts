import {request} from 'umi'
// import {ILoginItem} from '@/utils/interface'

// 获取文章列表
export function getArticleList(page=1, pageSize=12, status='publish'){
    return request('/api/article', {
        params: {
            page,
            pageSize,
            status
        }
    })
}

// 顶部推荐
export function getArticleAllRecommend(){
    return request('/api/article/all/recommend')
}

// 侧边栏推荐
export function getArticleRecommend(){
    return request('/api/article//recommend')
}