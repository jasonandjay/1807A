import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';

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

interface IResponse{
  code: number,
  data: IItem[],
  msg: string
}
interface IItem{
  id: string,
  name: string,
  num: number,
  price: number,
  checked: boolean
}

// 容器组件和视图组件
const App:React.FC = (props:{})=>{
  // 在hooks中声明状态
  const [count, setCount] = useState<number>(0)
  const [list, setList] = useState<IItem []>([])

  //  在组件mount之后发起请求
  // [] 在组件创建之后只执行一次，等同于生命周期componentDidMount
  useEffect(() => {
    axios.get('/product/list').then((res: AxiosResponse<IResponse>)=>{
      debugger;
      if (res.data.code === 0){
        setList(res.data.data);
      }else{
        alert(res.data.msg);
      }
    })
  }, [])
  
  return <div>
    <button onClick={()=>setCount(count+1)}>+</button>
    <span>{count}</span>
    <span>{JSON.stringify(list)}</span>
    <button onClick={()=>setCount(count-1)}>-</button>
  </div>
}

export default App;