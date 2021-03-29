import React, { ReactElement, useEffect, useState } from 'react'
import styles from './commonDialog.less'

interface IProps {
    allTitle: string,
    years: string[],
    yearsList: any[],
    callback?: (item: any) => void,
    renderItem: (item: any) => ReactElement
}

const CommonDialog: React.FC<IProps> = props => {
    let [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)
    }, [])

    return <div className={show ? styles.start : styles.container}>
        {/* 渲染顶部按钮 */}
        <button>{props.allTitle}</button>
        {/* 渲染年份 */}
        <div>{
            props.years.map(item => <span>{item}</span>)
        }</div>
        {/* 渲染内容 */}
        <div>{
            props.yearsList.map(item=>props.renderItem(item))    
        }</div>
    </div>
}

export default CommonDialog;