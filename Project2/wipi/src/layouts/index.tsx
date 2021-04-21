import {Layout} from 'antd'
import {IRouteComponentProps, NavLink} from 'umi'
import Theme from '@/components/theme'
import Search from '@/components/search'
import styles from './index.less'

const {Header, Footer, Content} = Layout;
export default function(props: IRouteComponentProps) {
    return (
      <>
        <Header className={styles.header}>
          <NavLink to="/">
            <img src="https://wipi.oss-cn-shanghai.aliyuncs.com/2021-02-20/wipi-logo.png" alt=""/>
          </NavLink>
          <nav>
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
        <Content>
        { props.children }
        </Content>
        <Footer />
      </>
    );
  }