import React, { useEffect, useRef, useState } from 'react'
import styles from './letterList.less'

interface IInfo {
    offsetTop: number,
    perLetterHeight: number
}
interface IProps {
    list: string[],
    moveLetter: (letter:string)=>void
}
const LetterList: React.FC<IProps> = props => {
    let [info, setInfo] = useState<IInfo>({} as IInfo)
    const ulEle = useRef(null);
    useEffect(() => {
        if (props.list.length) {
            let offsetTop = (window.innerHeight - (ulEle.current as unknown as HTMLElement).offsetHeight) / 2;
            let perLetterHeight = (ulEle.current as unknown as HTMLElement).offsetHeight / props.list.length;
            setInfo({
                offsetTop,
                perLetterHeight
            })
        }
    }, [props.list])

    function touchStart(e: React.TouchEvent) {
        console.log('e....', e, info);
        let index = Math.floor((e.touches[0].pageY - info.offsetTop) / info.perLetterHeight);
        if (index < 0){
            index = 0;
        }
        if (index >= props.list.length){
            index = props.list.length - 1;
        }
        console.log(props.list[index]);
        props.moveLetter(props.list[index]);
    }

    function touchMove(e: React.TouchEvent) {
        let index = Math.floor((e.touches[0].pageY - info.offsetTop) / info.perLetterHeight);
        if (index < 0){
            index = 0;
        }
        if (index >= props.list.length){
            index = props.list.length - 1;
        }
        console.log(props.list[index]);
        props.moveLetter(props.list[index]);
    }

    function touchEnd(e: React.TouchEvent) {
        props.moveLetter('');
    }

    return <ul
        ref={ulEle}
        className={styles.container}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
    >{
            props.list.map(item => {
                return <li key={item}>{item}</li>
            })}</ul>
}

export default LetterList;