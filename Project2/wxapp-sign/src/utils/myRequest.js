export default function myRequest(){
    return new Promise((resolve, reject) => {
        wx.request({
            success:(res)=>{
                resolve(res);
            },
            fail:(err)=>{
                reject(err);
            }
        })
    })
}

/**
 * 创建Promise
 * 1. new Promise()
 * 2. Promise.resolve() | Promise.reject()
 * 3. async函数
 *  */ 
