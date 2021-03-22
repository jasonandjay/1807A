import MockJS from 'mockjs';

const data = MockJS.mock({
    "list|10-30":[{
        id: '@id',
        name: '@cname',
        'num|20-50': 30,
        price: '@float(10,100, 2, 2)',
        checked: '@boolean'  
    }]
})

// console.log('data...', data)

// 拦截请求
MockJS.mock('/product/list', (req, res)=>{
    return {
        code: 0,
        data: data.list,
        msg: '商品列表获取成功'
    }
})