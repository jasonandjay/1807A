import {request} from 'umi'
import {ILoginItem} from '@/utils/interface'

// 登录接口
export function login(data: ILoginItem){
    return request('/user/login', {
        method: 'POST',
        data
    })
}

// 获取用户信息
export function getUserInfo(){
    return request('/user/userInfo')
}

// 获取试图权限数据
export function getViewAuthority(){
    return request('/user/view_authority')
}