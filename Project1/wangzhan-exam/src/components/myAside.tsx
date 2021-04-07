import React from 'react'
import {Layout, Menu} from 'antd'
import {NavLink, useLocation, UserModelState, useSelector, useIntl} from 'umi'
import IRootModelState from '@/models'

const {Sider} = Layout
const {SubMenu, Item} = Menu
const MyHeader: React.FC = ()=>{
    // 从redux中拿到我拥有的路由
    const {myMenu} = useSelector<IRootModelState, UserModelState>(state => state.user)
    // 从地址栏拿到当前展开的子菜单和高亮项
    const {pathname} = useLocation();
    const selectKey = pathname.split('/').pop() as string;
    let index = selectKey.search(/[A-Z]/);
    const openKey = selectKey.slice(index).toLowerCase();
    // 拿到国际化钩子
    const intl = useIntl();

    return <Sider collapsed={false}>
        <Menu 
            mode="inline" 
            theme="dark"
            defaultOpenKeys={[openKey]}
            defaultSelectedKeys={[selectKey]}
        >{
            myMenu.map(item=>{
                return <SubMenu icon={<item.meta.icon/>} title={intl.formatMessage({id:'menu.'+item.name})} key={item.name}>{
                    item.children?.filter(item=>item.meta.show)?.map(value=>{
                        return <Item key={value.name}>
                            <NavLink to={value.path}>{intl.formatMessage({id: 'menu.'+item.name+'.'+value.name})}</NavLink>
                        </Item>
                    })
                }</SubMenu>
            })
        }</Menu>
    </Sider>
}
export default MyHeader