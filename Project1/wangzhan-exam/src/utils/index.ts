import Cookie from 'js-cookie'

const key = 'authorization';
// 设置登录态，如果remember为true，设置7天免登录，如果remember为false，设置1天免登录
export function setToken(value:string, remember:boolean){
    Cookie.set(key, value, {expires: remember?7:1})
}

// 获取登录态
export function getToken(){
    return Cookie.get(key)
}

// 清除登录态
export function removeToken(){
    return Cookie.remove(key)
}