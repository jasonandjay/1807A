import {Layout} from 'antd'
import styles from './header.less'
import {NavLink} from 'umi'
import Theme from '@/components/theme'
import Search from '@/components/search'
import { useState } from 'react'
import cls from 'classnames'

const {Header} = Layout;
const MyHeader: React.FC = ()=>{
    const [visible, showVisible] = useState(false)

    return  <Header className={styles.header}>
    <NavLink to="/">
      <img src="https://wipi.oss-cn-shanghai.aliyuncs.com/2021-02-20/wipi-logo.png" alt=""/>
    </NavLink>
    <div className={cls(styles.mobileNav, visible?styles.active:'')} onClick={()=>showVisible(!visible)}>
        <span className={styles.stick}></span>
        <span className={styles.stick}></span>
        <span className={styles.stick}></span>
    </div>
    <nav className={cls(visible?styles.mobileMenu:'')}>
      <ul>
        <li>
          <NavLink to="/">首页</NavLink>
        </li>
        <li>
          <NavLink to="/">归档</NavLink>
        </li>
        <li>
          <NavLink to="/">知识笔记</NavLink>
        </li>
        <li>
          <NavLink to="/">留言板</NavLink>
        </li>
        <li>
          <NavLink to="/">关于</NavLink>
        </li>
      </ul>
      <ul>
        <Theme />
        <Search />
      </ul>
    </nav>
  </Header>
}

export default MyHeader;