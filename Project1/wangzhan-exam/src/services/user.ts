import {request} from 'umi'
import {ILoginItem} from '@/utils/interface'

// 登录接口
export function login(data: ILoginItem){
    return request('/user/login', {
        method: 'POST',
        data
    })
}