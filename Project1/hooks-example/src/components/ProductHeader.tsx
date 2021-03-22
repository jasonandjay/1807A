import React from 'react'
import { IItem } from '../interface'

interface IProps {
    list: IItem[],
    changeAll: (checked:boolean)=>void
}
const ProductHeader: React.FC<IProps> = props=>{
    return <header>
        <input type="checkbox" checked={props.list.every(item=>item.checked)} onChange={e=>props.changeAll(e.target.checked)}/>
        <span>全选</span>
        <p>
            <span>总量：{props.list.filter(item=>item.checked).reduce((total, value)=>total+=value.num, 0)}</span>
            <span>总价：{props.list.filter(item=>item.checked).reduce((total, value)=>total+=value.num*value.price, 0).toFixed(2)}</span>
        </p>
    </header>;
}

export default ProductHeader;