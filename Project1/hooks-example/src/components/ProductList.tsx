import React from 'react'
import { IItem } from '../interface'

interface IProps {
    list: IItem[],
    changeCheckCB: (id:string)=>void,
    changeNumCB: (id:string, type:string)=>void
}
const ProductList: React.FC<IProps> = props => {
    return <div>{
        props.list.map(item => {
            return <li key={item.id} className="product">
                <input type="checkbox" checked={item.checked} onChange={()=>props.changeCheckCB(item.id)}/>
                <span>{item.name}</span>
                <div>
                    <p>${item.price}</p>
                    <p>
                        <button onClick={()=>props.changeNumCB(item.id, '+')}>+</button>
                        <span>{item.num}</span>
                        <button onClick={props.changeNumCB.bind(null, item.id, '-')}>-</button>
                    </p>
                </div>
            </li>
        })
    }</div>
}

export default ProductList;