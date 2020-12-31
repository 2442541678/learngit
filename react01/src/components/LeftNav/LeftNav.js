import React from 'react'
import './LeftNav.css'
import 'antd/dist/antd.css'
import { Link } from "react-router-dom";
import Logo from './images/React.png'
import { Menu } from 'antd';
import {
    HomeOutlined,
    CompressOutlined,
    // AppstoreOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    // PieChartOutlined,
    // DesktopOutlined,
    // ContainerOutlined,
    // MailOutlined,
} from '@ant-design/icons';
import menuList from '../../resources/menuConfig'

const { SubMenu } = Menu;

/**
 * 左侧导航
 */
export default class LeftNav extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        const menuTreeNode = this.getMenuNodes(menuList)
        this.setState({
            menuTreeNode
        })
    }
    getMenuNodes = (menuList) => {
        return menuList.map(item=> {
            if (item.children) {
                return (
                    <SubMenu key={item.key} icon={<CompressOutlined />} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>

                )
            }
            return (
                <Menu.Item key={item.key} icon={<HomeOutlined />}>
                    <Link to={item.key}>{item.title}</Link>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <div className="left-nav">
                <Link className="left-nav-link" to="/home">
                    <img src={Logo} alt="logo" />
                    <h1>React</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['/home']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                >
                    {
                        this.getMenuNodes(menuList)
                    }
                    {/*<Menu.Item key="/home" icon={<HomeOutlined />}>*/}
                    {/*    <Link to="/home">首页</Link>*/}
                    {/*</Menu.Item>*/}

                    {/*<SubMenu key="/ui" icon={<CompressOutlined />} title="UI">*/}
                    {/*    <Menu.Item key="/but">*/}
                    {/*        <Link to="/ui/but">按钮</Link>*/}
                    {/*    </Menu.Item>*/}
                    {/*    <Menu.Item key="/loading">*/}
                    {/*        <Link to="/ui/carousels">Loading</Link>*/}
                    {/*    </Menu.Item>*/}
                    {/*    <Menu.Item key="/tongzhi">*/}
                    {/*        <Link to="/ui/notice">通知提醒</Link>*/}
                    {/*    </Menu.Item>*/}
                    {/*    <Menu.Item key="/lunbotu">*/}
                    {/*        <Link to="/ui/spin">轮播图</Link>*/}
                    {/*    </Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<Menu.Item key="2" icon={<DesktopOutlined />}>*/}
                    {/*    Option 2*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="3" icon={<ContainerOutlined />}>*/}
                    {/*    Option 3*/}
                    {/*</Menu.Item>*/}
                    {/*<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">*/}
                    {/*    <Menu.Item key="5">Option 5</Menu.Item>*/}
                    {/*    <Menu.Item key="6">Option 6</Menu.Item>*/}
                    {/*    <Menu.Item key="7">Option 7</Menu.Item>*/}
                    {/*    <Menu.Item key="8">Option 8</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">*/}
                    {/*    <Menu.Item key="9">Option 9</Menu.Item>*/}
                    {/*    <Menu.Item key="10">Option 10</Menu.Item>*/}
                    {/*    <SubMenu key="sub3" title="Submenu">*/}
                    {/*        <Menu.Item key="11">Option 11</Menu.Item>*/}
                    {/*        <Menu.Item key="12">Option 12</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*</SubMenu>*/}
                </Menu>
            </div>
        )
    }
}

