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

// 上传文件
export function upload(file: File){
    let form = new FormData();
    form.append(file.name, file);
    return request('http://123.206.55.50:11000/upload', {
        method: 'POST',
        data: form
    });
}