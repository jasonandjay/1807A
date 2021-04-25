import React from 'react';
import styles from './dobuleColumn.less'

interface IProps{
    left: React.ReactElement,
    right: React.ReactElement
}
const DobuleColumn: React.FC<IProps> = (props)=>{
    return <div className="container">
        <div className={styles.left}>{props.left}</div>
        <div className={styles.right}>{props.right}</div>
    </div>
}

export default DobuleColumn;