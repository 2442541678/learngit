import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css'
import { Redirect, Switch, Route } from 'react-router-dom'

import LeftNav from "../../components/LeftNav/LeftNav";
import Header from "../../components/Header/Header";

import Home from '../home/Home'
import But from '../ui/button/But'
import Carousels from '../ui/carousel/Carousel'
import Notice from "../ui/notice/Notice";
import Spins from '../ui/spin/Spin'

import Rich from "../rich/Rich";
import Tables from "../tables/Tables";
import Picture from "../picture/Picture";
import Rates from "../rates/Rates"
import Calendars from "../calendar/Calendars";
import Tubiao from "../tibiao/Tubiao"

const { Footer, Sider, Content } = Layout;


class Admin extends React.Component {
    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content>
                        <Switch>
                            <Route exact path="/home" component={Home} />

                            <Route path="/home/ui/buttons" component={But} />
                            <Route path="/home/ui/carousel" component={Carousels} />
                            <Route path="/home/ui/notice" component={Notice} />
                            <Route path="/home/ui/loading" component={Spins} />

                            <Route path="/home/rich" component={Rich} />
                            <Route path="/home/table" component={Tables} />
                            <Route path="/home/rate" component={Rates} />
                            <Route path="/home/calendar" component={Calendars} />
                            <Route path="/home/tubiao" component={Tubiao} />

                            <Route path="/home/picture" component={Picture} />

                        </Switch>
                    </Content>
                    <Footer style={{ background: '#999A9A',textAlign: 'center' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;