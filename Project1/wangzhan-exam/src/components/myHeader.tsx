import React, { useEffect } from 'react'
import { Layout, Popover, Button, Avatar, Select } from 'antd'
import logo from '@/assets/logo.png'
import styles from './myHeader.less'
import {getLocale, setLocale} from 'umi'

const languages:{[key:string]:string} = {
    'zh': 'zh-CN',
    'zh-CN': 'zh-CN',
    'en': 'en-US',
    'en-US': 'en-US'
}
const { Header } = Layout
const MyHeader: React.FC = () => {
    const title = <div>
        <p>个人中心</p>
        <p>我的班级</p>
    </div>
    const content = <div>
        <p>退出登录</p>
    </div>

    function changeLanguage(value:string){
        setLocale(value, false);
    }
    useEffect(() => {
        // 设置默认语言
        setLocale(languages[navigator.language]);
    }, [])

    return <Header className={styles.container}>
        <img src={logo} className={styles.logo} alt="" />
        <Select defaultValue={languages[navigator.language]} onChange={changeLanguage}>
            <Select.Option value="zh-CN">中文</Select.Option>
            <Select.Option value="en-US">英文</Select.Option>
        </Select>
        <Popover content={content} title={title}>
            <Avatar />  
            <span className={styles.username}>{'chenmanjie'}</span>
        </Popover>
    </Header>

}
export default MyHeader