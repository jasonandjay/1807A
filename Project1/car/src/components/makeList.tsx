import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useHistory } from 'umi'
import styles from './makeList.less'
import { IRootState } from '@/models/index'
import { HomeModelState } from '@/models/home'

interface IProps{
    closeMake: ()=>void
}
const MakeList: React.FC<IProps> = props => {
    const [show, setShow] = useState(false)
    const { makeList } = useSelector<IRootState, HomeModelState>(state => state.home)
    const [pos, setPos] = useState<{x:number, y:number}>({x: 0, y:0});
    const conatiner = useRef(null);
    const history = useHistory();

    useEffect(() => {
        setShow(true)
    }, [])

    function touchStart(e: React.TouchEvent){
        (conatiner.current! as HTMLElement).style.transition = 'none';
        let touch = e.touches[0];
        setPos({
            x: touch.pageX,
            y: touch.pageY
        })
    }

    function touchMove(e: React.TouchEvent){
        let touch = e.touches[0];
        let offsetX = touch.pageX - pos.x;
        if (offsetX > 0){
            (conatiner.current! as HTMLElement).style.transform = `translateX(${-window.innerWidth*0.75 + offsetX}px)`;
        }

    }
    
    function touchEnd(e: React.TouchEvent){
        let touch = e.changedTouches[0];
        let offsetX = touch.pageX - pos.x;
        let width = window.innerWidth*0.75*0.3;
        (conatiner.current! as HTMLElement).style.transition = 'all .3s linear';
        if (offsetX < width){
            (conatiner.current! as HTMLElement).style.transform = `translateX(-100%)`;
        } else{
            (conatiner.current! as HTMLElement).style.transform = `translateX(0)`;
            let timer = setTimeout(()=>{
                window.clearTimeout(timer);
                props.closeMake();
            }, 300);
        }
    }
    
    /**
     * React中绑定事件
     * Class组件：construct中bind，箭头函数，在render里面bind
     * 函数式组件：useCallBack
     */
    function clickGroup(SerialID: string){
        history.push('/detail?SerialID='+SerialID);
    }

    return <div ref={conatiner} className={show ? styles.start : styles.container}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
    >{
        makeList.map(item => {
            return <div key={item.GroupId}> 
                <p>{item.GroupName}</p>
                <ul>{
                    item.GroupList.map(value => {
                        // return <li key={value.SerialID} onClick={clickGroup}>
                        return <li key={value.SerialID} onClick={e=>clickGroup(value.SerialID)}>
                        {/* return <li key={value.SerialID} onClick={clickGroup.bind(undefined, '12')}> */}
                            <img src={value.Picture} alt="" />
                            <span>{value.AliasName}</span>
                        </li>
                    })}</ul>
            </div>
        })
    }</div>
}

export default MakeList;

// 手动实现一个bind
// Function.prototype.myBind = function(context, ...args){
//     let that = this;
//     return function(){
//         that.apply(context, [...args, ...arguments]);
//     }
// }