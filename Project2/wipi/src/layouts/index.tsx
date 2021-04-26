import { Layout } from 'antd'
import { IRouteComponentProps } from 'umi'
import styles from './index.less'
import MyHeader from '@/components/header'
import Progress from '@/components/progress'

const { Footer, Content } = Layout;

export default function (props: IRouteComponentProps) {
  const whiteList = ['/'];
  return (
    <>
      <Progress key={props.location.pathname} />
      <MyHeader />
      <Content>{props.children}</Content>
      {whiteList.indexOf(props.location.pathname) === -1 ? <Footer>底部</Footer> : null}
    </>
  );
}