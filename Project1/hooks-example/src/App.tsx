import React, { useEffect, useState } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import {IResponse, IItem} from './interface'
// 引入商品列表组件
import ProductList from './components/ProductList'
// 引入商品控制组件
import ProductHeader from './components/ProductHeader'

// 容器组件和视图组件
// const App:React.FC = (props:{})=>{
//   // 在hooks中声明状态
//   const [count, setCount] = useState<number>(0)

//   return <div>
//     <button onClick={()=>setCount(count+1)}>+</button>
//     <span>{count}</span>
//     <button onClick={()=>setCount(count-1)}>-</button>
//   </div>
// }

// export default App;

// 容器组件和视图组件
const App:React.FC = (props:{})=>{
  // 在hooks中声明状态
  // const [count, setCount] = useState<number>(0)
  const [list, setList] = useState<IItem []>([])

  //  在组件mount之后发起请求
  // [] 在组件创建之后只执行一次，等同于生命周期componentDidMount
  useEffect(() => {
    axios.get('/product/list').then((res: AxiosResponse<IResponse>)=>{
      // debugger;
      if (res.data.code === 0){
        setList(res.data.data);
      }else{
        alert(res.data.msg);
      }
    })
    return ()=>{
      console.log('component will be destory')
    }
  }, [])

  function changeCheckCB(id: string){
    let newList = [...list]
    let index = list.findIndex(item=>item.id===id)
    newList[index].checked = !list[index].checked;
    setList(newList);
  }

  function changeNumCB(id: string, type: string){
    let newList = [...list]
    let index = list.findIndex(item=>item.id===id)
    if (type === '+'){
      newList[index].num++;
    }else{
      if (list[index].num === 0){
        let result = window.confirm('确定要删除商品吗？')
        if (result){
          newList.splice(index, 1);
        }
      }else{
        newList[index].num--;
      }
    }
    setList(newList);
  }

  function changeAll(checked: boolean){
    let newList = [...list]
    newList.forEach(item=>item.checked = checked)
    setList(newList);
  }
  
  return <div>
    {/* <span>{JSON.stringify(list)}</span> */}
    <ProductHeader list={list} changeAll={changeAll}></ProductHeader>
    <ProductList list={list} changeCheckCB={changeCheckCB} changeNumCB={changeNumCB}></ProductList>
  </div>
}

export default App;