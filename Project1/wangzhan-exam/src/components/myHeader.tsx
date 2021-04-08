import React, { ChangeEvent, useEffect, useState } from 'react'
import { Layout, Popover, Button, Avatar, Select, Modal, Form, Upload } from 'antd'
import logo from '@/assets/logo.png'
import styles from './myHeader.less'
import {setLocale, useSelector} from 'umi'
import Theme from './theme'
import IRootModelState from '@/models'
import {UserModelState} from '@/models/user'
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'


const languages:{[key:string]:string} = {
    'zh': 'zh-CN',
    'zh-CN': 'zh-CN',
    'en': 'en-US',
    'en-US': 'en-US'
}
const { Header } = Layout
const MyHeader: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const [curAvatar, setCuAvatar] = useState('');
    const {userInfo} = useSelector<IRootModelState, UserModelState>(state=>state.user)

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

    const uploadButton = (
        <div>
          {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
         <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    function handleUploadChange({file}: any){
        console.log('file...', file);
        if (file.status === 'done'){
            setCuAvatar(file.response.data[0].path);
        }
    }

    function changeAvatar(e: ChangeEvent<HTMLInputElement>){
        console.log('e..', e);
        if (e.target.files?.length){
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files![0]);
            reader.onload = function(){
                setCuAvatar(this.result as string);
            }
        }
    }

    return <Header className={styles.container}>
        <img src={logo} className={styles.logo} alt="" />
        <Select defaultValue={languages[navigator.language]} onChange={changeLanguage}>
            <Select.Option value="zh-CN">中文</Select.Option>
            <Select.Option value="en-US">英文</Select.Option>
        </Select>
        <Theme />
        <Button type="primary">按钮</Button>
        <Popover content={content} title={title}>
            <span onClick={()=>setShowModal(true)}>
                <Avatar src={curAvatar || userInfo.avatar}/>  
            </span>
            <span className={styles.username}>{userInfo.user_name}</span>
        </Popover>
        {/* <Modal 
         visible={showModal}
         onCancel={()=>setShowModal(false)}
         title="修改用户信息">
            <Form>
                <Form.Item label="用户头像">
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    // action="https://services.jasonandjay.com"
                    action="http://123.206.55.50:11000/upload"
                    // beforeUpload={beforeUpload}
                    onChange={handleUploadChange}
                >
                    {(curAvatar || userInfo.avatar) ? <Avatar src={curAvatar || userInfo.avatar} /> : uploadButton}
                </Upload>
                </Form.Item>
            </Form>
        </Modal> */}
         <Modal 
         visible={showModal}
         onCancel={()=>setShowModal(false)}
         footer={false}
         title="修改用户信息">
            <Form>
                <Form.Item label="用户头像">
                <input type="file" onChange={changeAvatar}/>
                {(curAvatar || userInfo.avatar) ? <Avatar src={curAvatar || userInfo.avatar} /> : uploadButton}
                </Form.Item>
                <Button htmlType="submit">确定</Button>
            </Form>
        </Modal>
    </Header>

}
export default MyHeader