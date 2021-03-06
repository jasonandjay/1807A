import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useDispatch, useHistory, useLocation} from 'umi';
import styles from './login.less'
import {ILoginItem} from '@/utils/interface'

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const onFinish = (payload: ILoginItem) => {
        let result = dispatch({
            type: 'user/login',
            payload
        });
        
        (result as never as Promise<any>).then(res=>{
            let {query: {from}} = (location as unknown as {query: {from:string}})
            history.replace(decodeURIComponent(from) || '/');
        })
    };

    return <div className={styles.container}>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true, user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!'}}
            onFinish={onFinish}
        >
            <Form.Item
                name="user_name"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="user_pwd"
                rules={[{required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default LoginPage