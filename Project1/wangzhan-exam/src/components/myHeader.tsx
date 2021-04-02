import React from 'react'
import { Layout, Popover, Button, Avatar } from 'antd'
import logo from '@/assets/logo.png'
import styles from './myHeader.less'

const { Header } = Layout
const MyHeader: React.FC = () => {
    const title = <div>
        <p>个人中心</p>
        <p>我的班级</p>
    </div>
    const content = <div>
        <p>退出登录</p>
    </div>
    return <Header className={styles.container}>
        <img src={logo} className={styles.logo} alt="" />
        <Popover content={content} title={title}>
            <Avatar />  
            <span className={styles.username}>{'chenmanjie'}</span>
        </Popover>
    </Header>

}
export default MyHeader