import {Layout} from 'antd'
import {IRouteComponentProps} from 'umi'

const {Header, Footer, Content} = Layout;
export default function(props: IRouteComponentProps) {
    return (
      <>
        <Header />
        <Content>
        { props.children }
        </Content>
        <Footer />
      </>
    );
  }