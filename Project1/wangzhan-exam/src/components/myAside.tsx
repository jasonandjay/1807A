import React from 'react'
import {Layout, Menu} from 'antd'
import {MailOutlined} from '@ant-design/icons'
import {NavLink, useLocation} from 'umi'

const {Sider} = Layout
const {SubMenu, Item} = Menu
const MyHeader: React.FC = ()=>{
    // 从地址栏拿到当前展开的子菜单和高亮项
    const {pathname} = useLocation();
    const selectKey = pathname.split('/').pop() as string;
    let index = selectKey.search(/[A-Z]/);
    const openKey = selectKey.slice(index).toLowerCase();

    return <Sider collapsed={false}>
        <Menu 
            mode="inline" 
            theme="dark"
            defaultOpenKeys={[openKey]}
            defaultSelectedKeys={[selectKey]}
        >
            <SubMenu title="试题管理" key="question">
                <Item icon={<MailOutlined />} key="addQuestion">
                    <NavLink to="/main/addQuestion">添加试题</NavLink>
                </Item>
                <Item icon={<MailOutlined />} key="classifyQuestion">
                    <NavLink to="/main/classifyQuestion">试题分类</NavLink>
                </Item>
                <Item icon={<MailOutlined />} key="viewQuestion">
                    <NavLink to="/main/viewQuestion">查看试题</NavLink>
                </Item>
            </SubMenu>
        </Menu>
    </Sider>
}
export default MyHeader