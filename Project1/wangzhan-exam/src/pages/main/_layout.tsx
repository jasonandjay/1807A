import React from 'react'
import { Layout } from 'antd';
// import MyHeader from '@/components/myHeader'
// import MyAside from '@/components/myAside'
const MyHeader = React.lazy(()=>import('@/components/myHeader'))
const MyAside = React.lazy(()=>import('@/components/MyAside'))


const { Content } = Layout;

const _layout: React.FC = (props) => {
    return <React.Suspense fallback={<p>Loading</p>}>
        <Layout style={{ height: '100%' }}>
            <MyHeader />
            <Layout>
                <MyAside></MyAside>
                <Content style={{height:'100%', boxSizing:'border-box', margin: '0 0 0 20px', overflowY:'scroll', padding: '20px', background: 'var(--bg)'}}>{props.children}</Content>
            </Layout>
        </Layout>
    </React.Suspense>
}

export default _layout