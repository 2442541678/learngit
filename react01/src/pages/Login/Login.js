import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import logo from './images/React.png'
import '../../resources/reset.css'

const Item = Form.Item

class Login extends React.Component {


    render() {
        return (
            <div className="login">
                <div className="background">
                    <div className="login-header">
                        <img src={logo} alt="logo"/>
                        <h1>React项目:管理系统</h1>
                    </div>
                    <div className="login-content">
                        <h1>用户登录</h1>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Item>
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />
                            </Item>

                            <Form.Item>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登 录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

// const WrapperForm = Form.Item(Login)

export default Login;
