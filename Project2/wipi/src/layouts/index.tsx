import {Layout} from 'antd'
import {IRouteComponentProps, NavLink} from 'umi'
import styles from './index.less'
import MyHeader from '@/components/header'

const {Header, Footer, Content} = Layout;

export default function(props: IRouteComponentProps) {
    return (
      <>
        <MyHeader />
        <Content>{ props.children }</Content>
        <Footer />
      </>
    );
  }